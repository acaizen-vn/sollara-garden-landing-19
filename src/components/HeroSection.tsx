
import React, { useRef, useEffect, useState } from 'react';
import FloatingParticles from './effects/FloatingParticles';
import LiquidButton from './effects/LiquidButton';
import HeroBackground from './hero/HeroBackground';
import HeroLogo from './hero/HeroLogo';
import HeroVideo from './hero/HeroVideo';
import HeroScrollHint from './hero/HeroScrollHint';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Simple parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle floating particles */}
      <FloatingParticles />
      
      {/* Background with minimal parallax */}
      <HeroBackground scrollY={scrollY} />
      
      {/* Content with simple fade-in */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-6xl mx-auto">
        <div className="fade-in space-y-8">
          {/* Logo */}
          <HeroLogo />
          
          {/* Modern CTA Button */}
          <div>
            <LiquidButton 
              onClick={scrollToContact}
              className="btn-modern-red text-lg font-medium px-8 py-4"
              size="lg"
            >
              QUERO SABER MAIS
            </LiquidButton>
          </div>
          
          {/* Video Player */}
          <HeroVideo />
        </div>
      </div>
      
      {/* Simple scroll hint */}
      <HeroScrollHint />
    </section>
  );
};

export default HeroSection;
