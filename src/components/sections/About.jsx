import React from 'react'

const SERVICES = [
  { icon: '🤖', title: 'AI Engineer' },
  { icon: '⚡', title: 'Software Engineer' },
  { icon: '🧠', title: 'Agentic Systems' },
]

export default function About() {
  return (
    <section id="about" className="page-section solid">
      <p className="section-label">Introduction</p>
      <h2 className="section-heading">Overview.</h2>
      <p className="section-body">
        I'm a skilled AI Engineer with expertise in Python, JavaScript, and TypeScript,
        and deep experience in frameworks like React, Node.js, LangChain, and Three.js.
        I build intelligent systems that bridge cutting-edge AI with production-grade software —
        from agentic pipelines to GPU-accelerated visual experiences.
        Let's build something extraordinary together.
      </p>
      <div className="cards-row">
        {SERVICES.map(s => (
          <div key={s.title} className="service-card">
            <span className="service-icon">{s.icon}</span>
            <span className="service-title">{s.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
