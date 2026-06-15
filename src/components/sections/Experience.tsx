import Image from 'next/image';

const experienceList = [
  {
    role: 'Frontend Web Designer & Developer',
    company: 'Upwork',
    period: '2022 - Present',
    description: 'Working with global clients to deliver pixel-perfect, responsive, and accessible web interfaces.',
  },
  {
    role: 'Frontend Developer',
    company: 'Local Agency',
    period: '2021 - 2022',
    description: 'Built and maintained multiple client websites using React and Next.js, improving load times by 40%.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Freelance',
    period: '2020 - 2021',
    description: 'Designed intuitive user interfaces and experiences for mobile and web applications.',
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-12 text-[var(--color-primary)]">Experience</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-primary)]/20 before:to-transparent">
              {experienceList.map((exp, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-[3px] border-[var(--color-background)] bg-[var(--color-primary)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute left-0 md:left-1/2 -translate-x-2 md:-translate-x-0"></div>
                  
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] bg-[var(--color-card)] p-6 rounded-xl border border-[var(--color-primary)]/10 shadow-sm ml-8 md:ml-0 transition-transform duration-300 hover:-translate-y-1">
                    <span className="font-mono text-xs text-[var(--color-primary)] font-semibold uppercase tracking-wider block mb-2">{exp.period}</span>
                    <h3 className="font-serif font-bold text-xl text-[var(--color-primary)] mb-1">{exp.role}</h3>
                    <h4 className="text-sm font-medium text-[var(--color-secondary)] mb-3">{exp.company}</h4>
                    <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex justify-center">
            {/* Experience Image */}
            <div className="relative w-full max-w-md aspect-[3/4] bg-[var(--color-card)] rounded-2xl shadow-xl overflow-hidden border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/images/experience-img.jfif" 
                alt="Experience Illustration" 
                fill 
                className="object-cover" 
              />
            </div>
            
            <div className="absolute top-4 left-4 text-4xl opacity-50 z-20">📌</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
