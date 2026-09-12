import React from 'react';
import './BackgroundVideo.css';

interface BackgroundVideoProps {
  src?: string;
  poster?: string;
  className?: string;
  overlayOpacity?: number;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  poster,
  className = '',
  overlayOpacity = 0.25,
}) => {
  return (
    <div className={`bg-video-container ${className}`}>
      {src ? (
        <video
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="bg-video-fallback" />
      )}
      <div
        className="bg-video-overlay"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};
