
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LiquidButton = ({ children, onClick, className = '', size = 'lg' }: LiquidButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'text-sm px-6 py-3',
    md: 'text-base px-8 py-4',
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
          relative overflow-hidden font-semibold uppercase tracking-wide
          bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-brown
          transition-all duration-500 transform hover:scale-105
          shadow-lg hover:shadow-2xl rounded-full
          ${sizeClasses[size]} ${className}
        `}
      >
        {/* Liquid effect background */}
        <div 
          className={`
            absolute inset-0 bg-gradient-to-r from-luxury-gold-light via-luxury-gold to-luxury-gold-dark
            transform transition-transform duration-700 ease-out
            ${isHovered ? 'scale-150 rotate-12' : 'scale-0 rotate-0'}
          `}
          style={{ 
            borderRadius: '50%',
            transformOrigin: 'center',
          }}
        />
        
        {/* Ripple effect */}
        <div 
          className={`
            absolute inset-0 bg-white/20 rounded-full
            transform transition-all duration-500 ease-out
            ${isHovered ? 'scale-110 opacity-0' : 'scale-0 opacity-100'}
          `}
        />
        
        {/* Content */}
        <span className="relative z-10 font-bold">
          {children}
        </span>
      </Button>
    </div>
  );
};

export default LiquidButton;
