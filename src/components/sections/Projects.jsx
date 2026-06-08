import React from 'react'

const PROJECTS = [
  {
    img:   '/images/project1.png',
    title: 'Credit Card Fraud Detection',
    desc:  'Machine-learning web app using Python, Flask, and Isolation Forest to identify fraudulent transactions in real time. Deployed with Render.',
    tags:  ['Python', 'Flask', 'Machine Learning', 'Render'],
    demo:  'https://fraud-capstone-web.onrender.com',
    code:  'https://github.com/navneet-singh2907/Fraud_Capstone',
  },
  {
    img:   null,
    gradient: 'linear-gradient(135deg, #1a1040, #2d1b69)',
    icon:  '🌐',
    title: 'Portfolio Website',
    desc:  'Fully responsive personal portfolio built with HTML, CSS, and JavaScript. Features animations, smooth scrolling, and dynamic project sections.',
    tags:  ['HTML', 'CSS', 'JavaScript'],
    demo:  null,
    code:  'https://github.com/navneet-singh2907/Portfolio_Website',
  },
  {
    img:   null,
    gradient: 'linear-gradient(135deg, #0d2137, #1a4a6b)',
    icon:  '📊',
    title: 'Power BI Sales Dashboard',
    desc:  'Interactive Power BI dashboard analysing sales performance with KPIs, trend insights, and region/product breakdowns. Built with Power Query and DAX measures.',
    tags:  ['Power BI', 'DAX', 'Power Query', 'Data Visualisation'],
    demo:  null,
    code:  'https://github.com/navneet-singh2907/Pizza-Sales-dashboard-PowerBI',
  },
  {
    img:   null,
    gradient: 'linear-gradient(135deg, #1a0a00, #3d1a00, #5c2d00)',
    icon:  '🔧',
    title: 'OBD2 Engine Diagnostics Telemetry Lab',
    desc:  'Automotive telemetry dashboard that reads OBD2 logs and auto-diagnoses engine health — fuel trim breach detection, RPM scatter by load zone, dual O₂ waveform comparison, and live NHTSA recall/complaint lookup. No API key required.',
    tags:  ['Python', 'Streamlit', 'Pandas', 'NHTSA API', 'Data Visualisation'],
    demo:  'https://engine-diagnostics-dashboard-nsingh.streamlit.app',
    code:  'https://github.com/navneet-singh2907/engine-diagnostics-dashboard',
  },
  {
    img:   null,
    gradient: 'linear-gradient(135deg, #0a1628, #1a3a5c, #2d1b69)',
    icon:  '🎓',
    title: 'RAG-Based AI Teaching Assistant',
    desc:  'Fully local RAG pipeline that searches 2000+ course-video transcript embeddings and returns the exact video name, timestamp, and an AI-generated explanation — zero cloud dependency.',
    tags:  ['Python', 'Whisper', 'Ollama', 'Streamlit', 'NumPy', 'scikit-learn'],
    demo:  null,
    code:  'https://github.com/navneet-singh2907/RAG-AI-Assistance',
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
            <div
              className="project-img"
              style={p.img ? {} : { background: p.gradient }}
            >
              {p.img
                ? <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                : <span style={{ fontSize: '3rem' }}>{p.icon}</span>
              }
              <div className="project-links">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="project-share" title="Live demo">↗</a>
                )}
                {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="project-share" title="View code">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>}
              </div>
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
