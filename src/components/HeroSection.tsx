
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';

const HeroSection = () => {
  const { heroTitle, heroSubtitle, heroDescription, heroVideoUrl, heroBackgroundImage } = useAdmin();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoInView, setIsVideoInView] = useState(false);
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!heroVideoUrl || !videoRef.current) return;

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoInView(true);
            video.play().catch(() => {
              // Fallback se autoplay falhar
              console.log('Autoplay prevented');
            });
          } else {
            setIsVideoInView(false);
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Reproduz quando 50% do vídeo está visível
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [heroVideoUrl]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(62, 44, 35, 0.7), rgba(42, 27, 20, 0.8)), url('${heroBackgroundImage || 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'}')`
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
              className="mx-auto h-32 md:h-40 lg:h-48 w-auto"
            />
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 uppercase tracking-wider text-shadow">
            {heroTitle}
          </h1>
          <div className="w-32 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <h2 className="font-playfair text-2xl md:text-4xl lg:text-5xl font-medium text-luxury-gold-light mb-8 uppercase tracking-wide text-shadow">
            {heroSubtitle}
          </h2>
          <p className="text-xl md:text-2xl text-white mb-12 font-inter uppercase tracking-wider text-shadow">
            {heroDescription}
          </p>
          
          {/* CTA Button */}
          <div className="animate-scale-in mb-12">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="btn-primary text-lg px-12 py-6"
            >
              QUERO SABER MAIS
            </Button>
          </div>
          
          {/* Video Player */}
          {heroVideoUrl && (
            <div className="animate-slide-in-right max-w-2xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-md border border-white/10">
                <video
                  ref={videoRef}
                  src={heroVideoUrl}
                  className="w-full h-auto max-h-96 object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{
                    filter: 'brightness(0.9) contrast(1.1)',
                  }}
                />
                
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                
                {/* Video Label */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <p className="text-white/90 text-sm uppercase tracking-wide font-inter">
                      Vídeo Institucional
                    </p>
                  </div>
                </div>
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
