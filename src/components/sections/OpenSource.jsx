import React from 'react'

const CONTRIBUTIONS = [
  {
    title: 'OpenHuman — Korean locale (i18n)',
    desc:  'Added Korean language support to OpenHuman, a privacy-first agentic AI desktop app with 118+ integrations. Contributed i18n translations and a README spelling fix — part of an active early-beta project trending on GitHub.',
    tags:  ['i18n', 'TypeScript', 'Rust', 'open source', 'agentic AI'],
    repo:  'tinyhumansai/openhuman',
    code:  'https://github.com/tinyhumansai/openhuman',
    date:  'June 2026',
  },
]

const GitForkIcon = () => (
  <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
    <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

export default function OpenSource() {
  return (
    <section id="open-source" className="page-section solid">
      <p className="section-label">Community</p>
      <h2 className="section-heading">Open Source.</h2>
      <p className="section-body">
        Contributions to public projects — adding features, fixing bugs, and
        improving documentation for software used by developers worldwide.
      </p>

      <div className="os-grid">
        {CONTRIBUTIONS.map(c => (
          <div key={c.title} className="project-card project-contribution">
            <div className="contrib-badge">
              <GitForkIcon />
              open source contributor
            </div>
            <h3 className="contrib-title">{c.title}</h3>
            <p className="contrib-desc">{c.desc}</p>
            <div className="project-tags">
              {c.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
            </div>
            <hr className="contrib-divider" />
            <div className="contrib-footer">
              <a href={c.code} target="_blank" rel="noreferrer" className="contrib-link">
                <GitHubIcon />
                {c.repo}
              </a>
              <span className="contrib-date">{c.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
