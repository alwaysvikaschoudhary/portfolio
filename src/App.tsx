import { useEffect, useRef } from 'react'
import { useScrollRevealAll } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Leadership from './components/Leadership'
import Contact from './components/Contact'

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      aria-hidden="true"
      style={{
        left: '-9999px',
        top: '-9999px',
      }}
    />
  )
}

function App() {
  useScrollRevealAll()

  return (
    <div
      style={{
        background: '#0a0b0f',
        minHeight: '100vh',
        fontFamily: 'DM Sans, sans-serif',
      }}
    >
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
    </div>
  )
}

export default App
