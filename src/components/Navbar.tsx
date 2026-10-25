import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Swords } from 'lucide-react';

interface NavbarProps {
  onEnterRealm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnterRealm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'HOME', id: 'top' },
    { name: 'THE STORY', id: 'story' },
    { name: 'THE WORLD', id: 'world' },
    { name: 'FEATURES', id: 'features' },
    { name: 'COMMUNITY', id: 'community' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#080706]/90 backdrop-blur-md border-b border-[#D7AD62]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-gradient-to-b from-[#080706]/80 via-[#080706]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Emblem */}
          <button
            onClick={() => scrollToSection('top')}
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7AD62]"
            aria-label="Dreadknight home"
          >
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded border border-[#D7AD62]/40 bg-[#171311] shadow-[0_0_12px_rgba(215,173,98,0.25)] transition-transform duration-300 group-hover:scale-105">
              <img
                src="/favicon.png"
                alt="Dreadknight Emblem"
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Fallback to SVG icon
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Shield className="h-4 w-4 text-[#D7AD62]/80 group-hover:text-[#D7AD62]" />
              </div>
            </div>
            <div>
              <span className="block font-cinzel text-sm sm:text-base font-extrabold tracking-[0.22em] text-gold-gradient">
                DREADKNIGHT
              </span>
              <span className="hidden sm:block text-[8px] uppercase tracking-[0.25em] text-[#C9A35E]/70 font-cinzel">
                The Ashen Oath
              </span>
            </div>
          </button>

          {/* Center Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="relative text-xs lg:text-sm font-cinzel tracking-[0.2em] text-[#F3E7D0]/80 transition-colors duration-200 hover:text-[#D7AD62] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D7AD62] py-1"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#D7AD62] to-[#E65B20] transition-all duration-300 hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Action: Primary CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onEnterRealm}
              className="relative group overflow-hidden rounded border border-[#D7AD62]/70 bg-gradient-to-r from-[#171311] via-[#294B31]/40 to-[#171311] px-5 py-2 text-xs font-cinzel font-bold tracking-[0.2em] text-[#F3E7D0] transition-all duration-300 hover:border-[#D7AD62] hover:shadow-[0_0_20px_rgba(215,173,98,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7AD62]"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-[#D7AD62]">
                <Swords className="h-3.5 w-3.5 text-[#D7AD62] transition-transform duration-300 group-hover:rotate-45" />
                ENTER THE REALM
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#D7AD62]/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-[#D7AD62] border border-[#D7AD62]/30 rounded bg-[#171311] hover:border-[#D7AD62] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7AD62]"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080706]/98 border-b border-[#D7AD62]/20 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2.5 px-3 text-sm font-cinzel tracking-[0.2em] text-[#F3E7D0] hover:text-[#D7AD62] hover:bg-[#171311]/60 rounded border-l-2 border-transparent hover:border-[#D7AD62]"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#D7AD62]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onEnterRealm();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded border border-[#D7AD62] bg-[#171311] text-xs font-cinzel font-bold tracking-[0.2em] text-[#D7AD62] shadow-[0_0_15px_rgba(215,173,98,0.2)]"
            >
              <Swords className="h-4 w-4" />
              ENTER THE REALM
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
