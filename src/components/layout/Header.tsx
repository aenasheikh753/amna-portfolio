import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-primary)]/10">
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold text-[var(--color-primary)]">
          Amna Syed <span className="text-[var(--color-accent)]">🌸</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 bg-[var(--color-card)]/80 px-8 py-3 rounded-full border border-[var(--color-primary)]/10 shadow-sm">
          {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex px-4 py-2 text-sm border-[var(--color-primary)]/20">
            Let's Talk
          </Button>
        </div>
      </div>
    </header>
  );
}
