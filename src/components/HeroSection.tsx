
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

  // Parallax effect
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
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden vintage-texture film-grain"
      style={{ cursor: 'auto' }}
    >
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Enhanced Parallax Background Layers with Vintage Effect */}
      <HeroBackground scrollY={scrollY} />
      
      {/* Content with enhanced animations */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in space-y-8">
          {/* Enhanced Logo */}
          <HeroLogo />
          
          {/* Enhanced CTA Button */}
          <div className="animate-scale-in">
            <LiquidButton 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-luxury-red via-luxury-red-accent to-luxury-red hover:from-luxury-red-dark hover:via-luxury-red hover:to-luxury-red-accent text-white shadow-red-glow"
              size="lg"
            >
              QUERO SABER MAIS
            </LiquidButton>
          </div>
          
          {/* Enhanced Video Player */}
          <HeroVideo />
        </div>
      </div>
      
      {/* Enhanced scroll hint with red accents */}
      <HeroScrollHint />
    </section>
  );
};

export default HeroSection;
