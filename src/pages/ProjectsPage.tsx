import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import Navbar from '../components/Navbar'
import { projects } from '../lib/projectsData'

const categories = ['all', 'fullstack', 'backend', 'frontend', 'flutter'] as const
type Category = (typeof categories)[number]

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
                <div className="grid lg:grid-cols-[1fr_400px] gap-16">
                  {/* Content */}
                  <div>
                    <div
                      className="text-sm font-bold mb-2 tracking-widest uppercase"
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        color: accentColor,
                      }}
                    >
                      {project.tagline}
                    </div>
                    <h2
                      className="text-4xl md:text-5xl font-bold mb-8"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e6e6e6' }}
                    >
                      {project.name}
                    </h2>

                    {/* Desktop/Mobile Image Placeholder for small screens */}
                    <div className="lg:hidden mb-10 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
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
                    </div>

                    <div
                      className="prose prose-invert mb-10"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        color: '#a8a8a8',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                      }}
                    >
                      <p className="mb-6">{project.description}</p>
                      {project.fullDescription && <p>{project.fullDescription}</p>}
                    </div>

                    {project.keyFeatures && (
                      <div className="mb-10">
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
                                style={{ background: accentColor }}
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          className="btn-primary flex items-center gap-2"
                        >
                          <GithubIcon />
                          View Source
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="btn-secondary flex items-center gap-2"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Sidebar Info */}
                  <div className="space-y-8">
                    {/* Large Screen Image preview */}
                    <div className="hidden lg:block relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-8">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
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

                    <div className={`${isCyan ? 'card-glow' : 'card-glow-purple'} rounded-2xl p-8`}>
                      <h3
                        className="text-sm font-bold mb-6 tracking-wider uppercase"
                        style={{ fontFamily: 'JetBrains Mono, monospace', color: '#888' }}
                      >
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={isCyan ? 'tech-pill' : 'tech-pill-purple'}
                            style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-8 rounded-2xl border border-[#ffffff08] bg-[#ffffff02]">
                      <h3
                        className="text-sm font-bold mb-4 tracking-wider uppercase"
                        style={{ fontFamily: 'JetBrains Mono, monospace', color: '#888' }}
                      >
                        Role
                      </h3>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#e6e6e6' }}>
                        Lead Developer
                      </p>
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
