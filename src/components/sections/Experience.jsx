import React from 'react'

const EXPERIENCE = [
  {
    title:   'AI Engineer',
    company: 'Your Company',
    date:    'Jan 2024 – Present',
    icon:    '🤖',
    points: [
      'Architected multi-agent LLM pipelines for automated task decomposition and execution.',
      'Built GPU-accelerated WebGL interfaces with custom GLSL shaders and 30k-particle systems.',
      'Designed and deployed RAG systems integrating vector databases with production APIs.',
    ],
  },
  {
    title:   'Full Stack Developer',
    company: 'Freelance',
    date:    'Jun 2023 – Jan 2024',
    icon:    '💻',
    points: [
      'Designed and implemented responsive front-end interfaces using React and state management.',
      'Developed RESTful APIs using Node.js and Express for seamless client-server communication.',
      'Integrated third-party services and payment gateways for e-commerce applications.',
    ],
  },
  {
    title:   'Software Engineer',
    company: 'Your Company',
    date:    'Jan 2023 – Jun 2023',
    icon:    '⚙️',
    points: [
      'Built scalable backend systems handling high-throughput data processing.',
      'Implemented automated testing suites improving code coverage significantly.',
      'Collaborated with cross-functional teams to deliver features on tight deadlines.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="page-section solid">
      <p className="section-label">What I have done so far</p>
      <h2 className="section-heading">Work Experience.</h2>
      <div className="timeline">
        {EXPERIENCE.map((exp, i) => (
          <div key={exp.title} className={`timeline-item${i % 2 !== 0 ? ' right' : ''}`}>
            <div className="timeline-card">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <ul>{exp.points.map(p => <li key={p}>{p}</li>)}</ul>
            </div>
            <div className="timeline-node">
              <div className="timeline-circle">{exp.icon}</div>
              <span className="timeline-date">{exp.date}</span>
            </div>
            <div className="timeline-spacer" />
          </div>
        ))}
      </div>
    </section>
  )
}
