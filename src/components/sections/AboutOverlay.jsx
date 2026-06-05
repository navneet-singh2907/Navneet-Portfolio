import React from 'react'

const TECH = ['Python', 'LangChain', 'React', 'Node.js', 'Three.js', 'PyTorch', 'AWS', 'Docker']

export default function AboutOverlay() {
  return (
    <div id="about" className="section-content">
      <div className="about-card glass">
        <h3>// about</h3>
        <p>
          Building intelligent systems at the intersection of AI and engineering.
          I architect agentic pipelines, design GPU-accelerated interfaces, and
          ship products that push what software can feel like.
        </p>
        <div className="tech-chips">
          {TECH.map(t => <span key={t} className="chip">{t}</span>)}
        </div>
      </div>
    </div>
  )
}
