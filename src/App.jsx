import React from 'react'
import ParticleCanvas from './components/ParticleCanvas.jsx'
import Navbar         from './components/Navbar.jsx'
import Hero           from './components/sections/Hero.jsx'
import About          from './components/sections/About.jsx'
import Experience     from './components/sections/Experience.jsx'
import Projects       from './components/sections/Projects.jsx'
import Contact        from './components/sections/Contact.jsx'
import { useMouse }   from './hooks/useMouse.js'

export default function App() {
  useMouse()

  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <footer className="footer">
          © 2025 Navneet Singh. Designed &amp; built with Three.js + React.
        </footer>
      </main>
    </>
  )
}
