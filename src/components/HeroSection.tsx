
import React from 'react';
import FloatingParticles from './effects/FloatingParticles';
import HeroScrollHint from './hero/HeroScrollHint';
import AdvancedVideoPlayer from './hero/AdvancedVideoPlayer';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-section relative">
      {/* Partículas flutuantes sutis */}
      <FloatingParticles />
      
      {/* Player de vídeo avançado */}
      <AdvancedVideoPlayer onContactClick={scrollToContact} />
      
      {/* Dica de scroll */}
      <HeroScrollHint />
    </div>
  );
};

export default HeroSection;
