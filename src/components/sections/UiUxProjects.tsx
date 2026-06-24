import Image from 'next/image';

const designProjects = [
  {
    title: 'FinFlow',
    category: 'Mobile Banking App',
    problem: 'Users found traditional banking apps cluttered and difficult to navigate for simple transactions.',
    solution: 'Designed a minimalist, highly intuitive mobile banking interface focusing on core tasks, reducing transaction time by 40%.',
    tools: ['Figma', 'Prototyping', 'User Research'],
    image: '/images/bdf7de70-3f70-48a5-8904-322b1aff5d49.jfif',
  },
  {
    title: 'MediCare Connect',
    category: 'Healthcare Platform',
    problem: 'Patients struggled to book appointments and view medical records efficiently.',
    solution: 'Created a centralized dashboard with clear user flows for appointment scheduling and secure record access.',
    tools: ['Figma', 'Wireframing', 'Design System'],
    image: '/images/featured-work-bg.jfif',
  },
  {
    title: 'LearnSphere',
    category: 'Learning Management System',
    problem: 'Low student engagement due to an outdated and unintuitive course discovery interface.',
    solution: 'Redesigned the platform with a modern, gamified UI that increased course enrollment and completion rates.',
    tools: ['Figma', 'User Testing', 'Interaction Design'],
    image: '/images/bdf7de70-3f70-48a5-8904-322b1aff5d49.jfif',
  }
];

export function UiUxProjects() {
  return (
    <section id="uiux-projects" className="py-16 md:py-24 relative overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] font-medium text-sm mb-6 mx-auto">
            <span>🎨</span> Case Studies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-[var(--color-primary)]">UI/UX Design Projects</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto rounded-full opacity-50"></div>
        </div>
        
        <div className="space-y-16">
          {designProjects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center bg-[var(--color-card)] rounded-3xl overflow-hidden border border-[var(--color-primary)]/10 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className={`relative h-full min-h-[300px] w-full ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              <div className={`p-10 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <span className="text-sm font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-3xl font-bold font-serif mb-6 text-[var(--color-primary)]">{project.title}</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-[var(--color-primary)] flex items-center gap-2"><span className="text-[var(--color-accent)]">●</span> The Problem</h4>
                    <p className="text-[var(--color-text-light)] text-sm mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-primary)] flex items-center gap-2"><span className="text-[var(--color-secondary)]">●</span> The Solution</h4>
                    <p className="text-[var(--color-text-light)] text-sm mt-1">{project.solution}</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-[var(--color-primary)]/10">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-white border border-[var(--color-primary)]/10 text-[var(--color-text-light)] rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
