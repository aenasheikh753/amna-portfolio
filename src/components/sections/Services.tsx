export function Services() {
  const servicesList = [
    {
      title: 'Frontend Development',
      description: 'Building robust, scalable, and fast web applications using React, Next.js, and modern CSS frameworks like Tailwind.',
      icon: '💻'
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive, user-centered interfaces and experiences in Figma, focusing on usability and modern aesthetics.',
      icon: '🎨'
    },
    {
      title: 'WordPress Development',
      description: 'Developing custom, responsive, and easy-to-manage websites using WordPress and Elementor.',
      icon: '⚙️'
    },
    {
      title: 'Landing Page Development',
      description: 'Creating high-converting landing pages optimized for performance, SEO, and lead generation.',
      icon: '🚀'
    },
    {
      title: 'Website Redesign',
      description: 'Revamping outdated websites with modern design principles and improved technological stacks.',
      icon: '✨'
    },
    {
      title: 'Responsive Web Development',
      description: 'Ensuring your website looks and functions perfectly across all devices, from mobile phones to large desktops.',
      icon: '📱'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-texture" data-aos="fade-up">
      <div className="absolute inset-0 bg-[var(--color-background)] opacity-90"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] font-medium text-sm mb-6 mx-auto">
            <span>🤝</span> What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-[var(--color-primary)]">Services</h2>
          <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto rounded-full opacity-50"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-primary)]/5 hover:border-[var(--color-primary)]/20 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-secondary)]/5 rounded-bl-full -z-0 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[var(--color-primary)]/5 rounded-xl flex items-center justify-center text-3xl mb-6 text-[var(--color-primary)] group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-serif mb-3 text-[var(--color-primary)]">{service.title}</h3>
                <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
