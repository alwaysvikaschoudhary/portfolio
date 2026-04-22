import { useScrollReveal } from '../hooks/useScrollReveal'
import { Trophy, Code2 } from 'lucide-react'

const achievements = [
  {
    icon: <Trophy size={24} />,
    title: '3rd Place — Run Code Run',
    subtitle: 'Intra-college Coding Competition, IIIT Una',
    description:
      'Secured 3rd position out of 25 teams in the intra-college coding competition at IIIT Una by solving real-time algorithmic challenges under strict time constraints.',
    highlight: 'Top 3 / 25 Teams',
    color: 'cyan',
    badge: '🏆',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Data Structures & Algorithms',
    subtitle: 'LeetCode Knight | CodeChef 3★ | 500+ Problems',
    description:
      'Solved 500+ DSA problems across LeetCode and GeeksforGeeks with strong focus on arrays, graphs, and trees. Achieved Knight rating on LeetCode and 3★ on CodeChef.',
    highlight: 'Knight on LeetCode',
    color: 'purple',
    badge: '⚡',
  },
]

export default function Achievements() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="achievements"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #0a0b0f 0%, #0d0e14 100%)' }}
    >
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="code-label mb-3 reveal stagger-1">achievements.log</p>
          <div className="section-divider reveal stagger-1" />
          <h2 className="section-heading reveal stagger-2">Achievements</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, index) => {
            const isCyan = ach.color === 'cyan'
            const accentColor = isCyan ? '#00e0ca' : '#be5eed'

            return (
              <div
                key={ach.title}
                className={`${isCyan ? 'card-glow' : 'card-glow-purple'} rounded-2xl p-7 reveal stagger-${index + 3}`}
              >
                {/* Badge emoji */}
                <div className="text-4xl mb-4">{ach.badge}</div>

                {/* Highlight tag */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{
                    background: isCyan ? 'rgba(0,224,202,0.12)' : 'rgba(190,94,237,0.12)',
                    border: `1px solid ${accentColor}30`,
                    color: accentColor,
                    fontFamily: 'JetBrains Mono, monospace',
                    letterSpacing: '0.04em',
                  }}
                >
                  {ach.highlight}
                </span>

                <h3
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e6e6e6' }}
                >
                  {ach.title}
                </h3>

                <p
                  className="text-sm mb-4"
                  style={{ fontFamily: 'DM Sans, sans-serif', color: accentColor, opacity: 0.8 }}
                >
                  {ach.subtitle}
                </p>

                <div
                  className="mb-5"
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
                  {ach.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
