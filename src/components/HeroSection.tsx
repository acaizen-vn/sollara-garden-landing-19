
import React, { useRef, useEffect, useState } from 'react';
import FloatingParticles from './effects/FloatingParticles';
import LiquidButton from './effects/LiquidButton';
import HeroBackground from './hero/HeroBackground';
import HeroLogo from './hero/HeroLogo';
import HeroScrollHint from './hero/HeroScrollHint';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
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

  // Video autoplay with intersection observer
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isVideoLoaded) {
            video.play().catch(console.log);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isVideoLoaded]);

  return (
    <section 
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Innovative Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => console.log('Error loading video')}
        >
          <source src="https://drive.google.com/uc?export=download&id=14jFcXML2KS1bawZ2P9V2_j7uoHNHrayp" type="video/mp4" />
        </video>
        
        {/* Innovative overlay with animated gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/30 via-black/50 to-luxury-gold/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-luxury-gold/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-luxury-red/40 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-luxury-gold/20 blur-xl animate-bounce" />
      </div>

      {/* Subtle floating particles */}
      <FloatingParticles />
      
      {/* Innovative content layout */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-6xl mx-auto">
        <div className="innovative-hero-content space-y-12">
          {/* Logo with enhanced effects */}
          <div className="logo-container">
            <HeroLogo />
          </div>
          
          {/* Innovative title design */}
          <div className="title-section space-y-6">
            <h1 className="text-5xl md:text-7xl font-sf-pro font-bold text-white leading-tight">
              <span className="block text-luxury-gold drop-shadow-2xl">SOLLARA</span>
              <span className="block text-white/90 text-4xl md:text-5xl font-light tracking-wider">GARDEN</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
              Seu novo lar em um condomínio de luxo com infraestrutura completa
            </p>
          </div>
          
          {/* Modern CTA Button */}
          <div className="cta-section">
            <LiquidButton 
              onClick={scrollToContact}
              className="btn-modern-red text-xl font-semibold px-12 py-5 transform hover:scale-105 transition-all duration-300"
              size="lg"
            >
              DESCUBRA SEU LAR
            </LiquidButton>
          </div>
          
          {/* Innovative info cards */}
          <div className="info-cards grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="info-card backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-luxury-gold mb-2">15</div>
              <div className="text-white/90 font-medium">Casas Disponíveis</div>
            </div>
            <div className="info-card backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-luxury-gold mb-2">5000m²</div>
              <div className="text-white/90 font-medium">Área de Lazer</div>
            </div>
            <div className="info-card backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-luxury-gold mb-2">100%</div>
              <div className="text-white/90 font-medium">Segurança 24h</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll hint */}
      <HeroScrollHint />
    </section>
  );
};

export default HeroSection;
