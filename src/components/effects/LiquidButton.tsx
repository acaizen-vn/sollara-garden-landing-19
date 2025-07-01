
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
}

const LiquidButton = ({ children, onClick, className = '', size = 'lg' }: LiquidButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'text-sm px-6 py-3',
    default: 'text-base px-8 py-4',
    lg: 'text-lg px-12 py-6'
  };

  return (
    <div className="relative inline-block">
      <Button
        size={size}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative overflow-hidden font-semibold uppercase tracking-wide font-playfair
          bg-gradient-to-r from-luxury-red via-luxury-red-accent to-luxury-red 
          hover:from-luxury-red-dark hover:via-luxury-red hover:to-luxury-red-accent 
          text-white border-2 border-luxury-red/30
          transition-all duration-500 transform hover:scale-105
          shadow-red-glow hover:shadow-vintage rounded-full
          ${sizeClasses[size]} ${className}
        `}
      >
        {/* Enhanced liquid effect background with red gradient */}
        <div 
          className={`
            absolute inset-0 bg-gradient-to-r from-luxury-gold-light via-luxury-red-light to-luxury-gold-light
            transform transition-transform duration-700 ease-out
            ${isHovered ? 'scale-150 rotate-12' : 'scale-0 rotate-0'}
          `}
          style={{ 
            borderRadius: '50%',
            transformOrigin: 'center',
            mixBlendMode: 'overlay',
          }}
        />
        
        {/* Enhanced ripple effect with vintage touch */}
        <div 
          className={`
            absolute inset-0 bg-gradient-to-r from-white/20 via-luxury-gold/30 to-white/20 rounded-full
            transform transition-all duration-500 ease-out
            ${isHovered ? 'scale-110 opacity-0' : 'scale-0 opacity-100'}
          `}
        />
        
        {/* Vintage glow ring */}
        <div 
          className={`
            absolute inset-0 border-2 border-luxury-gold/50 rounded-full
            transform transition-all duration-300 ease-out
            ${isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'}
          `}
        />
        
        {/* Content with enhanced typography */}
        <span className="relative z-10 font-bold text-shadow">
          {children}
        </span>
      </Button>
    </div>
  );
};

export default LiquidButton;
