import { useEffect, useRef, useState } from 'react'

const skillBars = [
  { name: 'HTML', percent: 80 },
  { name: 'CSS', percent: 75 },
  { name: 'JavaScript', percent: 35 },
  { name: 'Python', percent: 25 },
  { name: 'React', percent: 20 },
]

const toolCategories = [
  {
    category: 'Framework',
    icon: '⚛️',
    items: ['React'],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    items: ['VS Code', 'Antigravity', 'Kiro'],
  },
  {
    category: 'OS',
    icon: '💻',
    items: ['Windows'],
  },
]

function SkillBar({ name, percent, animate }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#f5f0e8] text-sm font-medium">{name}</span>
        <span className="text-[#ebdcc4] text-sm font-medium">{percent}%</span>
      </div>
      <div className="h-2 bg-[#2a2218] rounded-full overflow-hidden">
        <div
          className="skill-bar-fill"
          style={{ width: animate ? `${percent}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay so AOS animation runs first
          setTimeout(() => setAnimated(true), 300)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 px-6 bg-[#141414]/50 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div data-aos="fade-up">
          <p className="text-[#ebdcc4] text-sm font-medium uppercase tracking-widest mb-2">
            What I Can Do
          </p>
          <h2 className="section-title">Skills & Tools</h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Part A: Skill Bars */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-[#f5f0e8] font-heading font-semibold text-lg mb-6" style={{ letterSpacing: '-0.03em' }}>
              Proficiency
            </h3>
            {skillBars.map(skill => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percent={skill.percent}
                animate={animated}
              />
            ))}
          </div>

          {/* Part B: Tool Cards */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-[#f5f0e8] font-heading font-semibold text-lg mb-6" style={{ letterSpacing: '-0.03em' }}>
              Tools & Environment
            </h3>
            <div className="flex flex-col gap-5">
              {toolCategories.map((cat, ci) => (
                <div key={cat.category} className="card p-5 rounded-xl" data-aos="fade-up" data-aos-delay={300 + ci * 80}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{cat.icon}</span>
                    <span className="text-[#a09080] text-xs uppercase tracking-widest">{cat.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map(item => (
                      <span
                        key={item}
                        className="bg-[#0a0a0a] border border-[#2a2218] text-[#f5f0e8] text-sm px-4 py-1.5 rounded-lg hover:border-[#ebdcc4]/40 hover:text-[#ebdcc4] transition-colors duration-200 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
