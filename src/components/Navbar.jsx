import React, { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about',          label: 'About' },
  { href: '#experience',     label: 'Work' },
  { href: '#projects',       label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#tools',          label: 'Tools' },
  { href: '#blogs',          label: 'Blogs' },
  { href: '#contact',        label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  function close() { setOpen(false) }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a className="nav-brand" href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        <img src="/images/profile.png" alt="Navneet Singh" className="nav-avatar" />
        <span>Navneet Singh</span>
      </a>

      {/* desktop links */}
      <ul className="nav-links">
        {LINKS.map(l => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>

      {/* hamburger button */}
      <button
        className={`nav-burger${open ? ' active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* mobile drawer */}
      {open && (
        <div className="nav-drawer">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
