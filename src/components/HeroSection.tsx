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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
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
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Base layer with slower parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `linear-gradient(rgba(62, 44, 35, 0.4), rgba(42, 27, 20, 0.6)), url('/lovable-uploads/318e54c2-e94e-4b91-a4ed-5f6aeade3dbb.png')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        {/* Interactive ripple overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)`,
            transition: 'background 0.3s ease-out',
          }}
        />
      </div>
      
      {/* Content with enhanced animations */}
      <div className="relative z-20 text-center px-4 md:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Logo with morphing effect */}
          <div className="mb-8 group">
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/c67509dc-b8fd-4b63-a711-7737584ea409.png" 
                alt="Sollara Garden Logo"
                className="mx-auto h-64 md:h-72 lg:h-80 w-auto drop-shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-3xl"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-luxury-gold/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="animate-scale-in mb-12">
            <LiquidButton onClick={scrollToContact}>
              QUERO SABER MAIS
            </LiquidButton>
          </div>
          
          {/* Video Player with enhanced effects */}
          {heroVideoUrl && (
            <div className="animate-slide-in-right max-w-2xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-md border border-white/10 group">
                {/* Loading Skeleton */}
                {isVideoLoading && !hasVideoError && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <Skeleton className="w-full h-96 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                )}

                {/* Video Element with mask effect */}
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
                        filter: 'brightness(0.9) contrast(1.1)',
                        opacity: isVideoLoading ? 0 : 1,
                        transition: 'opacity 0.3s ease, transform 0.5s ease'
                      }}
                    />
                    {/* Hexagonal mask overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-gold/20 via-transparent to-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}

                {/* Error Fallback */}
                {hasVideoError && (
                  <div className="w-full h-96 flex items-center justify-center bg-black/40 text-white">
                    <p className="text-lg">Erro ao carregar o vídeo</p>
                  </div>
                )}
                
                {/* Enhanced overlay with animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-luxury-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </div>
              
              {/* Enhanced indicator */}
              <div className="mt-4 flex justify-center">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isVideoInView ? 'bg-luxury-gold animate-pulse shadow-lg shadow-luxury-gold/50' : 'bg-white/30'
                }`} />
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Scroll hint with animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
