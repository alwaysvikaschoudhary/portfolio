import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Programming Languages',
    icon: '{ }',
    color: 'cyan',
    skills: ['Java', 'C++', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    category: 'Backend Development',
    icon: '⚙',
    color: 'purple',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'REST API Design', 'HTTP Methods', 'JSON Handling', 'JWT Authentication'],
  },
  {
    category: 'Frontend Development',
    icon: '◻',
    color: 'cyan',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive UI Design', 'TypeScript'],
  },
  {
    category: 'Databases',
    icon: '🗄',
    color: 'purple',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Design', 'Data Integrity'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🔧',
    color: 'cyan',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux', 'JUnit'],
  },
  {
    category: 'Core Engineering',
    icon: '⚡',
    color: 'purple',
    skills: ['OOP', 'DBMS', 'System Design', 'Backend Debugging', 'Scalable Architecture', 'Data Structures & Algorithms'],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal, .skill-reveal')
            reveals.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('revealed')
              }, i * 40)
            })
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      className="py-24 px-6"
      style={{ background: '#0a0b0f' }}
    >
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="code-label mb-3 reveal">skills.config.ts</p>
          <div className="section-divider reveal" />
          <h2 className="section-heading reveal">Skills & Technologies</h2>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const isCyan = group.color === 'cyan'
            const accentColor = isCyan ? '#00e0ca' : '#be5eed'

            return (
              <div
                key={group.category}
                className={`${isCyan ? 'card-glow' : 'card-glow-purple'} rounded-2xl p-6 reveal`}
                style={{ transitionDelay: `${gi * 0.08}s` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                    style={{
                      background: isCyan ? 'rgba(0,224,202,0.1)' : 'rgba(190,94,237,0.1)',
                      border: `1px solid ${accentColor}25`,
                    }}
                  >
                    {group.icon}
                  </div>
                  <h3
                    className="font-semibold text-sm"
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      color: accentColor,
                    }}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Skill tags with stagger */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <span
                      key={skill}
                      className={`skill-tag skill-reveal ${isCyan ? 'tech-pill' : 'tech-pill-purple'}`}
                      style={{ transitionDelay: `${gi * 0.08 + si * 0.04}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* DSA Rating Banner */}
        <div
          className="mt-10 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-6 reveal"
          style={{
            background: 'linear-gradient(135deg, rgba(0,224,202,0.05) 0%, rgba(190,94,237,0.05) 100%)',
            border: '1px solid rgba(0,224,202,0.12)',
          }}
        >
          <div>
            <h3
              className="font-bold text-lg mb-1"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e6e6e6' }}
            >
              Competitive Programming
            </h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', color: '#888', fontSize: '0.88rem' }}>
              Consistent problem solver across multiple platforms
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { platform: 'LeetCode', rating: 'Knight', color: '#f6c33a' },
              { platform: 'CodeChef', rating: '3★ Rated', color: '#f97316' },
              { platform: 'GeeksforGeeks', rating: '500+ Problems', color: '#00e0ca' },
            ].map((item) => (
              <div key={item.platform} className="text-center">
                <div
                  className="text-lg font-bold"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: item.color,
                  }}
                >
                  {item.rating}
                </div>
                <div
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem',
                    color: '#888',
                  }}
                >
                  {item.platform}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
