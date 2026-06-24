import Image from 'next/image';

const projectsList = [
  {
    title: 'Scoova',
    category: 'Frontend | Web App',
    description: 'A cutting-edge web application built with React and Tailwind CSS, focusing on seamless user experience and performance optimization.',
    link: '#',
    image: '/images/scoova-project.png',
  },
  {
    title: 'Street10',
    category: 'Frontend | E-commerce',
    description: 'A modern e-commerce frontend interface delivering lightning-fast page loads and an intuitive shopping journey.',
    link: '#',
    image: '/images/stree10-project.png',
  },
  {
    title: 'Tabeer',
    category: 'Frontend | Platform',
    description: 'An interactive platform built with Next.js, featuring dynamic content rendering and robust state management.',
    link: '#',
    image: '/images/tabeer-project.png',
  },
  {
    title: 'Potolo',
    category: 'Frontend | Dashboard',
    description: 'A complex data visualization dashboard with real-time updates and an accessible, responsive layout.',
    link: '#',
    image: '/images/potolo-project.png',
  },
  {
    title: 'Barwaaqo Agri Group',
    category: 'Frontend | Corporate Site',
    description: 'A premium corporate website highlighting agricultural services with smooth animations and dynamic routing.',
    link: '#',
    image: '/images/barwaqo-project.png',
  }
];

export function FrontendProjects() {
  return (
    <section id="frontend-projects" className="py-16 md:py-24 relative overflow-hidden bg-[var(--color-card)]/50" data-aos="fade-up">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/leaves2.png" alt="Watercolor Background" fill className="object-cover opacity-20" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] font-medium text-sm mb-6 mx-auto">
            <span>💻</span> Code in Action
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-[var(--color-primary)]">Featured Frontend Projects</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto rounded-full opacity-50"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div key={index} className="bg-[var(--color-card)] rounded-2xl overflow-hidden shadow-sm border border-[var(--color-primary)]/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              {/* Project Image */}
              <div className="relative h-60 w-full border-b border-[var(--color-primary)]/10 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={project.link} className="bg-white text-[var(--color-primary)] px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Live Demo
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.category.split(' | ').map((cat, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full">
                      {cat}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold font-serif mb-3 text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">{project.title}</h3>
                <p className="text-[var(--color-text-light)] mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
