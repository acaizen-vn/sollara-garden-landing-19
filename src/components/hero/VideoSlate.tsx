
import React from 'react';
import HeroLogo from './HeroLogo';
import LiquidButton from '../effects/LiquidButton';

interface VideoSlateProps {
  onContactClick: () => void;
}

const VideoSlate = ({ onContactClick }: VideoSlateProps) => {
  return (
    <div className="video-slate relative z-10 text-center">
      <div className="logo-bg absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 rounded-3xl blur-xl"></div>
      
      <div className="relative z-20 space-y-8">
        <HeroLogo />
        
        <h1 className="video-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Sollara Garden
          <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-luxury-gold mt-2">
            Experiência Premium
          </span>
        </h1>
        
        <div className="cta-container">
          <LiquidButton 
            onClick={onContactClick}
            className="btn-modern-red text-lg font-medium px-8 py-4"
            size="lg"
          >
            QUERO SABER MAIS
          </LiquidButton>
        </div>
      </div>
    </div>
  );
};

export default VideoSlate;
