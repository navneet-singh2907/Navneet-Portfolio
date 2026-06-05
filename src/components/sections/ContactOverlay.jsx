import React from 'react'

export default function ContactOverlay() {
  return (
    <div id="contact" className="section-content">
      <div className="contact-panel glass" style={{ width: '100%' }}>
        <div>
          <h3>// get in touch</h3>
          <p>Open to opportunities, collaborations, and interesting problems.</p>
        </div>
        <div className="contact-links">
          <a href="mailto:navnitgujjar@gmail.com" className="contact-link">Email</a>
          <a href="https://github.com/navneet-singh2907" className="contact-link" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/navneet-singh" className="contact-link" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}
