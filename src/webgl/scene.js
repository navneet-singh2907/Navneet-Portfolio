import * as THREE from 'three'
import { createParticleGeometry } from './geometry/createParticleGeometry.js'
import { uniforms } from './uniforms/uniforms.js'
import vertexShader   from './shaders/vertex.glsl?raw'
import fragmentShader from './shaders/fragment.glsl?raw'

let renderer, scene, camera, points, animFrameId, handleResize
const clock = new THREE.Clock()

export function init(canvas) {
  const W = window.innerWidth
  const H = window.innerHeight

  scene  = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100)
  camera.position.z = 6

  renderer = new THREE.WebGLRenderer({ canvas, antialias: false })
  renderer.setSize(W, H)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 1)

  const geometry = createParticleGeometry()
  const material  = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true,
    depthWrite:  false,
  })

  points = new THREE.Points(geometry, material)
  scene.add(points)

  // Store named reference so removeEventListener can match it exactly
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
  uniforms.uTime.value = clock.getElapsedTime()
  renderer.render(scene, camera)
}

export function dispose() {
  cancelAnimationFrame(animFrameId)
  window.removeEventListener('resize', handleResize)
  points.geometry.dispose()
  points.material.dispose()
  renderer.dispose()
}
