import { useScrollReveal } from '../hooks/useScrollReveal'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Footer from './Footer'

const contactInfo = [
  {
    label: 'EMAIL',
    value: 'ALWAYSVIKASCHOUDHARY@GMAIL.COM',
    href: 'mailto:alwaysvikaschoudhary@gmail.com',
    icon: <Mail size={20} />,
  },
  {
    label: 'TELEPHONE',
    value: '+91 9782868120',
    href: 'tel:+919782868120',
    icon: <Phone size={20} />,
  },
  {
    label: 'LOCATION',
    value: 'JAIPUR, INDIA',
    href: null,
    icon: <MapPin size={20} />,
  },
]

export default function Contact() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden text-slate-100"
    >
      <div ref={sectionRef} className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-14">
          <p className="code-label mb-3">contact.tsx</p>
          <div className="section-divider" />
          <h2 className="section-heading">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-12 items-start mt-8">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-start h-full">
            <div className="mb-12">
              <p className="text-slate-400 leading-relaxed text-[1.05rem] max-w-md">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Let's create something amazing together!
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 group"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,224,202,0.25)'
                    e.currentTarget.style.background = 'rgba(0,224,202,0.04)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                  }}
                >
                  <div
                    className="w-[3.25rem] h-[3.25rem] rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border transition-colors duration-300"
                    style={{ background: 'rgba(0,224,202,0.1)', color: '#00e0ca', borderColor: 'rgba(0,224,202,0.2)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[0.65rem] font-bold tracking-widest text-slate-500 mb-1.5 uppercase">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-black text-slate-200 text-sm md:text-base hover:text-[#00e0ca] transition-colors uppercase tracking-wide"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span 
                        className="font-black text-slate-200 text-sm md:text-base uppercase tracking-wide"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div 
              className="p-8 md:p-10 rounded-[1.5rem]"
              style={{
                background: 'rgba(23,23,28,0.8)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
              }}
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[0.65rem] font-bold tracking-widest text-slate-400 mb-3 uppercase">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="E.G. ALEXIS CARTER"
                    className="w-full bg-[#0a0b0f]/50 border border-white/5 rounded-xl px-5 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00e0ca]/50 focus:ring-1 focus:ring-[#00e0ca]/50 transition-all font-mono text-sm shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-[0.65rem] font-bold tracking-widest text-slate-400 mb-3 uppercase">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="NAME@COMPANY.COM"
                    className="w-full bg-[#0a0b0f]/50 border border-white/5 rounded-xl px-5 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00e0ca]/50 focus:ring-1 focus:ring-[#00e0ca]/50 transition-all font-mono text-sm shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-[0.65rem] font-bold tracking-widest text-slate-400 mb-3 uppercase">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="DESCRIBE YOUR DESIGN PROBLEM OR PROJECT INQUIRY..."
                    className="w-full bg-[#0a0b0f]/50 border border-white/5 rounded-xl px-5 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#00e0ca]/50 focus:ring-1 focus:ring-[#00e0ca]/50 transition-all font-mono text-sm resize-none shadow-inner"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-[#0a0b0f] font-bold tracking-widest uppercase transition-all hover:opacity-90 hover:-translate-y-1 shadow-lg mt-2 text-sm"
                  style={{ backgroundColor: '#00e0ca', boxShadow: '0 0 20px rgba(0, 224, 202, 0.3)' }}
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </section>
  )
}
