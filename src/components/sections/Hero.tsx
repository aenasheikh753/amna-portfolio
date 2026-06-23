import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-6">
              Hi, I'm Amna. <br />
              <span className="text-[var(--color-primary)] opacity-90">
                Frontend Developer & UI Designer
              </span>
            </h1>

            <p className="text-lg text-[var(--color-text-light)] mb-8 max-w-md">
              Crafting pixel-perfect digital experiences with Next.js, React,
              and Tailwind CSS — where design intuition meets clean, scalable
              code. I build modern, responsive, and high-performance web
              applications that deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <Button>Hire Me Now !</Button>
              <Button variant="outline">CV / Resume</Button>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-[var(--color-primary)]/20 pt-8">
              <div>
                <h3 className="text-3xl font-bold font-serif text-[var(--color-primary)] mb-1">
                  3.5+
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  Years of Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold font-serif text-[var(--color-primary)] mb-1">
                  15+
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  Projects Shipped
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold font-serif text-[var(--color-primary)] mb-1">
                  8+
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
          

          <div className="relative">
            {/* Hero Image */}
            <div className="relative z-10 flex justify-end">
              <Image
                src="/images/hero-right.png"
                alt="Hero Illustration"
                width={600}
                height={600}
                className="w-full max-w-lg object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
