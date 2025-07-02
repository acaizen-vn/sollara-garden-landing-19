
import React, { useRef, useEffect, useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';

const VideoSection = () => {
  const { heroVideoUrl, heroVideoType } = useAdmin();
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  // Convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url: string) => {
    console.log('Original URL:', url);
    
    let videoId = '';
    
    if (url.includes('youtube.com/shorts/')) {
      const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
      videoId = match ? match[1] : '';
    } else if (url.includes('youtu.be/')) {
      const match = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
      videoId = match ? match[1] : '';
    } else if (url.includes('youtube.com/watch')) {
      const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
      videoId = match ? match[1] : '';
    }
    
    console.log('Extracted video ID:', videoId);
    
    if (videoId) {
      const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1`;
      console.log('Final embed URL:', embedUrl);
      return embedUrl;
    }
    
    return url;
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
            } else {
              videoRef.current.pause();
            }
          }
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
  }, [heroVideoType]);

  if (!heroVideoUrl) return null;

  return (
    <section id="video-section" ref={sectionRef} className="py-16 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Video container sem cabeçalho duplicado */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video relative">
                {heroVideoType === 'youtube' ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src={getYouTubeEmbedUrl(heroVideoUrl)}
                      className="w-full h-full rounded-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      frameBorder="0"
                      title="Sollara Garden - Apresentação"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <video
                      ref={videoRef}
                      src={heroVideoUrl}
                      className="w-full h-full object-cover rounded-2xl"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
