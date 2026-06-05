import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="page-section solid">
      <p className="section-label">Get in touch</p>
      <h2 className="section-heading">Contact.</h2>
      <div className="contact-layout">
        <form
          className="contact-form"
          onSubmit={e => { e.preventDefault(); alert('Message sent!') }}
        >
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="What's your name?" required />
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input type="email" placeholder="What's your email address?" required />
          </div>
          <div className="form-group">
            <label>Your Message</label>
            <textarea rows={5} placeholder="What do you want to say?" required />
          </div>
          <button type="submit" className="btn-primary">Send</button>
        </form>
        <div className="contact-visual">🌐</div>
      </div>
    </section>
  )
}
