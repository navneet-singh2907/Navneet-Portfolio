import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-line" />
      <div className="hero-eyebrow">
        <div className="hero-dot" />
      </div>
      <h1 className="hero-title">
        Hi, I'm <span>Navneet</span><br />
        <span>Singh</span>
      </h1>
      <p className="hero-subtitle">
        I architect agentic AI systems, GPU-accelerated interfaces,
        and full-stack applications that push what software can feel like.
      </p>

      <div className="hero-scroll" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
        <div className="scroll-mouse">
          <div className="scroll-mouse-dot" />
        </div>
      </div>
    </section>
  )
}
