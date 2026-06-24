'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <nav className={`bg-[var(--color-primary)] backdrop-blur-md border border-white/10 rounded-full flex items-center justify-between px-8 py-3 transition-shadow duration-300 ${scrolled ? 'shadow-xl shadow-[var(--color-primary)]/10' : 'shadow-lg'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-serif font-bold text-xl tracking-tight">
            Amna Sheikh <span className="text-[var(--color-accent)] text-2xl">✨</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            <Link href="#home" className="hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#experience" className="hover:text-white transition-colors">Experience</Link>
            <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="#frontend-projects" className="hover:text-white transition-colors">Work</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="#contact" className="ml-4 hidden md:inline-flex bg-[var(--color-accent)] hover:bg-white text-[var(--color-primary)] font-bold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md">Hire Me</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-[calc(100%-1rem)] left-6 right-6 bg-[var(--color-primary)] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 fade-in duration-200">
            <div className="flex flex-col p-6 space-y-4 text-center text-white/90">
              <Link href="#home" className="hover:text-white font-medium transition-colors" onClick={toggleMenu}>Home</Link>
              <Link href="#about" className="hover:text-white font-medium transition-colors" onClick={toggleMenu}>About</Link>
              <Link href="#experience" className="hover:text-white font-medium transition-colors" onClick={toggleMenu}>Experience</Link>
              <Link href="#skills" className="hover:text-white font-medium transition-colors" onClick={toggleMenu}>Skills</Link>
              <Link href="#frontend-projects" className="hover:text-white font-medium transition-colors" onClick={toggleMenu}>Work</Link>
              <Link href="#contact" className="hover:text-white font-medium transition-colors" onClick={toggleMenu}>Contact</Link>
              <Link href="#contact" className="bg-[var(--color-accent)] hover:bg-white text-[var(--color-primary)] font-bold py-3 px-6 rounded-full transition-colors mt-4 block mx-auto w-full max-w-[200px]" onClick={toggleMenu}>Hire Me</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}