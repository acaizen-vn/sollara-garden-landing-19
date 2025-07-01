
import React from 'react';

interface VideoControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  className?: string;
}

const VideoControls = ({ isPlaying, onTogglePlay, className = '' }: VideoControlsProps) => {
  return (
    <button 
      className={`video-btn ${className}`}
      onClick={onTogglePlay}
      aria-label={isPlaying ? "Pause video" : "Play video"}
    >
      <svg focusable="false" role="presentation" className="svg-pausePlay">
        <use xlinkHref={isPlaying ? "#icon-pause" : "#icon-play"} />
      </svg>
    </button>
  );
};

export default VideoControls;
