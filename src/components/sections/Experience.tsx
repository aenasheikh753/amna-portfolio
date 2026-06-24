import Image from 'next/image';

const experienceList = [
  {
    role: 'Frontend Developer',
    company: 'Multiple Clients / Open to Opportunities',
    period: '2024 - Present',
    description: 'Developing high-performance, responsive web applications using Next.js, React, and Tailwind CSS. Implementing modern design systems and optimizing web experiences.',
  },
  {
    role: 'WordPress Developer Intern',
    company: 'Agency',
    period: '2023 - 2024',
    description: 'Customized WordPress themes using Elementor, optimized websites for SEO and performance, and built responsive landing pages for various businesses.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Freelance',
    period: '2022 - 2023',
    description: 'Designed user-centric interfaces, wireframes, and interactive prototypes using Figma for mobile applications and SaaS platforms.',
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] font-medium text-sm mb-6">
              <span>⏳</span> My Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-12 text-[var(--color-primary)]">Experience</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-primary)]/20 before:to-transparent">
              {experienceList.map((exp, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-[3px] border-[var(--color-background)] bg-[var(--color-primary)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute left-0 md:left-1/2 -translate-x-2 md:-translate-x-0 transition-transform duration-300 group-hover:scale-125 group-hover:bg-[var(--color-secondary)]"></div>
                  
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] bg-[var(--color-card)] p-6 rounded-xl border border-[var(--color-primary)]/10 shadow-sm ml-8 md:ml-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--color-primary)]/30">
                    <span className="font-mono text-xs text-[var(--color-secondary)] font-semibold uppercase tracking-wider block mb-2 bg-[var(--color-secondary)]/10 w-fit px-3 py-1 rounded-full">{exp.period}</span>
                    <h3 className="font-serif font-bold text-xl text-[var(--color-primary)] mb-1">{exp.role}</h3>
                    <h4 className="text-sm font-medium text-[var(--color-primary)]/70 mb-3">{exp.company}</h4>
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
                alt="Experience Timeline" 
                fill 
                className="object-cover hover:scale-110 transition-transform duration-700" 
              />
            </div>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--color-accent)]/20 rounded-full blur-xl z-0"></div>
            <div className="absolute top-4 left-4 text-4xl opacity-50 z-20 animate-pulse">📌</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
