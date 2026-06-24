import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { FrontendProjects } from '@/components/sections/FrontendProjects';
import { UiUxProjects } from '@/components/sections/UiUxProjects';
import { WordpressProjects } from '@/components/sections/WordpressProjects';
import { Services } from '@/components/sections/Services';
import { Achievements } from '@/components/sections/Achievements';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full relative pt-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <FrontendProjects />
        <UiUxProjects />
        <WordpressProjects />
        <Services />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
