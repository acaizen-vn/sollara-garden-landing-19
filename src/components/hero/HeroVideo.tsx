
import React, { useRef, useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useAdmin } from '@/contexts/AdminContext';
import { Play, Pause } from 'lucide-react';

const HeroVideo = () => {
  const { heroVideoUrl } = useAdmin();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Lazy load video quando usuário rola perto da seção
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

  // Gerenciar reprodução do vídeo
  useEffect(() => {
    if (!heroVideoUrl || !videoRef.current || !shouldLoadVideo) return;

    const video = videoRef.current;
    
    const handleLoadStart = () => setIsVideoLoading(true);
    const handleCanPlay = () => {
      setIsVideoLoading(false);
      setHasVideoError(false);
    };
    const handleError = () => {
      setHasVideoError(true);
      setIsVideoLoading(false);
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVideoInView(entry.isIntersecting);
          
          if (entry.isIntersecting) {
            // Auto-play apenas se não houve interação manual
            if (!showControls) {
              video.play().catch(() => {
                console.log('Autoplay prevented by browser');
                setShowControls(true); // Mostrar controles se autoplay falhar
              });
            }
          } else {
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
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [heroVideoUrl, shouldLoadVideo, showControls]);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    
    setShowControls(true);
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  if (!heroVideoUrl) return null;

  return (
    <div className="fade-in max-w-2xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-modern bg-black/5 border border-gray-200/50 group">
        {/* Loading Skeleton */}
        {isVideoLoading && !hasVideoError && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <Skeleton className="w-full h-96 bg-gray-200" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        )}

        {/* Vídeo otimizado */}
        {shouldLoadVideo && (
          <div className="relative">
            <video
              ref={videoRef}
              src={heroVideoUrl}
              className="w-full h-auto max-h-96 object-cover transition-all duration-300"
              muted={!showControls}
              loop
              playsInline
              preload="metadata"
              controls={showControls}
              style={{
                opacity: isVideoLoading ? 0 : 1,
                transition: 'opacity 0.3s ease'
              }}
            />
            
            {/* Controle de play/pause personalizado */}
            {!showControls && !isVideoLoading && !hasVideoError && (
              <button
                onClick={togglePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-gray-700" />
                  ) : (
                    <Play className="w-6 h-6 text-gray-700 ml-1" />
                  )}
                </div>
              </button>
            )}
            
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Fallback para erro */}
        {hasVideoError && (
          <div className="w-full h-96 flex items-center justify-center bg-gray-100 text-gray-500">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Play className="w-6 h-6" />
              </div>
              <p className="text-lg font-medium">Vídeo não disponível</p>
              <p className="text-sm">Tente novamente mais tarde</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Indicador de status */}
      <div className="mt-4 flex justify-center">
        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
          isVideoInView && !hasVideoError ? 'bg-luxury-gold' : 'bg-gray-300'
        }`} />
      </div>
    </div>
  );
};

export default HeroVideo;
