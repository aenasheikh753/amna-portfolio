import Image from 'next/image';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '💻',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Redux'],
  },
  {
    title: 'Design',
    icon: '🎨',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'User Flows'],
  },
  {
    title: 'WordPress',
    icon: '⚙️',
    skills: ['WordPress', 'Elementor', 'Theme Customization'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Vercel', 'Netlify'],
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden" data-aos="zoom-in">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/skills-bg.png" alt="Skills Background" fill className="object-cover opacity-60" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] font-medium text-sm mb-6 mx-auto">
            <span>🚀</span> Technical Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-[var(--color-primary)]">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto rounded-full opacity-50"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-[var(--color-card)]/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-[var(--color-primary)]/20 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold font-serif text-[var(--color-primary)]">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--color-text-light)] border border-[var(--color-primary)]/10 shadow-sm hover:border-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background illustration placeholder */}
      <div className="absolute left-0 bottom-0 z-10 hidden md:block opacity-70">
        <Image 
          src="/images/skills-img.png" 
          alt="Skills Illustration" 
          width={300} 
          height={300} 
          className="object-contain hover:scale-105 transition-transform duration-700" 
        />
      </div>
    </section>
  );
}
