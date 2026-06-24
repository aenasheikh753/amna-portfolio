import Image from 'next/image';

const wordpressProjects = [
  {
    title: 'Bloom Beauty Studio',
    category: 'Salon & Spa',
    description: 'A visually stunning, fully responsive WordPress website built with Elementor to showcase beauty services, integrate an online booking system, and enhance local SEO.',
    results: 'Increased online bookings by 35% in the first month.',
    image: '/images/featured-work-bg.jfif',
  },
  {
    title: 'Prime Realty',
    category: 'Real Estate Agency',
    description: 'A dynamic real estate platform allowing users to search, filter, and view property listings with high-quality galleries and lead generation forms.',
    results: 'Streamlined property inquiries and improved lead capture rate.',
    image: '/images/bdf7de70-3f70-48a5-8904-322b1aff5d49.jfif',
  },
  {
    title: 'FreshBite Restaurant',
    category: 'Food & Beverage',
    description: 'An appetizing restaurant website featuring a custom Elementor menu layout, online reservation capabilities, and vibrant food photography.',
    results: 'Enhanced brand presence and simplified the reservation process.',
    image: '/images/featured-work-bg.jfif',
  }
];

export function WordpressProjects() {
  return (
    <section id="wordpress-projects" className="py-24 relative overflow-hidden bg-[var(--color-primary)] text-white" data-aos="fade-up">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[var(--color-accent)] font-medium text-sm mb-6 mx-auto backdrop-blur-sm border border-white/5">
            <span>⚙️</span> Elementor Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-white">WordPress Projects</h2>
          <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto rounded-full opacity-70"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {wordpressProjects.map((project, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--color-accent)]/50 transition-colors duration-300 group">
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                />
              </div>
              
              <div className="p-8">
                <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold font-serif mb-4 text-white">{project.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                  <span className="text-xs text-white/50 block mb-1 uppercase tracking-wider font-semibold">Business Result</span>
                  <p className="text-sm font-medium text-[var(--color-secondary)]">{project.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
