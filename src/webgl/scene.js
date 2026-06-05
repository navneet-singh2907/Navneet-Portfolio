import * as THREE from 'three'
import { createParticleGeometry }       from './geometry/createParticleGeometry.js'
import { SEQUENCE_POSITIONS }           from './geometry/textPositions.js'
import { uniforms }                     from './uniforms/uniforms.js'
import { initComposer, resizeComposer } from './postprocessing/postprocessing.js'
import vertexShader   from './shaders/vertex.glsl?raw'
import fragmentShader from './shaders/fragment.glsl?raw'

const HOLD_DURATIONS  = [1.0, 0, 0, 0, 0]
const REVERSE_SPEEDS  = [0.018, 0.003, 0.003, 0.003, 0.003]

let renderer, composer, scene, camera, points, handleResize, animFrameId
let seqIndex    = 0
let morphDir    = 1
let morphSpeed  = 0.003
let holdEndTime = null
let savedCanvas = null
const clock     = new THREE.Clock()

function swapToSequence(index) {
  seqIndex = index % SEQUENCE_POSITIONS.length
  points.geometry.setAttribute(
    'aTargetPosition',
    new THREE.BufferAttribute(SEQUENCE_POSITIONS[seqIndex], 3)
  )
}

function buildScene() {
  const W = window.innerWidth
  const H = window.innerHeight

  scene  = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100)
  camera.position.set(-4.5, 1, 8)

  renderer = new THREE.WebGLRenderer({ canvas: savedCanvas, antialias: false })
  renderer.setSize(W, H)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 1)
  renderer.toneMapping         = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.0

  composer = initComposer(renderer, scene, camera)

  const geometry = createParticleGeometry()
  geometry.setAttribute(
    'aTargetPosition',
    new THREE.BufferAttribute(SEQUENCE_POSITIONS[seqIndex], 3)
  )

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true,
    depthWrite:  false,
    blending:    THREE.AdditiveBlending,
  })

  points = new THREE.Points(geometry, material)
  scene.add(points)
}

export function init(canvas) {
  savedCanvas = canvas

  const W = window.innerWidth
  const H = window.innerHeight
  canvas.width  = W
  canvas.height = H

  buildScene()

  handleResize = () => {
    const W = window.innerWidth, H = window.innerHeight
    camera.aspect = W / H
    camera.updateProjectionMatrix()
    renderer.setSize(W, H)
    resizeComposer(W, H)
  }
  window.addEventListener('resize', handleResize)

  // Recover gracefully if the GPU context is lost (driver reset, too many tabs, etc.)
  canvas.addEventListener('webglcontextlost', e => {
    e.preventDefault()           // allow the browser to restore the context
    cancelAnimationFrame(animFrameId)
  }, false)

  canvas.addEventListener('webglcontextrestored', () => {
    buildScene()                 // rebuild all GPU objects on the same canvas
    tick()
  }, false)

  tick()
}

function tick() {
  animFrameId = requestAnimationFrame(tick)
  const t = clock.getElapsedTime()
  uniforms.uTime.value = t

  if (holdEndTime !== null) {
    if (t >= holdEndTime) {
      holdEndTime = null
      morphDir    = -1
      morphSpeed  = REVERSE_SPEEDS[seqIndex]
    }
  } else {
    uniforms.uMorphProgress.value += morphDir * morphSpeed

    if (uniforms.uMorphProgress.value >= 1.0) {
      uniforms.uMorphProgress.value = 1.0
      const hold = HOLD_DURATIONS[seqIndex] || 0
      if (hold > 0) {
        holdEndTime = t + hold
      } else {
        morphDir   = -1
        morphSpeed = REVERSE_SPEEDS[seqIndex]
      }
    } else if (uniforms.uMorphProgress.value <= 0.0) {
      uniforms.uMorphProgress.value = 0.0
      morphDir   = 1
      morphSpeed = 0.003
      swapToSequence(seqIndex + 1)
    }
  }

  composer.render()
}

export function dispose() {
  cancelAnimationFrame(animFrameId)
  window.removeEventListener('resize', handleResize)
  if (points)    { points.geometry.dispose(); points.material.dispose() }
  if (renderer)  renderer.dispose()

  // Reset all module-level state so a React StrictMode remount starts clean
  renderer = composer = scene = camera = points = handleResize = animFrameId = savedCanvas = null
  seqIndex    = 0
  morphDir    = 1
  morphSpeed  = 0.003
  holdEndTime = null
  uniforms.uMorphProgress.value = 0.0
}
