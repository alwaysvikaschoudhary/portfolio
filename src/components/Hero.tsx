import { useEffect, useRef, useState } from 'react'
import { Code2, Mail, MapPin, ChevronDown } from 'lucide-react'

const ROLES = ['Full Stack Developer', 'Backend Engineer', 'Problem Solver', 'Java Enthusiast']
const PARTICLE_COUNT = 60

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  color: string
  dx: number
  dy: number
}

function generateParticles(): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 15,
    color: i % 3 === 0 ? '#00e0ca' : i % 3 === 1 ? '#be5eed' : '#ffffff',
    dx: (Math.random() - 0.5) * 200,
    dy: -(Math.random() * 400 + 200),
  }))
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [particles] = useState(generateParticles)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animFrameRef = useRef<number>(0)

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    } else {
      const speed = isDeleting ? 50 : 80
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1),
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    type Dot = {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      alpha: number
      color: string
    }

    const dots: Dot[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '#00e0ca' : '#be5eed',
    }))

    const draw = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 224, 202, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw dots
      dots.forEach((dot) => {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle =
          dot.color === '#00e0ca'
            ? `rgba(0, 224, 202, ${dot.alpha})`
            : `rgba(190, 94, 237, ${dot.alpha})`
        ctx.fill()

        dot.x += dot.vx
        dot.y += dot.vy

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1
      })

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0a0b0f' }}
    >
      {/* Canvas particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,224,202,0.04) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(190,94,237,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Floating CSS particles */}
      <div className="particles-container pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              opacity: 0,
              animation: `particle-drift ${p.duration}s ${p.delay}s linear infinite`,
              '--dx': `${p.dx}px`,
              '--dy': `${p.dy}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting label */}
        <div
          className="inline-flex items-center gap-2 mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          <div
            className="px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
            style={{
              background: 'rgba(0, 224, 202, 0.08)',
              border: '1px solid rgba(0, 224, 202, 0.2)',
              color: '#00e0ca',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-[#00e0ca] mr-2 animate-pulse" />
            Available for opportunities
          </div>
        </div>

        {/* Name */}
        <h1
          className="mb-4 animate-fade-in-up"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            animationDelay: '0.2s',
          }}
        >
          <span style={{ color: '#e6e6e6' }}>Hi, I'm </span>
          <span className="gradient-text">Vikas Choudhary</span>
        </h1>

        {/* Typewriter */}
        <div
          className="mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.35s', minHeight: '2.5rem' }}
        >
          <span
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(1.1rem, 3vw, 1.75rem)',
              color: '#888',
            }}
          >
            {'// '}
          </span>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 500,
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: '#00e0ca',
            }}
          >
            {displayText}
          </span>
        </div>

        {/* Location */}
        <div
          className="flex items-center justify-center gap-2 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.45s' }}
        >
          <MapPin size={14} style={{ color: '#888' }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '0.9rem' }}>
            Jaipur, Rajasthan, India
          </span>
        </div>

        {/* Bio */}
        <p
          className="max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            color: '#888',
            fontSize: '1rem',
            lineHeight: 1.7,
            animationDelay: '0.5s',
          }}
        >
          B.Tech IT student at IIIT Una building production-grade full-stack systems with React,
          Spring Boot & RESTful APIs. Passionate about clean architecture, scalable backends, and
          solving 500+ DSA problems.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <button onClick={scrollToProjects} className="btn-primary">
            View Projects
          </button>
          <button onClick={scrollToContact} className="btn-secondary">
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-6 animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          {[
            {
              href: '#',
              icon: (
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              ),
              label: 'GitHub',
            },
            {
              href: '#',
              icon: (
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
              label: 'LinkedIn',
            },
            { href: '#', icon: <Code2 size={20} />, label: 'LeetCode' },
            {
              href: 'mailto:alwaysvikaschoudhary@gmail.com',
              icon: <Mail size={20} />,
              label: 'Email',
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#888',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00e0ca'
                e.currentTarget.style.borderColor = 'rgba(0,224,202,0.3)'
                e.currentTarget.style.boxShadow = '0 0 12px rgba(0,224,202,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#888'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: '#888' }}>
          scroll
        </span>
        <ChevronDown size={16} style={{ color: '#888' }} />
      </div>
    </section>
  )
}
