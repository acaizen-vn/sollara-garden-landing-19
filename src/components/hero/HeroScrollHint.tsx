
import React from 'react';

const HeroScrollHint = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-luxury-red rounded-full flex justify-center bg-luxury-red/10 backdrop-blur-sm shadow-lg shadow-luxury-red/20">
        <div className="w-1 h-3 bg-gradient-to-b from-luxury-red to-luxury-gold rounded-full mt-2 animate-pulse"></div>
      </div>
      <div className="mt-2 text-center">
        <div className="text-xs text-luxury-red/80 font-cormorant tracking-wider uppercase opacity-75">
          Role para baixo
        </div>
      </div>
    </div>
  );
};

export default HeroScrollHint;
