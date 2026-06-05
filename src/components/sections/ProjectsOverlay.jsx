import React from 'react'

const PROJECTS = [
  {
    title: 'Agentic AI Pipeline',
    desc:  'Multi-agent orchestration system using LLMs for automated task decomposition, tool use, and self-correcting execution loops.',
    tags:  ['Python', 'LangChain', 'GPT-4'],
    link:  '#',
  },
  {
    title: 'GPU Particle Portfolio',
    desc:  '30,000-particle WebGL system with custom GLSL shaders, scroll-driven morphing, and real-time post-processing bloom.',
    tags:  ['Three.js', 'GLSL', 'GSAP'],
    link:  '#',
  },
  {
    title: 'ML Engineering Platform',
    desc:  'End-to-end machine learning pipeline with automated training, evaluation, versioning, and one-click cloud deployment.',
    tags:  ['PyTorch', 'MLflow', 'AWS'],
    link:  '#',
  },
]

export default function ProjectsOverlay() {
  return (
    <div id="projects" className="section-content">
      <div className="projects-row">
        {PROJECTS.map(p => (
          <div key={p.title} className="project-card glass">
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
            <div className="project-card-footer">
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
              <a href={p.link} className="project-link">view →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
