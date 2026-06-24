import Image from 'next/image';

const projectsList = [
  {
    title: 'Hanus EMS',
    category: 'Website | Web App',
    description: 'A comprehensive Event Management System built to streamline the planning and execution of large-scale events.',
    link: '#',
    image: '/images/featured-work-bg.jfif',
  },
  {
    title: 'Lumira Shop',
    category: 'eCommerce | Web App',
    description: 'A modern, fast, and scalable online store focusing on an exceptional user experience and high performance.',
    link: '#',
    image: '/images/bdf7de70-3f70-48a5-8904-322b1aff5d49.jfif',
  },
  {
    title: 'Agritour',
    category: 'Website | Web App',
    description: 'A platform designed to connect tourists with agricultural experiences, promoting eco-tourism and local farms.',
    link: '#',
    image: '/images/featured-work-bg.jfif',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden" data-aos="fade-up">
      {/* Watercolor Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/leaves2.png" alt="Watercolor Background" fill className="object-cover opacity-30" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-[var(--color-primary)]">Projects</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto rounded-full opacity-50"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div key={index} className="bg-[var(--color-card)] rounded-2xl overflow-hidden shadow-sm border border-[var(--color-primary)]/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-60 w-full border-b border-[var(--color-primary)]/10">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.category.split(' | ').map((cat, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full">
                      {cat}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold font-serif mb-3 text-[var(--color-primary)]">{project.title}</h3>
                <p className="text-[var(--color-text-light)] mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <a href={project.link} className="inline-flex items-center text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
