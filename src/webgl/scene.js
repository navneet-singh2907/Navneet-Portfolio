import * as THREE from 'three'
import { createParticleGeometry } from './geometry/createParticleGeometry.js'

let renderer, scene, camera, points, animFrameId

export function init(canvas) {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
  camera.position.z = 6

  renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const geometry = createParticleGeometry()
  const material = new THREE.PointsMaterial({ color: 0x00ffff, size: 0.02, sizeAttenuation: true })
  points = new THREE.Points(geometry, material)
  scene.add(points)

  window.addEventListener('resize', () => onResize(canvas))

  tick()
}

function tick() {
  animFrameId = requestAnimationFrame(tick)
  renderer.render(scene, camera)
}

function onResize(canvas) {
  camera.aspect = canvas.clientWidth / canvas.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
}

export function dispose() {
  cancelAnimationFrame(animFrameId)
  window.removeEventListener('resize', onResize)
  points.geometry.dispose()
  points.material.dispose()
  renderer.dispose()
}
