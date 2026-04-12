import { useScrollReveal } from '../hooks/useScrollReveal'
import { Mail, Phone, MapPin, Code2, ExternalLink } from 'lucide-react'

const GH = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LI = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const socials = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vikaschoudhary',
    href: '#',
    icon: <LI />,
    color: '#0a66c2',
  },
  {
    label: 'GitHub',
    value: 'github.com/vikaschoudhary',
    href: '#',
    icon: <GH />,
    color: '#e6e6e6',
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/vikaschoudhary',
    href: '#',
    icon: <Code2 size={20} />,
    color: '#f6c33a',
  },
]

const contactInfo = [
  {
    label: 'Email',
    value: 'alwaysvikaschoudhary@gmail.com',
    href: 'mailto:alwaysvikaschoudhary@gmail.com',
    icon: <Mail size={18} />,
  },
  {
    label: 'Phone',
    value: '+91-9782868120',
    href: 'tel:+919782868120',
    icon: <Phone size={18} />,
  },
  {
    label: 'Location',
    value: 'Jaipur, Rajasthan, India',
    href: null,
    icon: <MapPin size={18} />,
  },
]

export default function Contact() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #0d0e14 0%, #0a0b0f 100%)' }}
    >
      <div ref={sectionRef} className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="code-label mb-3 reveal stagger-1">contact.tsx</p>
          <div className="section-divider mx-auto reveal stagger-1" />
          <h2 className="section-heading reveal stagger-2">Get In Touch</h2>
          <p
            className="mt-4 max-w-xl mx-auto reveal stagger-3"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              color: '#888',
              fontSize: '0.95rem',
              lineHeight: 1.7,
            }}
          >
            I'm currently open to full-time opportunities and exciting internships. Whether you have
            a project in mind or just want to say hi — my inbox is always open!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="reveal stagger-3">
            <h3
              className="text-lg font-semibold mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e6e6e6' }}
            >
              Contact Info
            </h3>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,224,202,0.1)', color: '#00e0ca' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        color: '#888',
                        fontSize: '0.75rem',
                        marginBottom: '2px',
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          color: '#e6e6e6',
                          fontSize: '0.9rem',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#00e0ca')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#e6e6e6')}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          color: '#e6e6e6',
                          fontSize: '0.9rem',
                        }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="reveal stagger-4">
            <h3
              className="text-lg font-semibold mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#e6e6e6' }}
            >
              Social Profiles
            </h3>

            <div className="space-y-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,224,202,0.25)'
                    e.currentTarget.style.background = 'rgba(0,224,202,0.04)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(255,255,255,0.05)', color: social.color }}
                  >
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <div
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        color: '#e6e6e6',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                      }}
                    >
                      {social.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        color: '#888',
                        fontSize: '0.72rem',
                      }}
                    >
                      {social.value}
                    </div>
                  </div>
                  <ExternalLink size={15} style={{ color: '#888', flexShrink: 0 }} />
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="mailto:alwaysvikaschoudhary@gmail.com"
              className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl btn-primary"
              style={{ textDecoration: 'none', display: 'flex' }}
            >
              <Mail size={16} />
              Send me an email
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 text-center reveal" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            color: '#888',
            fontSize: '0.78rem',
          }}
        >
          <span style={{ color: '#00e0ca' }}>{'<'}</span>
          {'  Built by Vikas Choudhary  '}
          <span style={{ color: '#00e0ca' }}>{'/'}</span>
          <span style={{ color: '#be5eed' }}>{'>'}</span>
        </p>
        <p
          className="mt-2"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            color: '#555',
            fontSize: '0.75rem',
          }}
        >
          React · TypeScript · Tailwind CSS · Vite
        </p>
      </div>
    </section>
  )
}
