export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#2a2218] py-10 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <a
          href="#home"
          onClick={e => { e.preventDefault(); scrollTo('home') }}
          className="font-heading font-bold text-xl text-[#f5f0e8] hover:text-[#ebdcc4] transition-colors duration-300"
          style={{ letterSpacing: '-0.03em' }}
        >
          Akhtar<span className="text-[#ebdcc4]">.</span>
        </a>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {['home', 'about', 'skills', 'portfolio', 'certificates', 'contact'].map(id => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-[#a09080] text-sm capitalize hover:text-[#ebdcc4] transition-colors duration-200"
            >
              {id}
            </button>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-[#a09080] text-xs text-center">
          © {year} Akhtar Akifa Sakhi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
