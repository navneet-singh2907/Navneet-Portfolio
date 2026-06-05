import React, { useState } from 'react'

const BLOGS = [
  {
    tag:      'Career & AI',
    title:    'AI Is Changing IT — Not Killing It',
    date:     'Feb 2025',
    readTime: '5 min read',
    teaser:   'Automation is removing repetitive work, but real engineering skills still matter. Here\'s what\'s actually happening and what you should do about it.',
    article: {
      heading: 'AI, Automation, and the Reality of IT Jobs: What\'s Really Happening and What We Should Do About It',
      published: 'Dec 2025',
      sections: [
        {
          heading: null,
          body: '"AI is going to replace humans. Developers will become useless. There will be no IT jobs left." These claims are everywhere — but understanding the context reveals a very different reality.',
        },
        {
          heading: 'AI Isn\'t the Villain — Context Matters',
          body: 'When a CIO says "work that 100 people did earlier is now done by 20," context is everything. AI typically replaces repetitive, rule-based tasks that were already undergoing automation — not creative engineering work.',
        },
        {
          heading: 'Automation Didn\'t Start With AI',
          body: 'Take warehouse monitoring as an example. What started as manual inspection evolved to programmed detection, then AI-enhanced systems. AI didn\'t replace creative human work — it replaced predictable, automated processes that were already shrinking.',
        },
        {
          heading: 'Every Company Wants to Be an AI Company',
          body: 'Companies adopt AI for customer demand, cost reduction, and scalability. Layoffs result from entire job categories losing relevance — not from AI being inherently superior to humans.',
        },
        {
          heading: 'The Real Reason Behind Layoffs',
          body: 'This is "old IT vs new IT," not humans vs AI. The traditional career model — learn one technology and ride it for years — no longer exists. The bar has risen for everyone, especially entry-level.',
        },
        {
          heading: 'So What Should You Do?',
          body: 'Don\'t over-rely on prompt engineering without foundational knowledge of systems, APIs, databases, and debugging. Follow this progression: Foundation first → advanced engineering skills → then use AI as a tool.',
        },
        {
          heading: 'Stop Asking "Will AI Replace Me?"',
          body: 'Ask where AI still struggles: contextual understanding, judgment, creativity, accountability, ethical thinking. That\'s where you build your edge.',
        },
        {
          heading: 'The Final Truth',
          body: 'AI removes boring, repetitive work — and that\'s a good thing. Advanced engineers who combine deep technical knowledge with AI fluency remain the most in-demand people in the industry. Evolve, don\'t panic.',
        },
      ],
    },
  },
]

export default function Blogs() {
  const [open, setOpen] = useState(null)

  return (
    <section id="blogs" className="page-section solid">
      <p className="section-label">Articles</p>
      <h2 className="section-heading">Blogs.</h2>
      <p className="section-body">Learning notes and perspectives from my journey in software and AI.</p>

      <div className="blogs-list">
        {BLOGS.map((b, i) => (
          <div key={b.title} className="blog-card">
            <div className="blog-meta">
              <span className="blog-tag">{b.tag}</span>
              <span className="blog-date">{b.date}</span>
              <span className="blog-read">{b.readTime}</span>
            </div>
            <h3 className="blog-title">{b.title}</h3>
            <p className="blog-teaser">{b.teaser}</p>
            <button
              className="blog-toggle"
              onClick={() => setOpen(open === i ? null : i)}
            >
              {open === i ? 'Close ↑' : 'Read more →'}
            </button>

            {open === i && (
              <article className="blog-article">
                <h2>{b.article.heading}</h2>
                <p className="blog-published">Published {b.article.published}</p>
                {b.article.sections.map((s, j) => (
                  <div key={j} className="blog-section">
                    {s.heading && <h3>{s.heading}</h3>}
                    <p>{s.body}</p>
                  </div>
                ))}
              </article>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
