import { useEffect, useState } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import Navbar from '../components/Navbar'
import { projects, type Project } from '../lib/projectsData'

const categories = ['all', 'fullstack', 'backend', 'frontend', 'flutter'] as const
type Category = (typeof categories)[number]

const ProjectGallery = ({ project }: { project: Project }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = project.images || (project.image ? [project.image] : [])
  
  if (images.length === 0) {
    return (
      <div 
        className="w-full aspect-video flex items-center justify-center rounded-2xl border border-white/10"
        style={{ background: 'rgba(255,255,255,0.02)' }}
      >
        <p className="text-[#444] font-medium tracking-widest uppercase text-xs">No Preview Available</p>
      </div>
    )
  }

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12 bg-[#0a0b0f]">
      <div className="relative aspect-video overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${project.name} preview ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f]/60 via-transparent to-transparent pointer-events-none" />

        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:scale-110 active:scale-95 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/10 backdrop-blur-xl border border-white/10 hover:scale-110 active:scale-95 z-10"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-[#00e0ca] w-10 shadow-[0_0_12px_rgba(0,224,202,0.5)]' : 'bg-white/20 w-4 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const GithubIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function ProjectsPage() {
  useScrollRevealAll()
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pb-24 px-6" style={{ background: '#0a0b0f' }}>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20">
        {/* Category Filter */}
        <div 
          className="sticky top-16 z-30 mb-12 flex flex-wrap gap-3 justify-center py-6 animate-fade-in-up" 
          style={{ 
            animationDelay: '0.4s',
            background: 'linear-gradient(to bottom, #0a0b0f 80%, transparent)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                color: selectedCategory === cat ? '#00e0ca' : '#888',
                background: selectedCategory === cat ? 'rgba(0, 224, 202, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${selectedCategory === cat ? 'rgba(0, 224, 202, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
              }}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
              {selectedCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full border border-[#00e0ca] pointer-events-none"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-35">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isCyan = project.accent === 'cyan'
              const accentColor = isCyan ? '#00e0ca' : '#be5eed'

              return (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                <div className={`${isCyan ? 'card-glow' : 'card-glow-purple'} rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl`}>
                  {/* Top Header */}
                  <div className="mb-10">
                    <div
                      className="text-sm font-bold mb-3 tracking-widest uppercase"
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        color: accentColor,
                      }}
                    >
                      {project.tagline}
                    </div>
                    <h2
                      className="text-4xl md:text-5xl font-bold mb-6"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e6e6e6' }}
                    >
                      {project.name}
                    </h2>
                    
                    <div
                      className="prose prose-invert max-w-none"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        color: '#a8a8a8',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                      }}
                    >
                      <p className="mb-6">{project.description}</p>
                      {project.fullDescription && <p className="mb-8">{project.fullDescription}</p>}
                    </div>
                  </div>

                  {/* Middle Content: Features and Role */}
                  <div className="grid md:grid-cols-[1fr_250px] gap-12 mb-12">
                    {project.keyFeatures && (
                      <div>
                        <h3
                          className="text-lg font-bold mb-4"
                          style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e6e6e6' }}
                        >
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {project.keyFeatures.map((feature, fi) => (
                            <li
                              key={fi}
                              className="flex gap-3"
                              style={{
                                fontFamily: 'DM Sans, sans-serif',
                                color: '#a8a8a8',
                                fontSize: '1rem',
                              }}
                            >
                              <span
                                className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                                style={{ background: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] h-fit">
                      <h3
                        className="text-xs font-bold mb-3 tracking-wider uppercase"
                        style={{ fontFamily: 'JetBrains Mono, monospace', color: '#888' }}
                      >
                        Role
                      </h3>
                      <p className="font-medium" style={{ fontFamily: 'DM Sans, sans-serif', color: '#e6e6e6' }}>
                        Lead Developer
                      </p>
                    </div>
                  </div>

                  {/* Project Gallery */}
                  <ProjectGallery project={project} />

                  {/* Bottom Footer: Tech Stack and Links */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8 border-t border-white/5">
                    <div className="flex flex-wrap gap-2 max-w-2xl">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className={isCyan ? 'tech-pill' : 'tech-pill-purple'}
                          style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          className="btn-secondary flex items-center gap-2 px-6"
                        >
                          <GithubIcon />
                          Source
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="btn-primary flex items-center gap-2 px-6"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
