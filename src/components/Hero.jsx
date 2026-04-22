import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Hero() {
  const typedRef = useRef(null)
  const typedInstance = useRef(null)

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: ['Aspiring Software Engineer', 'Front-End Developer', 'Problem Solver'],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      smartBackspace: true,
    })
    return () => typedInstance.current.destroy()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#ebdcc4]/[0.03] blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-[#ebdcc4]/[0.02] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-[#141414] border border-[#2a2218] rounded-full px-4 py-1.5 mb-6 text-sm text-[#a09080]"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <span className="w-2 h-2 rounded-full bg-[#ebdcc4] animate-pulse" />
              Available for work
            </div>

            {/* Name */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-[#f5f0e8] mb-4 leading-tight"
              style={{ letterSpacing: '-0.03em' }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Hi, I'm{' '}
              <span className="text-[#ebdcc4] relative">
                Akhtar
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#ebdcc4] to-transparent" />
              </span>
            </h1>

            {/* Typed tagline */}
            <div
              className="text-xl md:text-2xl text-[#a09080] font-light mb-6 h-9"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span ref={typedRef} />
            </div>

            {/* Bio */}
            <p
              className="text-[#a09080] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              My full name is Akhtar Akifa Sakhi. I'm a front-end focused web developer passionate about building clean, user-friendly
              interfaces that leave a lasting impression. With a strong foundation in modern web
              technologies, I'm on a mission to grow into a well-rounded software engineer who
              bridges design and engineering seamlessly.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button
                onClick={() => scrollTo('portfolio')}
                className="btn-solid text-sm font-semibold"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-outline text-sm font-semibold"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Photo */}
          <div
            className="flex-shrink-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#ebdcc4]/20 to-transparent blur-xl" />
              {/* Photo frame */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-[#2a2218] overflow-hidden bg-[#141414] group">
                {/* Placeholder photo — replace src with your actual photo */}
                <img
                  src="public/Akhtar Akifa_Profile.jpg"
                  alt="Akhtar Akifa Sakhi"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden w-full h-full flex-col items-center justify-center text-[#a09080]">
                  <svg
                    className="w-20 h-20 opacity-30 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-xs opacity-50">Add photo.jpg to /public</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll indicator — outside the max-w container so it centers relative to the full section */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex flex-col items-center gap-2 text-[#a09080] animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
