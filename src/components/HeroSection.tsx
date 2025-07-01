
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useAdmin } from '@/contexts/AdminContext';
import FloatingParticles from './effects/FloatingParticles';
import LiquidButton from './effects/LiquidButton';

const HeroSection = () => {
  const { heroVideoUrl, heroBackgroundImage } = useAdmin();
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
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

  // Lazy load video when user scrolls near the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '200px 0px 200px 0px'
      }
    );

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => observer.disconnect();
  }, []);

  // Handle video playback when in view
  useEffect(() => {
    if (!heroVideoUrl || !videoRef.current || !shouldLoadVideo) return;

    const video = videoRef.current;
    
    const handleLoadStart = () => setIsVideoLoading(true);
    const handleCanPlay = () => setIsVideoLoading(false);
    const handleError = () => {
      setHasVideoError(true);
      setIsVideoLoading(false);
    };

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoInView(true);
            video.play().catch(() => {
              console.log('Autoplay prevented');
            });
          } else {
            setIsVideoInView(false);
            video.pause();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [heroVideoUrl, shouldLoadVideo]);

  return (
    <section 
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden vintage-texture film-grain"
      style={{ cursor: 'auto' }} // Override cursor for this section
    >
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Enhanced Parallax Background Layers with Vintage Effect */}
      <div className="absolute inset-0">
        {/* Base layer with vintage overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url('/lovable-uploads/318e54c2-e94e-4b91-a4ed-5f6aeade3dbb.png')`,
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: 'sepia(15%) contrast(110%) brightness(90%)',
          }}
        />
        
        {/* Vintage color overlay with red accents */}
        <div 
          className="absolute inset-0 vintage-overlay"
          style={{
            mixBlendMode: 'overlay',
          }}
        />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        
        {/* Subtle red glow accents */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-luxury-red/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-luxury-gold/15 rounded-full blur-2xl animate-glow" />
      </div>
      
      {/* Content with enhanced animations */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Enhanced Logo with better proportions */}
          <div className="mb-12 group">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/c67509dc-b8fd-4b63-a711-7737584ea409.png" 
                alt="Sollara Garden Logo"
                className="mx-auto h-48 md:h-56 lg:h-64 w-auto drop-shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-3xl filter brightness-110 contrast-105"
              />
              {/* Enhanced glow with red accents */}
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 via-luxury-red/10 to-luxury-gold/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              {/* Elegant border glow */}
              <div className="absolute inset-0 rounded-full border-2 border-luxury-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            </div>
          </div>
          
          {/* Enhanced CTA Button with better sizing */}
          <div className="animate-scale-in mb-16">
            <LiquidButton 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-luxury-red via-luxury-red-accent to-luxury-red hover:from-luxury-red-dark hover:via-luxury-red hover:to-luxury-red-accent text-white shadow-red-glow"
              size="lg"
            >
              QUERO SABER MAIS
            </LiquidButton>
          </div>
          
          {/* Enhanced Video Player */}
          {heroVideoUrl && (
            <div className="animate-slide-in-right max-w-2xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-vintage bg-black/20 backdrop-blur-md border-2 border-luxury-red/30 group morphing-border">
                {/* Loading Skeleton */}
                {isVideoLoading && !hasVideoError && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <Skeleton className="w-full h-96 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-luxury-red border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                )}

                {/* Video Element with enhanced effects */}
                {shouldLoadVideo && (
                  <div className="relative">
                    <video
                      ref={videoRef}
                      src={heroVideoUrl}
                      className="w-full h-auto max-h-96 object-cover transition-all duration-500 group-hover:scale-105"
                      muted
                      loop
                      playsInline
                      preload="none"
                      controls={false}
                      style={{
                        filter: 'brightness(95%) contrast(115%) sepia(5%)',
                        opacity: isVideoLoading ? 0 : 1,
                        transition: 'opacity 0.3s ease, transform 0.5s ease'
                      }}
                    />
                    {/* Vintage film overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-red/10 via-transparent to-luxury-gold/10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                )}

                {/* Error Fallback */}
                {hasVideoError && (
                  <div className="w-full h-96 flex items-center justify-center bg-black/40 text-white">
                    <p className="text-lg font-crimson">Erro ao carregar o vídeo</p>
                  </div>
                )}
                
                {/* Enhanced vintage overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Enhanced indicator with red accent */}
              <div className="mt-6 flex justify-center">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isVideoInView ? 'bg-luxury-red animate-vintage-glow shadow-lg shadow-luxury-red/50' : 'bg-white/30'
                }`} />
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Enhanced scroll hint with red accents */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-red rounded-full flex justify-center bg-luxury-red/10 backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-luxury-red to-luxury-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
