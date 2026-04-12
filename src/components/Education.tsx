import { useScrollReveal } from '../hooks/useScrollReveal'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const education = [
  {
    institution: 'Indian Institute of Information Technology, Una',
    degree: 'B.Tech in Information Technology',
    period: '2023 – Present',
    location: 'Una, Himachal Pradesh, India',
    grade: null,
    current: true,
    desc: 'Pursuing undergraduate studies with focus on algorithms, system design, and software engineering principles.',
  },
  {
    institution: 'Rajasthan Board of Secondary Education (RBSE)',
    degree: 'Senior Secondary (Class XII)',
    period: '2022',
    location: 'Jaipur, Rajasthan, India',
    grade: '81.6%',
    current: false,
    desc: 'Completed with strong foundation in Mathematics and Computer Science.',
  },
]

export default function Education() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="education"
      className="py-24 px-6"
      style={{ background: '#0a0b0f' }}
    >
      <div ref={sectionRef} className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="code-label mb-3 reveal stagger-1">education.md</p>
          <div className="section-divider reveal stagger-1" />
          <h2 className="section-heading reveal stagger-2">Education</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-0 bottom-0 w-0.5"
            style={{
              background: 'linear-gradient(to bottom, #be5eed 0%, #00e0ca 80%, transparent 100%)',
            }}
          />

          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className={`relative pl-10 pb-8 reveal stagger-${index + 2}`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-1 w-3 h-3 rounded-full border-2"
                style={{
                  background: edu.current ? '#be5eed' : '#00e0ca',
                  borderColor: '#0a0b0f',
                  boxShadow: edu.current
                    ? '0 0 10px rgba(190,94,237,0.6)'
                    : '0 0 10px rgba(0,224,202,0.6)',
                  marginTop: '2px',
                }}
              />

              {/* Card */}
              <div className="card-glow-purple rounded-2xl p-7">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap size={16} style={{ color: '#be5eed' }} />
                      <span
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontWeight: 700,
                          color: '#e6e6e6',
                          fontSize: '1.05rem',
                        }}
                      >
                        {edu.institution}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        color: '#be5eed',
                      }}
                    >
                      {edu.degree}
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
                        {edu.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-end">
                      <MapPin size={13} style={{ color: '#888' }} />
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          fontSize: '0.78rem',
                          color: '#888',
                        }}
                      >
                        {edu.location}
                      </span>
                    </div>
                    {edu.current && (
                      <span
                        className="mt-1 self-end px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          background: 'rgba(190,94,237,0.15)',
                          color: '#be5eed',
                          fontFamily: 'DM Sans, sans-serif',
                          border: '1px solid rgba(190,94,237,0.3)',
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {edu.grade && (
                  <div className="mb-3">
                    <span
                      className="px-3 py-1 rounded-md text-sm font-medium"
                      style={{
                        background: 'rgba(0,224,202,0.08)',
                        border: '1px solid rgba(0,224,202,0.2)',
                        color: '#00e0ca',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.8rem',
                      }}
                    >
                      Score: {edu.grade}
                    </span>
                  </div>
                )}

                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    color: '#888',
                    fontSize: '0.88rem',
                    lineHeight: 1.65,
                  }}
                >
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
