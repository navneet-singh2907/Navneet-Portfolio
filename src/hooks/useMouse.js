import { useEffect } from 'react'
import { uniforms } from '../webgl/uniforms/uniforms.js'
import * as THREE from 'three'

export function useMouse() {
  useEffect(() => {
    function onMove(e) {
      const nx = (e.clientX / window.innerWidth)  * 2 - 1
      const ny = (e.clientY / window.innerHeight) * 2 - 1
      if (uniforms.uMouse) {
        uniforms.uMouse.value.set(nx * 4.5, -ny * 1.6)
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
}
