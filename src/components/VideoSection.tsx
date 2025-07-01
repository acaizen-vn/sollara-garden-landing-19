
import React, { useRef, useEffect, useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const { heroVideoUrl, heroVideoType } = useAdmin();
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${match[2]}`
      : url;
  };

  // Intersection Observer for auto play/pause
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
          
          if (heroVideoType === 'file' && videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(console.log);
              setIsPlaying(true);
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [heroVideoType]);

  const togglePlayPause = () => {
    if (heroVideoType === 'file' && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  if (!heroVideoUrl) return null;

  return (
    <section id="video-section" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Decorative frame design */}
          <div className="relative">
            {/* Ornate border frame */}
            <div className="absolute -inset-8 bg-gradient-to-r from-luxury-gold via-luxury-red to-luxury-gold p-1 rounded-3xl opacity-20"></div>
            <div className="absolute -inset-6 bg-gradient-to-r from-luxury-red via-luxury-gold to-luxury-red p-1 rounded-3xl opacity-30"></div>
            <div className="absolute -inset-4 bg-white rounded-3xl shadow-2xl"></div>
            
            {/* Video container */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-modern-lg border-4 border-luxury-gold/30 group">
              <div className="aspect-video relative">
                {heroVideoType === 'youtube' ? (
                  <iframe
                    ref={iframeRef}
                    src={getYouTubeEmbedUrl(heroVideoUrl)}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      src={heroVideoUrl}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                    />
                    
                    {/* Custom play/pause overlay - only for file videos */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={togglePlayPause}
                        className="w-20 h-20 bg-luxury-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-luxury-gold transition-colors duration-200 shadow-2xl"
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-white ml-0" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-luxury-gold rounded-tl-2xl"></div>
            <div className="absolute -top-6 -right-6 w-12 h-12 border-t-4 border-r-4 border-luxury-gold rounded-tr-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-4 border-l-4 border-luxury-gold rounded-bl-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-luxury-gold rounded-br-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
