import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <nav className="bg-[#1a2f2a] backdrop-blur-md border border-white/10 rounded-full flex items-center justify-between px-8 py-3 shadow-xl">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-white font-medium text-xl tracking-tight"
          >
            Amna Yasin 
            <span className="text-pink-400 text-2xl">🌸</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-sm font-medium text-white/90">
            <Link href="#home" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Icon */}
          <button className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.058 11H1M12 3v2m0 16v2m9-9H15m-6 0H4" 
              />
            </svg>
          </button>

        </nav>
      </div>
    </header>
  );
}