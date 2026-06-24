import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden min-h-screen flex items-center" data-aos="fade-in">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/hero-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-60 background-repeat-none"
          priority
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold font-serif leading-tight mb-4" data-aos="fade-down" data-aos-delay="200">
              Hi, I'm Amna Sheikh. <br />
              <span className="text-[var(--color-primary)] opacity-90 text-2xl md:text-3xl block mt-2">
                Crafting Modern Digital Experiences Through Code, Design & Creativity.
              </span>
            </h1>

            <p className="text-lg text-[var(--color-text-light)] mb-8 max-w-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              Frontend Developer specializing in Next.js, React, TypeScript and Tailwind CSS with additional experience in UI/UX Design and WordPress Development.
            </p>
            <div className="flex flex-wrap gap-4 mb-16" data-aos="fade-up" data-aos-delay="500">
              <Button>Hire Me Now</Button>
              <a href="/Amna%20Yasin%20-%20Frontend%20web%20developer(Next.js).pdf" download className="inline-block"><Button variant="outline">Resume Download</Button></a>
            </div>

            <div className="grid grid-cols-3 gap-8 border-t border-[var(--color-primary)]/20 pt-8" data-aos="fade-up" data-aos-delay="600">
              <div>
                <h3 className="text-3xl font-bold font-serif text-[var(--color-primary)] mb-1">
                  3.5+
                </h3>
                <p className="text-sm text-[var(--color-text-light)] font-medium">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold font-serif text-[var(--color-primary)] mb-1">
                  10+
                </h3>
                <p className="text-sm text-[var(--color-text-light)] font-medium">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold font-serif text-[var(--color-primary)] mb-1">
                  5+
                </h3>
                <p className="text-sm text-[var(--color-text-light)] font-medium">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-delay="300">
            {/* Hero Image */}
            <div className="relative z-10 flex justify-end">
              <Image
                src="/images/hero-right.png?v=2"
                alt="Amna Sheikh Illustration"
                width={600}
                height={600}
                className="w-full max-w-lg object-contain drop-shadow-2xl"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
                  maskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)'
                }}
                priority
                unoptimized={true}
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-[var(--color-accent)]/20 rounded-full blur-2xl z-0"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-[var(--color-secondary)]/20 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
