const placeholderCerts = [
  { id: 1, label: 'Certificate — Coming Soon', delay: 0 },
  { id: 2, label: 'Certificate — Coming Soon', delay: 80 },
  { id: 3, label: 'Certificate — Coming Soon', delay: 160 },
  { id: 4, label: 'Certificate — Coming Soon', delay: 240 },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 bg-[#141414]/30 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div data-aos="fade-up">
          <p className="text-[#ebdcc4] text-sm font-medium uppercase tracking-widest mb-2">
            Achievements
          </p>
          <h2 className="section-title">Certificates</h2>
          <div className="section-divider" />
          <p className="text-[#a09080] text-sm mb-10 max-w-md">
            Certificates and credentials will be added here. Replace placeholder images with your actual certificate files.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {placeholderCerts.map(cert => (
            <div
              key={cert.id}
              className="card rounded-xl overflow-hidden group cursor-default"
              data-aos="fade-up"
              data-aos-delay={cert.delay}
            >
              {/* Certificate image placeholder */}
              <div className="relative h-44 bg-gradient-to-br from-[#1e1a14] to-[#0a0a0a] flex items-center justify-center border-b border-[#2a2218]">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#2a2218] border border-[#ebdcc4]/10 flex items-center justify-center mx-auto mb-2 group-hover:border-[#ebdcc4]/30 transition-colors duration-300">
                    <svg className="w-7 h-7 text-[#ebdcc4]/30 group-hover:text-[#ebdcc4]/60 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  {/* Replace hint */}
                  <span className="text-[#2a2218] text-xs group-hover:text-[#a09080] transition-colors duration-300">
                    Replace with image
                  </span>
                </div>
                {/* Top ribbon */}
                <div className="absolute top-3 left-3 w-6 h-6 rounded-full border border-[#2a2218] flex items-center justify-center">
                  <span className="text-[#a09080] text-xs">{cert.id}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4">
                <p className="text-[#a09080] text-sm text-center">{cert.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#a09080] text-xs mt-8 opacity-60">
          To add a certificate, replace the placeholder with an {'<img>'} tag pointing to your certificate image.
        </p>
      </div>
    </section>
  )
}
