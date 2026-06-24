import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" data-aos="fade-up">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-texture opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1 flex justify-center">
            {/* About Image */}
            <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl shadow-xl overflow-hidden border-4 border-[var(--color-background)]">
              <Image 
                src="/images/about-img.jfif" 
                alt="Amna Sheikh" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            {/* Decorative leaf */}
            <div className="absolute -top-12 -left-12 w-24 h-24 z-10 animate-[bounce_5s_ease-in-out_infinite]">
              <Image 
                src="/images/about-leaf.png" 
                alt="Leaf decoration" 
                fill 
                className="object-contain" 
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--color-primary)] rounded-full -z-10 opacity-10 blur-xl"></div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] font-medium text-sm mb-6">
              <span>✨</span> About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[var(--color-primary)]">
              Bridging the gap between <span className="text-[var(--color-secondary)]">design</span> and <span className="text-[var(--color-secondary)]">engineering</span>
            </h2>
            
            <div className="space-y-4 text-lg text-[var(--color-text-light)] leading-relaxed">
              <p>
                I am a multidisciplinary professional with <strong>3.5+ years of combined experience</strong> in Frontend Development, UI/UX Design, and WordPress Elementor. My journey started with a deep passion for user-centered design and evolved into crafting robust, production-ready web applications.
              </p>
              <p>
                With a strong <strong>UI/UX Design background</strong>, I don't just write code—I ensure every pixel aligns with human psychology and modern aesthetic standards. I specialize in the complete <strong>Design-to-Code workflow</strong>, seamlessly translating intricate Figma prototypes into scalable, high-performance web experiences using React, Next.js, and Tailwind CSS.
              </p>
              <p>
                Additionally, my hands-on experience with <strong>WordPress Elementor</strong> allows me to deliver flexible, rapid, and highly customizable CMS solutions for businesses of all sizes. Whether it's a completely custom web app or a beautifully themed WordPress site, I am dedicated to delivering excellence from <strong>Figma to Production</strong>.
              </p>
            </div>
            
            <div className="mt-8 flex gap-4">
              <div className="bg-[var(--color-card)] p-4 rounded-xl border border-[var(--color-primary)]/10 shadow-sm flex-1 text-center">
                <span className="block text-2xl mb-1">🎨</span>
                <span className="font-semibold text-[var(--color-primary)] block">UI/UX</span>
                <span className="text-xs text-[var(--color-text-light)]">1 Year Exp</span>
              </div>
              <div className="bg-[var(--color-card)] p-4 rounded-xl border border-[var(--color-primary)]/10 shadow-sm flex-1 text-center">
                <span className="block text-2xl mb-1">💻</span>
                <span className="font-semibold text-[var(--color-primary)] block">Frontend</span>
                <span className="text-xs text-[var(--color-text-light)]">2 Years Exp</span>
              </div>
              <div className="bg-[var(--color-card)] p-4 rounded-xl border border-[var(--color-primary)]/10 shadow-sm flex-1 text-center">
                <span className="block text-2xl mb-1">⚙️</span>
                <span className="font-semibold text-[var(--color-primary)] block">WordPress</span>
                <span className="text-xs text-[var(--color-text-light)]">6 Months Exp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
