import React from 'react'

const PROJECTS = [
  {
    icon:  '🤖',
    title: 'Agentic AI Pipeline',
    desc:  'Multi-agent orchestration system using LLMs for automated task decomposition, tool use, and self-correcting execution loops.',
    tags:  ['Python', 'LangChain', 'GPT-4', 'FastAPI'],
    link:  '#',
  },
  {
    icon:  '✨',
    title: 'GPU Particle Portfolio',
    desc:  '30,000-particle WebGL system with custom GLSL shaders, scroll-driven morphing, simplex noise drift, and UnrealBloom post-processing.',
    tags:  ['Three.js', 'GLSL', 'React', 'GSAP'],
    link:  '#',
  },
  {
    icon:  '🧠',
    title: 'ML Engineering Platform',
    desc:  'End-to-end machine learning pipeline with automated training, evaluation, versioning, and one-click cloud deployment.',
    tags:  ['PyTorch', 'MLflow', 'Docker', 'AWS'],
    link:  '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="page-section solid">
      <p className="section-label">My Work</p>
      <h2 className="section-heading">Projects.</h2>
      <p className="section-body">
        The following projects showcase my skills through real-world examples.
        Each reflects my ability to solve complex problems, work across the stack,
        and ship production-ready software.
      </p>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <div key={p.title} className="project-card">
            <div className="project-img">
              <span>{p.icon}</span>
              <a href={p.link} className="project-share" title="View project">↗</a>
            </div>
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
