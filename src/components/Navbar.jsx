import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const [isScrolling, setIsScrolling] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)
  const linkRefs = useRef({})
  const scrollTimeoutRef = useRef(null)

  // Scroll blur effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver for active section
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1))
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Only update active section if not currently scrolling programmatically
          if (entry.isIntersecting && !isScrolling) {
            setActiveSection(id)
          }
        },
        { 
          rootMargin: '-20% 0px -70% 0px', 
          threshold: 0.3 
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [isScrolling])

  // Sliding indicator
  useEffect(() => {
    const el = linkRefs.current[activeSection]
    const nav = navRef.current
    if (el && nav) {
      const navRect = nav.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      setIndicatorStyle({
        left: elRect.left - navRect.left,
        width: elRect.width,
      })
    }
  }, [activeSection])

  // Update indicator when window resizes
  useEffect(() => {
    const handleResize = () => {
      const el = linkRefs.current[activeSection]
      const nav = navRef.current
      if (el && nav) {
        const navRect = nav.getBoundingClientRect()
        const elRect = el.getBoundingClientRect()
        setIndicatorStyle({
          left: elRect.left - navRect.left,
          width: elRect.width,
        })
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [activeSection])

  // Cleanup scroll timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const targetId = href.slice(1)
    setIsScrolling(true)
    setActiveSection(targetId)
    setMobileOpen(false)

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)

    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 1000)
    }
  }

  return (
    <>
      {/* Dynamic Island Container */}
      <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
        <div
          className={`
            relative overflow-hidden w-full
            transition-all duration-500 ease-out
            ${scrolled ? 'shadow-2xl shadow-[#ebdcc4]/10' : 'shadow-lg shadow-black/20'}
          `}
          style={{
            background: scrolled 
              ? 'linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)'
              : 'linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(235, 220, 196, 0.1)',
            borderRadius: '50px',
          }}
        >
          {/* Glow effect */}
          <div 
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at center, rgba(235, 220, 196, 0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div className="relative px-4 sm:px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <a
              className="font-heading font-bold text-base sm:text-lg text-[#f5f0e8]"
              style={{ letterSpacing: '-0.03em' }}
            >
              akhtarakifa
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-2 relative" ref={navRef}>
              {navLinks.map(link => {
                const id = link.href.slice(1)
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    ref={el => (linkRefs.current[id] = el)}
                    onClick={e => handleClick(e, link.href)}
                    className={`
                      relative px-4 py-2 text-sm font-medium 
                      transition-all duration-300 rounded-full
                      hover:scale-105 active:scale-95
                      ${activeSection === id
                        ? 'text-[#0a0a0a]'
                        : 'text-[#a09080] hover:text-[#f5f0e8]'
                      }
                    `}
                  >
                    {activeSection === id && (
                      <span
                        className="absolute inset-0 bg-[#ebdcc4] rounded-full -z-10"
                        style={{ animation: 'slideIn 0.3s ease-out' }}
                      />
                    )}
                    {link.label}
                  </a>
                )
              })}
            </div>

            {/* Tablet nav */}
            <div className="hidden md:flex lg:hidden items-center gap-1 relative" ref={navRef}>
              {navLinks.map(link => {
                const id = link.href.slice(1)
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    ref={el => (linkRefs.current[id] = el)}
                    onClick={e => handleClick(e, link.href)}
                    className={`
                      relative px-3 py-2 text-xs font-medium 
                      transition-all duration-300 rounded-full
                      hover:scale-105 active:scale-95
                      ${activeSection === id
                        ? 'text-[#0a0a0a]'
                        : 'text-[#a09080] hover:text-[#f5f0e8]'
                      }
                    `}
                  >
                    {activeSection === id && (
                      <span
                        className="absolute inset-0 bg-[#ebdcc4] rounded-full -z-10"
                        style={{ animation: 'slideIn 0.3s ease-out' }}
                      />
                    )}
                    {link.label}
                  </a>
                )
              })}
            </div>

            {/* Mobile hamburger button — only the button, no dropdown here */}
            <button
              onClick={() => setMobileOpen(prev => !prev)}
              className="md:hidden p-2 text-[#a09080] hover:text-[#ebdcc4] transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 rounded-full ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 rounded-full ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 rounded-full ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown — outside overflow-hidden div so it's not clipped */}
        {mobileOpen && (
          <div
            className="md:hidden mt-2 mx-auto w-full animate-slideDown"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 20, 20, 0.98) 0%, rgba(10, 10, 10, 0.99) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(235, 220, 196, 0.15)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className="p-3 flex flex-col gap-1">
              {navLinks.map(link => {
                const id = link.href.slice(1)
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={e => handleClick(e, link.href)}
                    className={`
                      px-4 py-3 text-sm font-medium rounded-xl text-center
                      transition-all duration-200 active:scale-95
                      ${activeSection === id
                        ? 'bg-[#ebdcc4] text-[#0a0a0a]'
                        : 'text-[#a09080] hover:bg-[#1a1a1a] hover:text-[#f5f0e8]'
                      }
                    `}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slideDown {
          animation: slideDown 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </>
  )
}


