
import React from 'react';

const BackgroundPattern = () => {
  return (
    <svg 
      focusable="false" 
      role="presentation" 
      className="svg-crosshatch absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    >
      <use xlinkHref="#crosshatch" />
    </svg>
  );
};

export default BackgroundPattern;
