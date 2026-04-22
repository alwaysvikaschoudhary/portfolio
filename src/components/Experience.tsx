import { useScrollReveal } from '../hooks/useScrollReveal'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    company: 'Cograd',
    role: 'Full Stack Developer Intern',
    period: 'May 2025 – July 2025',
    location: 'Remote',
    bullets: [
      'Built and deployed full-stack event management modules using React.js and Spring Boot, supporting real-time registrations and dynamic agendas for 5+ production events.',
      'Refactored the NavJobs platform following a Service–Repository architecture, implementing role-based navigation, advanced search filters, and modular UI components to improve scalability.',
      'Designed and secured RESTful APIs with JWT-based authentication, enforcing role-based access control and consistent request validation across backend services.',
      'Improved frontend performance by 30% using lazy loading, code splitting, and reusable component patterns, validated through browser performance audits.',
      'Integrated the Gemini API to deliver AI-driven job recommendations and implemented an automated cover letter rewriting feature tailored to user profiles.',
    ],
    tech: ['React.js', 'Spring Boot', 'JWT', 'REST APIs', 'Gemini API', 'Java'],
  },
]

export default function Experience() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="experience"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #0a0b0f 0%, #0d0e14 100%)' }}
    >
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="code-label mb-3 reveal stagger-1">experience.json</p>
          <div className="section-divider reveal stagger-1" />
          <h2 className="section-heading reveal stagger-2">Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-0 bottom-0 w-0.5 reveal stagger-1"
            style={{
              background: 'linear-gradient(to bottom, #00e0ca 0%, #be5eed 60%, transparent 100%)',
              transformOrigin: 'top',
            }}
          />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative pl-10 pb-8 reveal stagger-${index + 2}`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-1 timeline-dot"
                style={{ marginTop: '2px' }}
              />

              {/* Card */}
              <div className="card-glow rounded-2xl p-7">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={16} style={{ color: '#00e0ca' }} />
                      <span
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: 600,
                          color: '#e6e6e6',
                          fontSize: '1.15rem',
                        }}
                      >
                        {exp.role}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: '#00e0ca',
                      }}
                    >
                      @ {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-right">
                    <div className="flex items-center gap-1.5 justify-end">
                      <Calendar size={13} style={{ color: '#888' }} />
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.75rem',
                          color: '#888',
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <MapPin size={13} style={{ color: '#888' }} />
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '0.8rem',
                          color: '#888',
                        }}
                      >
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="mb-5"
                  style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }}
                />

                {/* Bullet points */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex gap-3"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        color: '#a8a8a8',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                      }}
                    >
                      <span
                        className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                        style={{ background: '#00e0ca' }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
