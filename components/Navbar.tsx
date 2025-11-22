import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 ${isScrolled ? 'glass-nav rounded-2xl px-6 py-3 border border-white/5 shadow-2xl shadow-black/50' : 'py-6 bg-transparent'}`}>
      <div className="flex justify-between items-center relative">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group cursor-pointer perspective-1000">
          <div className="relative transform transition-transform duration-500 group-hover:rotate-y-180 transform-style-3d">
             <Hexagon className="w-8 h-8 text-primary-500 fill-primary-500/10" strokeWidth={1.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Prince<span className="text-primary-500">.</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative text-sm font-medium text-slate-400 hover:text-white transition-colors group"
            >
              {link.name}
              <span className="absolute inset-x-0 -bottom-1 h-[1px] bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 shadow-[0_0_10px_#0ea5e9]"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="relative px-6 py-2 text-sm font-bold text-white bg-primary-600 rounded-full overflow-hidden group transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Hire Me</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 mt-4 w-full glass-nav border border-white/5 rounded-2xl overflow-hidden animate-fade-in-up">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-primary-400 hover:pl-2 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};