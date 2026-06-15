import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1 flex justify-center">
            {/* About Image */}
            <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl shadow-xl overflow-hidden border-4 border-white">
              <Image 
                src="/images/about-img.jfif" 
                alt="About Amna" 
                fill 
                className="object-cover" 
              />
            </div>
            
            {/* Decorative leaf */}
            <div className="absolute -top-12 -left-12 w-24 h-24 z-10">
              <Image 
                src="/images/about-leaf.png" 
                alt="Leaf decoration" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="mb-4 text-3xl">🌿</div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[var(--color-primary)]">About</h2>
            <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-6">
              I am a passionate frontend developer dedicated to creating intuitive, dynamic, and seamless web experiences. With a strong foundation in modern web technologies like React, Next.js, and Tailwind CSS, I turn creative concepts into fully functional applications.
            </p>
            <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, learning new frameworks, or enjoying a good cup of coffee while sketching out my next big idea. Let's collaborate to build something truly remarkable!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
