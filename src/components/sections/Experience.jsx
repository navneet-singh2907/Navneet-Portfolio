import React from 'react'

const EXPERIENCE = [
  {
    title:   'Computer Science Engineering',
    company: 'Bachelor\'s Degree',
    date:    '2014 – 2018',
    icon:    '🎓',
    type:    'education',
    points: [
      'Studied core computer science subjects including data structures, algorithms, operating systems, and databases.',
      'Gained practical exposure through academic and team-based software engineering projects.',
    ],
  },
  {
    title:   'Software Developer',
    company: 'Industry Experience',
    date:    '2019 – 2020',
    icon:    '💻',
    type:    'work',
    points: [
      'Developed and maintained web applications using modern programming languages and frameworks.',
      'Gained hands-on experience in debugging, feature implementation, and optimising code for performance and reliability.',
    ],
  },
  {
    title:   'Masters of Computer Science Engineering',
    company: 'Graduate Degree',
    date:    '2022 – 2023',
    icon:    '🎓',
    type:    'education',
    points: [
      'Focused on advanced topics including machine learning, data analytics, distributed systems, and software architecture.',
      'Delivered hands-on academic projects applying ML pipelines and enterprise-scale system design.',
    ],
  },
  {
    title:   'Masters of Computer Information Systems',
    company: 'Graduate Degree',
    date:    '2024 – Present',
    icon:    '🚀',
    type:    'education',
    points: [
      'Advancing expertise in information systems, data analysis, and modern enterprise technologies.',
      'Working on applied academic and industry-focused projects bridging AI and systems engineering.',
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
