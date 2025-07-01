
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseOut = () => setIsVisible(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed pointer-events-none z-50 mix-blend-difference
        transition-all duration-300 ease-out
        ${isHovering ? 'scale-150' : 'scale-100'}
      `}
      style={{
        left: position.x - 8,
        top: position.y - 8,
        width: 16,
        height: 16,
      }}
    >
      <div className="w-full h-full bg-luxury-gold rounded-full opacity-80" />
      <div 
        className={`
          absolute inset-0 border-2 border-luxury-gold rounded-full
          transition-all duration-300 ease-out
          ${isHovering ? 'scale-200' : 'scale-100'}
        `}
      />
    </div>
  );
};

export default CustomCursor;
