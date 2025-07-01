
import React, { useRef, useEffect, useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoSection = () => {
  const { heroVideoUrl, heroVideoType } = useAdmin();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Convert YouTube URL to embed format with autoplay
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&mute=1&loop=1&playlist=${match[2]}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`
      : url;
  };

  // Intersection Observer for auto play/pause
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!heroVideoUrl) return null;

  return (
    <section id="video-section" ref={sectionRef} className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Elegant background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-luxury-red/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Premium section header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent flex-1" />
              <div className="px-6 py-2 bg-luxury-gold/10 backdrop-blur-sm rounded-full border border-luxury-gold/20">
                <span className="text-luxury-gold font-medium text-sm tracking-wider uppercase">Apresentação Exclusiva</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent flex-1" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sf-pro">
              Conheça o <span className="text-luxury-gold">Sollara Garden</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Descubra o futuro da vida residencial em Barra Mansa
            </p>
          </div>

          {/* Luxury video container */}
          <div className="relative group">
            {/* Premium frame design */}
            <div className="absolute -inset-12 bg-gradient-to-r from-luxury-gold/20 via-luxury-red/10 to-luxury-gold/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
            <div className="absolute -inset-8 bg-gradient-to-br from-luxury-gold/30 via-transparent to-luxury-red/30 rounded-3xl opacity-40" />
            <div className="absolute -inset-6 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl backdrop-blur-sm" />
            
            {/* Main video container */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-luxury-gold/30 group-hover:border-luxury-gold/50 transition-all duration-500">
              <div className="aspect-video relative">
                {heroVideoType === 'youtube' ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src={getYouTubeEmbedUrl(heroVideoUrl)}
                      className="w-full h-full rounded-3xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      frameBorder="0"
                      title="Sollara Garden - Apresentação"
                    />
                    
                    {/* Elegant overlay controls */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20">
                            <Play className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-white font-medium">
                            Sollara Garden - Tour Virtual
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => setIsMuted(!isMuted)}
                          className="bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20 hover:bg-white/20 transition-colors"
                        >
                          {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <video
                    src={heroVideoUrl}
                    className="w-full h-full object-cover rounded-3xl"
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                  />
                )}
              </div>
            </div>

            {/* Luxury corner decorations */}
            <div className="absolute -top-8 -left-8 w-16 h-16">
              <div className="w-full h-full border-t-4 border-l-4 border-luxury-gold rounded-tl-3xl opacity-60" />
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-luxury-gold/40 rounded-tl-2xl" />
            </div>
            <div className="absolute -top-8 -right-8 w-16 h-16">
              <div className="w-full h-full border-t-4 border-r-4 border-luxury-gold rounded-tr-3xl opacity-60" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-luxury-gold/40 rounded-tr-2xl" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16">
              <div className="w-full h-full border-b-4 border-l-4 border-luxury-gold rounded-bl-3xl opacity-60" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-luxury-gold/40 rounded-bl-2xl" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16">
              <div className="w-full h-full border-b-4 border-r-4 border-luxury-gold rounded-br-3xl opacity-60" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-luxury-gold/40 rounded-br-2xl" />
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 left-1/4 w-2 h-2 bg-luxury-gold rounded-full animate-pulse" />
            <div className="absolute -bottom-4 right-1/4 w-2 h-2 bg-luxury-red rounded-full animate-pulse delay-500" />
            <div className="absolute top-1/2 -left-4 w-1 h-8 bg-gradient-to-b from-luxury-gold to-transparent opacity-60" />
            <div className="absolute top-1/2 -right-4 w-1 h-8 bg-gradient-to-b from-luxury-red to-transparent opacity-60" />
          </div>

          {/* Premium call-to-action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-luxury-gold/10 to-luxury-red/10 backdrop-blur-sm rounded-2xl p-6 border border-luxury-gold/20">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Interessado?</h3>
                <p className="text-gray-300">Entre em contato e agende sua visita</p>
              </div>
              <button className="bg-luxury-gold hover:bg-luxury-gold-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Falar com Consultor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
