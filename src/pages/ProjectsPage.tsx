import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'

const GithubIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const detailedProjects = [
  {
    name: 'Smart Contact Manager',
    tagline: 'Secure Contact Management System',
    description:
      'A production-grade full-stack contact management system with user authentication, email verification, and personalized contact storage — built with Java, Spring Boot, and Spring Security.',
    fullDescription: 'The Smart Contact Manager is a comprehensive solution for managing professional and personal contacts securely. It features a robust backend architecture using Spring Boot and Hibernate, ensuring data integrity and efficient CRUD operations. The system is secured with Spring Security, implementing role-based access control to protect sensitive user information.',
    keyFeatures: [
      'User Authentication & Authorization using Spring Security.',
      'Email Verification workflows integrated with Mailtrap.',
      'Personalized contact storage with search and filtering capabilities.',
      'Responsive UI built with HTML, CSS, and JavaScript.',
      'Profile management and secure login mechanisms.'
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'Hibernate', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Mailtrap', 'Git'],
    github: '#',
    demo: null,
    accent: 'cyan',
  },
  {
    name: 'Food Delivery App',
    tagline: 'Online Food Ordering System',
    description:
      'A full-stack food delivery platform with user authentication, restaurant listing, cart management, and order processing — end-to-end with Spring Boot and MySQL.',
    fullDescription: 'This application provides a seamless experience for users to browse restaurants, manage their carts, and place orders online. It leverages the power of Spring Boot for a scalable backend and MySQL for structured data storage. The application is designed with a focus on smooth user interaction and dynamic UI rendering.',
    keyFeatures: [
      'Restaurant listing and detailed menu management.',
      'Advanced cart management and order processing flows.',
      'Secure login and registration with Spring Security.',
      'Structured data storage using MySQL for users, restaurants, and orders.',
      'Dynamic UI rendering for a responsive user experience.'
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git'],
    github: '#',
    demo: null,
    accent: 'purple',
  },
]

export default function ProjectsPage() {
  useScrollRevealAll()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen pb-24 px-6" style={{ background: '#0a0b0f' }}>
      <div className="max-w-5xl mx-auto pt-32">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-12 text-[#888] hover:text-[#00e0ca] transition-colors group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>Back to Portfolio</span>
        </Link>

        {/* Header */}
        <div className="mb-20">
          <p className="code-label mb-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>projects_detailed.v1</p>
          <div className="section-divider animate-fade-in-up" style={{ animationDelay: '0.15s' }} />
          <h1 className="section-heading mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s', fontSize: '3.5rem' }}>
            Detailed Projects
          </h1>
          <p
            className="text-xl max-w-2xl animate-fade-in-up"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              color: '#a8a8a8',
              lineHeight: 1.6,
              animationDelay: '0.3s'
            }}
          >
            A deeper dive into the architecture, challenges, and solutions behind my technical projects.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {detailedProjects.map((project, index) => {
            const isCyan = project.accent === 'cyan'
            const accentColor = isCyan ? '#00e0ca' : '#be5eed'

            return (
              <div key={project.name} className="reveal">
                <div className="grid lg:grid-cols-[1fr_400px] gap-12">
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
                      className="text-4xl font-bold mb-8"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e6e6e6' }}
                    >
                      {project.name}
                    </h2>

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
                      <p>{project.fullDescription}</p>
                    </div>

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
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
