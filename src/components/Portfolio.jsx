const projects = [
  {
    title: 'Robloxin Aja',
    subtitle: '',
    description: '',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/akhtarakifa/Robloxin-Aja',
    image: null,
  },

  {
    title: 'KASENTRA POS',
    subtitle: 'Point of Sale System',
    description:
      'A modern Point of Sale system designed for retail stores, cafes, and restaurants. Built with the MERN Stack (MongoDB, Express, React, Node.js) and Cloudinary for image management — featuring real-time inventory, sales analytics, and multi-role access control.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Cloudinary'],
    link: 'https://github.com/adiyogabaskoro/KASENTRA',
    image: null,
  },
]

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div data-aos="fade-up">
          <p className="text-[#ebdcc4] text-sm font-medium uppercase tracking-widest mb-2">
            My Work
          </p>
          <h2 className="section-title">Portfolio</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="card rounded-xl overflow-hidden group flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Project image */}
              <div className="relative h-48 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-[#2a2218] border border-[#ebdcc4]/20 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-[#ebdcc4]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                        </svg>
                      </div>
                      <span className="text-[#a09080] text-xs">Project Preview</span>
                    </div>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#ebdcc4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-3">
                  <span className="text-[#ebdcc4] text-xs uppercase tracking-widest">{project.subtitle}</span>
                  <h3 className="text-[#f5f0e8] font-heading font-bold text-xl mt-1" style={{ letterSpacing: '-0.03em' }}>
                    {project.title}
                  </h3>
                </div>

                <p className="text-[#a09080] text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-[#0a0a0a] border border-[#2a2218] text-[#a09080] text-xs px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center gap-2 text-sm py-2.5"
                >
                  <GitHubIcon />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}

          {/* "More coming soon" placeholder card */}
          <div
            className="card rounded-xl border-dashed flex items-center justify-center h-80 group cursor-default"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-center text-[#a09080] group-hover:text-[#ebdcc4] transition-colors duration-300">
              <div className="w-12 h-12 rounded-full border border-[#2a2218] group-hover:border-[#ebdcc4]/40 flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                <span className="text-2xl leading-none">+</span>
              </div>
              <p className="text-sm">More coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
