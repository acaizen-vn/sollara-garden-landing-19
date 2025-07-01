
import React, { useRef, useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useAdmin } from '@/contexts/AdminContext';

const HeroVideo = () => {
  const { heroVideoUrl } = useAdmin();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

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

  if (!heroVideoUrl) return null;

  return (
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
                filter: 'brightness(90%) contrast(120%) sepia(8%)',
                opacity: isVideoLoading ? 0 : 1,
                transition: 'opacity 0.3s ease, transform 0.5s ease'
              }}
            />
            {/* Enhanced vintage film overlay with red undertones */}
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-red/15 via-transparent to-luxury-gold/10 opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/10 via-transparent to-luxury-red/5 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          </div>
        )}

        {/* Error Fallback */}
        {hasVideoError && (
          <div className="w-full h-96 flex items-center justify-center bg-black/40 text-white">
            <p className="text-lg font-cormorant">Erro ao carregar o vídeo</p>
          </div>
        )}
        
        {/* Enhanced vintage overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      </div>
      
      {/* Enhanced indicator with red accent */}
      <div className="mt-6 flex justify-center">
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
          isVideoInView ? 'bg-luxury-red animate-vintage-glow shadow-lg shadow-luxury-red/50' : 'bg-white/30'
        }`} />
      </div>
    </div>
  );
};

export default HeroVideo;
