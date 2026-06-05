import React, { useEffect, useRef } from 'react'
import { init, dispose } from '../webgl/scene.js'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight
    init(canvas)
    return () => dispose()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100vw', height: '100vh' }}
    />
  )
}
