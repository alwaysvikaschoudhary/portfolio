import { useScrollReveal } from '../hooks/useScrollReveal'
import { Users, Trophy } from 'lucide-react'

const leadership = [
  {
    title: 'Volleyball – Intra College Sports',
    role: 'Team Captain',
    description:
      'Led the team to win the intra-college volleyball championship, demonstrating leadership, coordination, and competitive resilience under pressure.',
    icon: <Trophy size={22} />,
    color: 'cyan',
    tag: '🏐 Champion',
  },
  {
    title: 'Core Member – Force Club, IIIT Una',
    role: 'Technical Events Organizer',
    description:
      'Organized and coordinated coding competitions and technical events as a core member of Force Club at IIIT Una, fostering the technical culture of the institute.',
    icon: <Users size={22} />,
    color: 'purple',
    tag: '💻 Organizer',
  },
]

export default function Leadership() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="leadership"
      className="py-24 px-6"
      style={{ background: '#0a0b0f' }}
    >
      <div ref={sectionRef} className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="code-label mb-3 reveal stagger-1">leadership.json</p>
          <div className="section-divider reveal stagger-1" />
          <h2 className="section-heading reveal stagger-2">Leadership & Extracurriculars</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((item, index) => {
            const isCyan = item.color === 'cyan'
            const accentColor = isCyan ? '#00e0ca' : '#be5eed'

            return (
              <div
                key={item.title}
                className={`${isCyan ? 'card-glow' : 'card-glow-purple'} rounded-2xl p-7 reveal stagger-${index + 3}`}
              >
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: isCyan ? 'rgba(0,224,202,0.1)' : 'rgba(190,94,237,0.1)',
                      color: accentColor,
                      border: `1px solid ${accentColor}20`,
                    }}
                  >
                    {item.icon}
                  </div>

                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: isCyan ? 'rgba(0,224,202,0.1)' : 'rgba(190,94,237,0.1)',
                      border: `1px solid ${accentColor}25`,
                      color: accentColor,
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3
                  className="text-base font-bold mb-1"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e6e6e6' }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm mb-4"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    color: accentColor,
                    opacity: 0.75,
                  }}
                >
                  {item.role}
                </p>

                <div
                  className="mb-4"
                  style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }}
                />

                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    color: '#a8a8a8',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
