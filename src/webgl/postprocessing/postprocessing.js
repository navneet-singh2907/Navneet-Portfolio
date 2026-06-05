import * as THREE from 'three'
import { EffectComposer }  from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass }      from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass }      from 'three/examples/jsm/postprocessing/OutputPass.js'

let composer

export function initComposer(renderer, scene, camera) {
  const W = window.innerWidth
  const H = window.innerHeight

  composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))

  const bloom = new UnrealBloomPass(new THREE.Vector2(W, H), 0.4, 0.4, 0.1)
  composer.addPass(bloom)

  composer.addPass(new OutputPass())

  return composer
}

export function resizeComposer(W, H) {
  if (composer) composer.setSize(W, H)
}
