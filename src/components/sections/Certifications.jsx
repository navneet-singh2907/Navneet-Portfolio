import React from 'react'

const CERTS = [
  {
    title:  'Introduction to DevOps',
    issuer: 'IBM via Coursera',
    date:   'Feb 23, 2023',
    tags:   ['DevOps', 'CI/CD', 'Automation'],
    url:    'https://coursera.org/verify/2MT8MVXWVJ9D',
    logo:   'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  },
  {
    title:  'Complete Python Bootcamp 2025',
    issuer: 'CodeWithHarry',
    date:   'Sep 14, 2025',
    tags:   ['Python', 'Programming', 'Backend'],
    url:    'https://drive.google.com/file/d/1GAvqGOY6KHi_TDso0oXoeD5Qy_QAwWxr/view?usp=sharing',
    logo:   'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    title:  'Ultimate Web Development Course 2025',
    issuer: 'CodeWithHarry',
    date:   'Oct 22, 2025',
    tags:   ['Web Development', 'Frontend', 'HTML · CSS · JS'],
    url:    'https://drive.google.com/file/d/1mDL7yum34XWp--JPlSvrGdzmlshhNpPo/view?usp=sharing',
    logo:   'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  },
  {
    title:  'Machine Learning – Extended Learning Program',
    issuer: 'Chandigarh University',
    date:   'Feb 13–17, 2023',
    tags:   ['Machine Learning', 'AI', 'Workshop'],
    url:    'https://drive.google.com/file/d/1lcS6J18v_XQV1Zc23waOIPLvFBkkBu4M/view?usp=sharing',
    logo:   null,
    logoText: 'CU',
  },
  {
    title:  'Professional Certificate in Machine Learning',
    issuer: 'Udemy · Academy of Computing & AI',
    date:   'Oct 06, 2025',
    tags:   ['Machine Learning', 'AI', 'Data Science'],
    url:    'https://udemy-certificate.s3.amazonaws.com/pdf/UC-4932ffe4-8ead-40e3-8446-9bd7aa060558.pdf',
    logo:   null,
    logoText: 'U',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="page-section solid">
      <p className="section-label">My credentials</p>
      <h2 className="section-heading">Certifications.</h2>
      <div className="certs-grid">
        {CERTS.map(c => (
          <a key={c.title} href={c.url} target="_blank" rel="noreferrer" className="cert-card">
            <div className="cert-logo">
              {c.logo
                ? <img src={c.logo} alt={c.issuer} />
                : <span>{c.logoText}</span>
              }
            </div>
            <div className="cert-info">
              <h3>{c.title}</h3>
              <p className="cert-issuer">{c.issuer}</p>
              <p className="cert-date">{c.date}</p>
              <div className="project-tags" style={{ marginTop: '0.6rem' }}>
                {c.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
