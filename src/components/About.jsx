const softSkills = ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability']
const hardSkills = ['Programming', 'Graphic Design']

const education = [
  {
    school: 'SMP Negeri 1 Gubug',
    period: '2021 – 2024',
    detail: 'Junior High School',
  },
  {
    school: 'SMK Negeri 7 Semarang',
    period: '2024 – 2028',
    detail: 'Jurusan: Sistem Informasi, Jaringan, dan Aplikasi',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div data-aos="fade-up">
          <p className="text-[#ebdcc4] text-sm font-medium uppercase tracking-widest mb-2">
            Get to Know Me
          </p>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left: Personal Info */}
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-[#a09080] leading-relaxed mb-8">
              I'm <span className="text-[#f5f0e8] font-medium">Akhtar Akifa Sakhi</span>, the second
              child of four siblings, proudly from{' '}
              <span className="text-[#ebdcc4]">Grobogan, Central Java</span>. I'm currently studying
              Information Systems, Networks, and Applications at SMK Negeri 7 Semarang, with a deep
              passion for programming and building digital experiences.
            </p>

            {/* Personal details grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Hobbies', value: 'Reading Comics' },
                { label: 'Interests', value: 'Programming' },
                { label: 'Location', value: 'Grobogan, Central Java' },
                { label: 'Goal', value: 'Software Engineer' },
              ].map(item => (
                <div key={item.label} className="bg-[#141414] border border-[#2a2218] rounded-lg p-4">
                  <p className="text-[#a09080] text-xs uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-[#f5f0e8] text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Download CV */}
              <a
                href="#"
                className="btn-outline flex items-center justify-center gap-2 text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV</span>
              </a>

              {/* River of Life */}
              <a
                href="https://drive.google.com/file/d/1jrQb4ELVio-7kZbSIFq5c74MrSMXmdhb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2 text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>River of Life</span>
              </a>
            </div>
          </div>

          {/* Right: Education & Skills */}
          <div className="flex flex-col gap-8">

            {/* Education */}
            <div data-aos="fade-up" data-aos-delay="150">
              <h3 className="text-[#f5f0e8] font-heading font-semibold text-lg mb-4" style={{ letterSpacing: '-0.03em' }}>
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((edu, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-[#ebdcc4] mt-1 flex-shrink-0" />
                      {i < education.length - 1 && (
                        <div className="w-px flex-1 bg-[#2a2218] mt-2" />
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="text-[#f5f0e8] font-medium text-sm">{edu.school}</p>
                      <p className="text-[#ebdcc4] text-xs mb-1">{edu.period}</p>
                      <p className="text-[#a09080] text-xs">{edu.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-[#f5f0e8] font-heading font-semibold text-lg mb-4" style={{ letterSpacing: '-0.03em' }}>
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {softSkills.map(skill => (
                  <span
                    key={skill}
                    className="border border-[#2a2218] text-[#a09080] text-xs px-3 py-1.5 rounded-full hover:border-[#ebdcc4] hover:text-[#ebdcc4] transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="text-[#f5f0e8] font-heading font-semibold text-lg mb-4" style={{ letterSpacing: '-0.03em' }}>
                Hard Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map(skill => (
                  <span
                    key={skill}
                    className="bg-[#ebdcc4]/10 border border-[#ebdcc4]/30 text-[#ebdcc4] text-xs px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
