import * as THREE from 'three'

const PARTICLE_COUNT = 30000

export function createParticleGeometry() {
  const positions = new Float32Array(PARTICLE_COUNT * 3)

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3
    positions[i3]     = (Math.random() - 0.5) * 40
    positions[i3 + 1] = (Math.random() - 0.5) * 22
    positions[i3 + 2] = (Math.random() - 0.5) * 8
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  return geometry
}

export { PARTICLE_COUNT }
