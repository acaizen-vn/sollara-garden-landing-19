
import React from 'react';

interface HeroBackgroundProps {
  scrollY: number;
}

const HeroBackground = ({ scrollY }: HeroBackgroundProps) => {
  return (
    <div className="absolute inset-0">
      {/* Base layer with vintage overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url('/lovable-uploads/318e54c2-e94e-4b91-a4ed-5f6aeade3dbb.png')`,
          transform: `translateY(${scrollY * 0.5}px)`,
          filter: 'sepia(20%) contrast(115%) brightness(85%)',
        }}
      />
      
      {/* Enhanced vintage color overlay with red accents */}
      <div 
        className="absolute inset-0 vintage-overlay"
        style={{
          background: `linear-gradient(45deg, 
            rgba(139, 21, 56, 0.25) 0%, 
            rgba(212, 175, 55, 0.15) 25%,
            rgba(62, 44, 35, 0.3) 50%,
            rgba(139, 21, 56, 0.2) 75%,
            rgba(212, 175, 55, 0.25) 100%
          )`,
          mixBlendMode: 'overlay',
        }}
      />
      
      {/* Enhanced vignette effect with red undertones */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-luxury-red/10 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      
      {/* Enhanced red glow accents */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-luxury-red/15 rounded-full blur-3xl animate-pulse opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-luxury-gold/20 rounded-full blur-2xl animate-glow opacity-70" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-luxury-red-accent/10 rounded-full blur-xl animate-pulse delay-1000 opacity-50" />
    </div>
  );
};

export default HeroBackground;
