import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8E1D7]'
          : 'bg-[#FAF8F5]/90 backdrop-blur-xs border-b border-[#EDE5DC]/60'
      }`}
    >
      {/* Top tiny info bar */}
      <div className="hidden sm:block bg-[#F4EFEA] border-b border-[#E8E1D7] text-xs text-[#5C554E] py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#B85D19]" />
            <span>57-B, Commercial Market, Satellite Town, Rawalpindi</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Open Daily: 12:00 PM – 1:00 AM</span>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="text-[#B85D19] font-semibold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex flex-col text-left focus:outline-hidden group"
          id="navbar-brand"
        >
          <span className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-[#2A2724] group-hover:text-[#B85D19] transition-colors">
            Zaify's
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#786F66] font-medium -mt-1">
            Rawalpindi
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive
                    ? 'text-[#B85D19] font-semibold bg-[#F2ECE4]'
                    : 'text-[#4A4540] hover:text-[#B85D19] hover:bg-[#F7F3EE]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right side CTA & Mobile controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Prominent Call Now button */}
          <a
            id="navbar-call-btn"
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="flex items-center gap-2 bg-[#B85D19] hover:bg-[#9E4D12] text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-95"
            aria-label="Call Zaify's Restaurant"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2A2724] hover:bg-[#EFE8DE] rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E1D7] px-4 pt-2 pb-4 shadow-md transition-all">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'text-[#B85D19] bg-[#F2ECE4] font-semibold'
                    : 'text-[#3E3A35] hover:bg-[#F5EFEB]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#E8E1D7] flex items-center justify-between text-xs text-[#6B635A]">
            <span>Satellite Town, Rawalpindi</span>
            <span className="font-semibold text-[#B85D19]">0300-6165529</span>
          </div>
        </div>
      )}
    </header>
  );
};
