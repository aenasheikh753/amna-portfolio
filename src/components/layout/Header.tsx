'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <nav className="bg-[#1a2f2a] backdrop-blur-md border border-white/10 rounded-full flex items-center justify-between px-8 py-3 shadow-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-medium text-xl tracking-tight">
            Amna Yasin <span className="text-pink-400 text-2xl">🌸</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            <Link href="#home" className="hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="#contact" className="ml-4 hidden md:inline-block bg-[var(--color-accent)] hover:bg-[var(--color-primary)] text-white font-medium py-2 px-4 rounded transition-colors">Hire Me</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
          <div className="md:hidden absolute top-full left-0 w-full bg-[#1a2f2a] border-t border-white/10 rounded-b-full shadow-lg">
            <div className="flex flex-col p-4 space-y-4 text-center text-white/90">
              <Link href="#home" className="hover:text-white transition-colors" onClick={toggleMenu}>Home</Link>
              <Link href="#about" className="hover:text-white transition-colors" onClick={toggleMenu}>About</Link>
              <Link href="#skills" className="hover:text-white transition-colors" onClick={toggleMenu}>Skills</Link>
              <Link href="#projects" className="hover:text-white transition-colors" onClick={toggleMenu}>Projects</Link>
              <Link href="#contact" className="hover:text-white transition-colors" onClick={toggleMenu}>Contact</Link>
                          <Link href="#contact" className="bg-[var(--color-accent)] hover:bg-[var(--color-primary)] text-white font-medium py-2 px-4 rounded transition-colors mt-4 block mx-auto" onClick={toggleMenu}>Hire Me</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}