import * as THREE from 'three'
import { createParticleGeometry } from './geometry/createParticleGeometry.js'
import { SEQUENCE_POSITIONS } from './geometry/textPositions.js'
import { uniforms } from './uniforms/uniforms.js'
import vertexShader   from './shaders/vertex.glsl?raw'
import fragmentShader from './shaders/fragment.glsl?raw'

// How long (seconds) to hold at morph=1 before reversing, per sequence index
// seq 0 = "Welcome to" — holds 1s so the user reads it, then "My Portfolio" joins
const HOLD_DURATIONS = [1.0, 0, 0, 0, 0]

// Reverse speed per sequence — seq 0→1 transition is fast so cloud flash is brief
const REVERSE_SPEEDS = [0.018, 0.003, 0.003, 0.003, 0.003]

let renderer, scene, camera, points, handleResize, animFrameId
let seqIndex    = 0
let morphDir    = 1
let morphSpeed  = 0.003
let holdEndTime = null       // clock seconds when hold expires (null = not holding)
const clock     = new THREE.Clock()

function swapToSequence(index) {
  seqIndex = index % SEQUENCE_POSITIONS.length
  points.geometry.setAttribute(
    'aTargetPosition',
    new THREE.BufferAttribute(SEQUENCE_POSITIONS[seqIndex], 3)
  )
}

export function init(canvas) {
  const W = window.innerWidth
  const H = window.innerHeight

  scene  = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100)
  camera.position.z = 8

  renderer = new THREE.WebGLRenderer({ canvas, antialias: false })
  renderer.setSize(W, H)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 1)

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
  })

  points = new THREE.Points(geometry, material)
  scene.add(points)

  handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', handleResize)

  tick()
}

function tick() {
  animFrameId = requestAnimationFrame(tick)
  const t = clock.getElapsedTime()
  uniforms.uTime.value = t

  if (holdEndTime !== null) {
    // Holding at morph=1 — wait until hold duration expires
    if (t >= holdEndTime) {
      holdEndTime = null
      morphDir    = -1
      morphSpeed  = REVERSE_SPEEDS[seqIndex]
    }
    // Don't advance morph progress during hold
  } else {
    uniforms.uMorphProgress.value += morphDir * morphSpeed

    if (uniforms.uMorphProgress.value >= 1.0) {
      uniforms.uMorphProgress.value = 1.0
      const hold = HOLD_DURATIONS[seqIndex] || 0
      if (hold > 0) {
        holdEndTime = t + hold   // pause here
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

  renderer.render(scene, camera)
}

export function setMorphProgress(value) {
  uniforms.uMorphProgress.value = THREE.MathUtils.clamp(value, 0, 1)
}

export function dispose() {
  cancelAnimationFrame(animFrameId)
  window.removeEventListener('resize', handleResize)
  points.geometry.dispose()
  points.material.dispose()
  renderer.dispose()
}
