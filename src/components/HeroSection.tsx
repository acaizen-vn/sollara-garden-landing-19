
import React, { useRef, useEffect, useState } from 'react';
import FloatingParticles from './effects/FloatingParticles';
import HeroScrollHint from './hero/HeroScrollHint';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const scrollToVideoSection = () => {
    document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
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
      {/* Video Background */}
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
        
        {/* Overlay with animated gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/30 via-black/50 to-luxury-gold/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-luxury-gold/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-luxury-red/40 rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-luxury-gold/20 blur-xl animate-bounce" />
      </div>

      <FloatingParticles />
      
      {/* Simplified content layout */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-6xl mx-auto">
        <div className="innovative-hero-content space-y-12">
          {/* Logo with enhanced effects */}
          <div className="logo-container">
            <div className="mb-8 group">
              <div className="relative inline-block">
                <img 
                  src="/lovable-uploads/c67509dc-b8fd-4b63-a711-7737584ea409.png" 
                  alt="Sollara Garden Logo"
                  className="mx-auto h-72 md:h-80 lg:h-96 w-auto drop-shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-3xl filter brightness-110 contrast-110"
                />
                
                {/* Enhanced multi-layered glow with red accents */}
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/25 via-luxury-red/15 to-luxury-gold/25 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-red/20 via-transparent to-luxury-gold/20 rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 -z-10" />
                
                {/* Elegant pulsing border glow */}
                <div className="absolute inset-0 rounded-full border-2 border-luxury-red/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-vintage-glow" />
                <div className="absolute inset-0 rounded-full border border-luxury-gold/40 opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-xs" />
                
                {/* Subtle rotating accent ring */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-1000">
                  <div className="w-full h-full border-2 border-dashed border-luxury-red/50 rounded-full animate-spin-slow"></div>
                </div>
              </div>
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
