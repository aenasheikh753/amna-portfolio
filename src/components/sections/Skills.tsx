import Image from 'next/image';

const skillsList = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind CSS', icon: '🌊' },
  { name: 'Git', icon: '🐙' },
  { name: 'Figma', icon: '🖋️' },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/skills-bg.png" alt="Skills Background" fill className="object-cover opacity-60" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-[var(--color-primary)]">Skills</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto rounded-full opacity-50"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsList.map((skill, index) => (
            <div 
              key={index}
              className="bg-[var(--color-card)] p-6 rounded-2xl shadow-sm border border-[var(--color-primary)]/5 hover:border-[var(--color-primary)]/20 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="font-medium text-[var(--color-text)]">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background illustration placeholder */}
      <div className="absolute left-0 bottom-0 z-10 hidden md:block">
        <Image 
          src="/images/skills-img.png" 
          alt="Skills Illustration" 
          width={300} 
          height={300} 
          className="object-contain" 
        />
      </div>
    </section>
  );
}
