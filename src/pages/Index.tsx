import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import CoverageSection from '../components/CoverageSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden relative">
      <Header />
      <main className="relative">
        <HeroSection scrollY={scrollY} />
        
        {/* Parallax Sections */}
        <div 
          className="relative z-10" 
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <ServicesSection scrollY={scrollY} />
        </div>
        
        <div 
          className="relative z-10" 
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <AboutSection />
        </div>
        
        <div 
          className="relative z-10" 
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          <TestimonialsSection scrollY={scrollY} />
        </div>
        
        <div 
          className="relative z-10" 
          style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        >
          <CoverageSection scrollY={scrollY} />
        </div>
        
        <div 
          className="relative z-10" 
          style={{ transform: `translateY(${scrollY * 0.04}px)` }}
        >
          <ContactSection scrollY={scrollY} />
        </div>
        
        <div 
          className="relative z-10" 
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        >
          <FAQSection scrollY={scrollY} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;