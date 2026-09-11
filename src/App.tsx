import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to highlight active nav item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] flex flex-col selection:bg-[#EBDDCF] selection:text-[#1E1C1A]">
      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Page Flow */}
      <main className="flex-1">
        <Hero onViewMenu={() => scrollToSection('menu')} />
        <MenuSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Simple, Unobtrusive Restaurant Assistant Chatbot */}
      <Chatbot />

      {/* Mobile 1-Tap Quick Action Bar */}
      <MobileQuickBar onViewMenu={() => scrollToSection('menu')} />
    </div>
  );
}
