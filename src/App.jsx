import React from 'react'
import ParticleCanvas     from './components/ParticleCanvas.jsx'
import Navbar             from './components/Navbar.jsx'
import Hero               from './components/sections/Hero.jsx'
import About              from './components/sections/About.jsx'
import Experience         from './components/sections/Experience.jsx'
import Projects           from './components/sections/ProjectsStack.jsx'
import OpenSource         from './components/sections/OpenSource.jsx'
import Certifications     from './components/sections/Certifications.jsx'
import Tools              from './components/sections/Tools.jsx'
import Blogs              from './components/sections/Blogs.jsx'
import Contact            from './components/sections/Contact.jsx'
import { useMouse }       from './hooks/useMouse.js'

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
        <OpenSource />
        <Certifications />
        <Tools />
        <Blogs />
        <Contact />
        <footer className="footer">
          © 2025 navneetdataX.com · All Rights Reserved
        </footer>
      </main>
    </>
  )
}
