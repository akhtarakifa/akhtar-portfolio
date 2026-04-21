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
  const navRef = useRef(null)
  const linkRefs = useRef({})

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
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

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

  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#2a2218]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={e => handleClick(e, '#home')}
          className="font-heading font-bold text-xl text-[#f5f0e8] tracking-tight hover:text-[#ebdcc4] transition-colors duration-300"
          style={{ letterSpacing: '-0.03em' }}
        >
          akhtarakifa<span className="text-[#ebdcc4]"></span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 relative" ref={navRef}>
          {navLinks.map(link => {
            const id = link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.href}
                ref={el => (linkRefs.current[id] = el)}
                onClick={e => handleClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
                  activeSection === id
                    ? 'text-[#ebdcc4]'
                    : 'text-[#a09080] hover:text-[#f5f0e8]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
          {/* Sliding underline */}
          <span
            className="absolute bottom-0 h-0.5 bg-[#ebdcc4] rounded-full transition-all duration-300 ease-out"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />
        </div>

        {/* Mobile menu button */}
        <MobileMenu navLinks={navLinks} activeSection={activeSection} handleClick={handleClick} />
      </div>
    </nav>
  )
}

function MobileMenu({ navLinks, activeSection, handleClick }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[#a09080] hover:text-[#ebdcc4] transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-5 flex flex-col gap-1.5">
          <span className={`block h-px bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#2a2218] py-4 px-6 flex flex-col gap-2">
          {navLinks.map(link => {
            const id = link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={e => { handleClick(e, link.href); setOpen(false) }}
                className={`py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === id ? 'text-[#ebdcc4]' : 'text-[#a09080]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
