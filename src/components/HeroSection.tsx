import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useAdmin } from '@/contexts/AdminContext';

const HeroSection = () => {
  const { heroVideoUrl, heroBackgroundImage } = useAdmin();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(62, 44, 35, 0.4), rgba(42, 27, 20, 0.6)), url('${heroBackgroundImage || '/lovable-uploads/318e54c2-e94e-4b91-a4ed-5f6aeade3dbb.png'}')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/c67509dc-b8fd-4b63-a711-7737584ea409.png" 
              alt="Sollara Garden Logo"
              className="mx-auto h-56 md:h-64 lg:h-72 w-auto drop-shadow-2xl"
            />
          </div>
          
          {/* CTA Button */}
          <div className="animate-scale-in mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="btn-primary text-lg px-12 py-6 shadow-2xl"
            >
              QUERO SABER MAIS
            </Button>
          </div>
          
          {/* Video Player */}
          {heroVideoUrl && (
            <div className="animate-slide-in-right max-w-2xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-md border border-white/10">
                {/* Loading Skeleton */}
                {isVideoLoading && !hasVideoError && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <Skeleton className="w-full h-96 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                )}

                {/* Video Element */}
                {shouldLoadVideo && (
                  <video
                    ref={videoRef}
                    src={heroVideoUrl}
                    className="w-full h-auto max-h-96 object-cover"
                    muted
                    loop
                    playsInline
                    preload="none"
                    controls={false}
                    style={{
                      filter: 'brightness(0.9) contrast(1.1)',
                      opacity: isVideoLoading ? 0 : 1,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                )}

                {/* Error Fallback */}
                {hasVideoError && (
                  <div className="w-full h-96 flex items-center justify-center bg-black/40 text-white">
                    <p className="text-lg">Erro ao carregar o vídeo</p>
                  </div>
                )}
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Subtle indicator */}
              <div className="mt-4 flex justify-center">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isVideoInView ? 'bg-luxury-gold animate-pulse' : 'bg-white/30'
                }`} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
