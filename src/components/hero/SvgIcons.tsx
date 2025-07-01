
import React from 'react';

const SvgIcons = () => {
  return (
    <svg style={{ display: 'none' }} focusable="false" role="presentation">
      <defs>
        <symbol id="icon-play" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" fill="currentColor" />
        </symbol>
        <symbol id="icon-pause" viewBox="0 0 24 24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor" />
        </symbol>
        <symbol id="crosshatch" viewBox="0 0 100 100">
          <defs>
            <pattern id="crosshatch-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M0,0 L10,10 M0,10 L10,0" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crosshatch-pattern)" opacity="0.4"/>
        </symbol>
      </defs>
    </svg>
  );
};

export default SvgIcons;
