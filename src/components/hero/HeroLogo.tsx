
import React from 'react';

const HeroLogo = () => {
  return (
    <div className="mb-8 group">
      <div className="relative inline-block">
        <img 
          src="/lovable-uploads/c67509dc-b8fd-4b63-a711-7737584ea409.png" 
          alt="Sollara Garden Logo"
          className="mx-auto h-44 md:h-52 lg:h-60 w-auto drop-shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-3xl filter brightness-110 contrast-110"
        />
        
        {/* Enhanced multi-layered glow with red accents */}
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/25 via-luxury-red/15 to-luxury-gold/25 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-red/20 via-transparent to-luxury-gold/20 rounded-full blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 -z-10" />
        
        {/* Elegant pulsing border glow */}
        <div className="absolute inset-0 rounded-full border-2 border-luxury-red/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-vintage-glow" />
        <div className="absolute inset-0 rounded-full border border-luxury-gold/40 opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-xs" />
        
        {/* Subtle rotating accent ring */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-1000">
          <div className="w-full h-full border-2 border-dashed border-luxury-red/50 rounded-full animate-spin-slow"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroLogo;
