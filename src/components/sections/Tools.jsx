import React, { useState } from 'react'

export default function Tools() {
  const [url, setUrl]     = useState('')
  const [qrSrc, setQrSrc] = useState(null)
  const [error, setError] = useState(null)

  function generate(e) {
    e.preventDefault()
    const trimmed = url.trim()
    if (!trimmed) return
    // Block non-http(s) schemes (javascript:, data:, etc.) before passing to external API
    if (!/^https?:\/\//i.test(trimmed)) {
      setQrSrc(null)
      setError('Please enter a URL starting with https:// or http://')
      return
    }
    setError(null)
    setQrSrc(`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(trimmed)}`)
  }

  return (
    <section id="tools" className="page-section solid">
      <p className="section-label">Utilities</p>
      <h2 className="section-heading">Tools.</h2>
      <div className="tools-grid">
        <div className="tool-card">
          <div className="tool-header">
            <span className="tool-icon">⚡</span>
            <div>
              <h3>Live QR Generator</h3>
              <p className="tool-subtitle">A Python-inspired utility tool</p>
            </div>
          </div>
          <form className="tool-form" onSubmit={generate}>
            <input
              type="url"
              placeholder="Paste any URL here…"
              value={url}
              onChange={e => setUrl(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">Generate QR Code</button>
          </form>
          {error && <p className="tool-error">{error}</p>}
          {qrSrc && (
            <div className="qr-result">
              <img src={qrSrc} alt="QR code" />
              <a href={qrSrc} download="qrcode.png" className="btn-outline" style={{ marginTop: '1rem' }}>
                Download
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
