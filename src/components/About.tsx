import { useScrollReveal } from '../hooks/useScrollReveal'
import { Code2, Layers, Database, Zap } from 'lucide-react'

const highlights = [
  {
    icon: <Code2 size={22} />,
    title: 'Full Stack',
    desc: 'React + Spring Boot end-to-end',
  },
  {
    icon: <Layers size={22} />,
    title: 'Clean Architecture',
    desc: 'Service-Repository pattern',
  },
  {
    icon: <Database size={22} />,
    title: 'Database Design',
    desc: 'MySQL, PostgreSQL, MongoDB',
  },
  {
    icon: <Zap size={22} />,
    title: 'DSA & Problem Solving',
    desc: '500+ LeetCode & GFG problems',
  },
]

export default function About() {
  const sectionRef = useScrollReveal()

  return (
    <section id="about" className="py-24 px-6" style={{ background: '#0a0b0f' }}>
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <p className="code-label mb-3 reveal stagger-1">about_me.ts</p>
            <div className="section-divider reveal stagger-2" />
            <h2 className="section-heading mb-6 reveal stagger-2">About Me</h2>

            <p
              className="mb-5 reveal stagger-3"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: '#a8a8a8',
                lineHeight: 1.8,
                fontSize: '0.975rem',
              }}
            >
              I'm a{' '}
              <span style={{ color: '#00e0ca' }}>B.Tech Information Technology</span> student at the
              Indian Institute of Information Technology, Una — building and shipping real-world
              applications since my first year.
            </p>
            <p
              className="mb-5 reveal stagger-4"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: '#a8a8a8',
                lineHeight: 1.8,
                fontSize: '0.975rem',
              }}
            >
              During my internship at{' '}
              <span style={{ color: '#be5eed' }}>Cograd</span>, I architected full-stack event
              management systems, secured RESTful APIs with JWT authentication, and boosted frontend
              performance by 30% through lazy loading and code splitting.
            </p>
            <p
              className="reveal stagger-5"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: '#a8a8a8',
                lineHeight: 1.8,
                fontSize: '0.975rem',
              }}
            >
              Beyond code, I'm a{' '}
              <span style={{ color: '#00e0ca' }}>Knight on LeetCode</span>, a 3★ CodeChef coder, and
              a volleyball champion who leads teams both on the field and in the codebase.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-8">
              {[
                { value: '500+', label: 'DSA Problems' },
                { value: '5+', label: 'Production Events' },
                { value: '30%', label: 'Perf Improvement' },
              ].map((stat, i) => (
                <div key={stat.label} className={`reveal stagger-${i + 5}`}>
                  <div
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      background: 'linear-gradient(135deg, #00e0ca, #be5eed)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      color: '#888',
                      fontSize: '0.8rem',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`card-glow rounded-xl p-5 reveal stagger-${i + 2}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{
                    background: 'rgba(0, 224, 202, 0.1)',
                    color: '#00e0ca',
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-semibold mb-1"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e6e6e6' }}
                >
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '0.82rem' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
