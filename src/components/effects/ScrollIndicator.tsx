
import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-black/10 z-50">
      <div 
        className="h-full bg-gradient-to-r from-luxury-red via-luxury-gold to-luxury-red-accent transition-all duration-300 ease-out shadow-sm"
        style={{ 
          width: `${scrollProgress}%`,
          boxShadow: '0 0 10px rgba(139, 21, 56, 0.4)'
        }}
      />
    </div>
  );
};

export default ScrollIndicator;
