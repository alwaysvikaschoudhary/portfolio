import { useState, useEffect, useCallback, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ExternalLink, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from '@tanstack/react-router'
import { projects } from '../lib/projectsData'

const GithubIcon = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function Projects() {
  const sectionRef = useScrollReveal()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const ITEMS_PER_PAGE = 1

  const handleNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + ITEMS_PER_PAGE) % projects.length)
  }, [])

  const handlePrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - ITEMS_PER_PAGE + projects.length) % projects.length)
  }, [])

  useEffect(() => {
    autoPlayRef.current = setInterval(handleNext, 5000)
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [handleNext])

  const resetTimer = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = setInterval(handleNext, 5000)
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  const visibleProjects = [
    projects[currentIndex],
  ]

  return (
    <section
      id="projects"
      className="py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0e14 0%, #0a0b0f 100%)' }}
    >
      <div ref={sectionRef} className="max-w-7xl mx-auto relative px-12">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="section-heading reveal stagger-2">Featured Projects</h1>
            <div className="section-divider reveal stagger-1" />
            <p
              className="mt-3 reveal stagger-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: '#888',
                fontSize: '0.92rem',
                maxWidth: '480px',
              }}
            >
              Production-ready systems built with clean architecture and real-world constraints.
            </p>
          </div>

          <Link
            to="/projects"
            className="reveal stagger-4 group flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#e6e6e6',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0, 224, 202, 0.4)'
              e.currentTarget.style.background = 'rgba(0, 224, 202, 0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
            }}
          >
            <span>View all Projects in Detailed</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            handlePrev()
            resetTimer()
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-10 hidden md:flex"
          style={{
            background: 'rgba(23, 23, 28, 0.8)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#e6e6e6',
            backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(0, 224, 202, 0.4)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => {
            handleNext()
            resetTimer()
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-10 hidden md:flex"
          style={{
            background: 'rgba(23, 23, 28, 0.8)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#e6e6e6',
            backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(190, 94, 237, 0.4)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
        >
          <ChevronRight size={20} />
        </button>

        {/* Carousel Container */}
        <div className="relative min-h-[700px] md:min-h-[600px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="absolute inset-0 flex justify-center"
            >
              {visibleProjects.map((project, index) => {
                const isCyan = project.accent === 'cyan'
                const accentColor = isCyan ? '#00e0ca' : '#be5eed'

                return (
                  <div
                    key={`${project.name}-${index}`}
                    className={`${isCyan ? 'card-glow' : 'card-glow-purple'} rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row h-full max-w-5xl w-full shadow-2xl transition-all duration-500 gap-10`}
                  >
                    {/* Project Left side: Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div
                            className="text-xs md:text-sm font-bold mb-2 tracking-widest uppercase"
                            style={{
                              fontFamily: 'JetBrains Mono, monospace',
                              color: accentColor,
                              opacity: 0.8,
                            }}
                          >
                            {project.tagline}
                          </div>
                          <h3
                            className="text-2xl md:text-3xl font-bold"
                            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e6e6e6' }}
                          >
                            {project.name}
                          </h3>
                        </div>

                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              aria-label="GitHub"
                              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                              style={{
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: '#888',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = accentColor
                                e.currentTarget.style.borderColor = `${accentColor}40`
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#888'
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                              }}
                            >
                              <GithubIcon />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              aria-label="Live Demo"
                              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                              style={{
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: '#888',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = accentColor
                                e.currentTarget.style.borderColor = `${accentColor}40`
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#888'
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                              }}
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p
                        className="mb-6 text-base md:text-lg"
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          color: '#a8a8a8',
                          lineHeight: 1.6,
                        }}
                      >
                        {project.description}
                      </p>

                      <ul className="space-y-3 mb-8 flex-1">
                        {project.bullets.map((bullet, bi) => (
                          <li
                            key={bi}
                            className="flex gap-3 items-start text-sm md:text-base cursor-default"
                            style={{
                              fontFamily: 'DM Sans, sans-serif',
                              color: '#e6e6e6',
                              lineHeight: 1.5,
                            }}
                          >
                            <span
                              className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full"
                              style={{ background: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={isCyan ? 'tech-pill' : 'tech-pill-purple'}
                            style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem' }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Right side: Image Preview */}
                    <div className="flex-1 hidden lg:flex items-center justify-center">
                      <div className="relative group/img w-full">
                        <div 
                          className="absolute -inset-1 rounded-2xl blur-xl opacity-20 group-hover/img:opacity-40 transition-opacity duration-500"
                          style={{ background: accentColor }}
                        />
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover/img:scale-[1.02]">
                          {project.image ? (
                            <img 
                              src={project.image} 
                              alt={project.name} 
                              className="w-full h-auto object-cover"
                            />
                          ) : (
                            <div 
                              className="w-full aspect-video flex items-center justify-center"
                              style={{ background: 'rgba(255,255,255,0.02)' }}
                            >
                              <p className="text-[#444] font-medium tracking-widest uppercase text-xs">No Preview Available</p>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent opacity-60" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: Math.ceil(projects.length / ITEMS_PER_PAGE) }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const newDirection = i * ITEMS_PER_PAGE > currentIndex ? 1 : -1
                setDirection(newDirection)
                setCurrentIndex(i * ITEMS_PER_PAGE)
                resetTimer()
              }}
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: currentIndex === i * ITEMS_PER_PAGE ? '32px' : '8px',
                background: currentIndex === i * ITEMS_PER_PAGE
                  ? 'linear-gradient(90deg, #00e0ca, #be5eed)'
                  : 'rgba(255,255,255,0.1)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
