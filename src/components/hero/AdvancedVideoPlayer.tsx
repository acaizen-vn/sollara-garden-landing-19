
import React, { useRef, useEffect, useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import VideoControls from './VideoControls';
import BackgroundPattern from './BackgroundPattern';
import VideoSlate from './VideoSlate';
import SvgIcons from './SvgIcons';

interface AdvancedVideoPlayerProps {
  onContactClick: () => void;
}

const AdvancedVideoPlayer = ({ onContactClick }: AdvancedVideoPlayerProps) => {
  const { heroVideoUrl } = useAdmin();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  // Detectar dispositivo
  useEffect(() => {
    const detectDevice = () => {
      setDevice(window.innerWidth >= 768 ? 'desktop' : 'mobile');
    };
    
    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  // Gerenciar vídeo
  useEffect(() => {
    if (!heroVideoUrl || !videoRef.current || device === 'mobile') return;

    const video = videoRef.current;
    
    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      setHasVideoError(false);
    };
    
    const handleError = () => {
      setHasVideoError(true);
      setIsVideoLoaded(false);
    };
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Auto-play quando carregado
    video.play().catch(() => {
      console.log('Autoplay prevented');
    });

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [heroVideoUrl, device]);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <section className="video-section relative min-h-screen overflow-hidden">
      <SvgIcons />
      
      {/* Video ou Background estático */}
      <div className="video-iframe absolute inset-0 w-full h-full">
        {heroVideoUrl && device === 'desktop' && !hasVideoError ? (
          <video
            ref={videoRef}
            src={heroVideoUrl}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <div 
            className="video-static-bg absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/lovable-uploads/318e54c2-e94e-4b91-a4ed-5f6aeade3dbb.png')`,
              filter: 'sepia(20%) contrast(115%) brightness(85%)',
            }}
          />
        )}
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Pattern de fundo */}
      <BackgroundPattern />
      
      {/* Controles de vídeo */}
      {heroVideoUrl && device === 'desktop' && isVideoLoaded && !hasVideoError && (
        <VideoControls
          isPlaying={isPlaying}
          onTogglePlay={togglePlayPause}
          className="absolute top-6 right-6 z-20"
        />
      )}
      
      {/* Conteúdo central */}
      <div className="video-column absolute inset-0 flex items-center justify-center z-20">
        <div className="video-column-center max-w-4xl mx-auto px-4">
          <VideoSlate onContactClick={onContactClick} />
        </div>
      </div>
    </section>
  );
};

export default AdvancedVideoPlayer;
