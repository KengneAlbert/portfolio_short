import React from 'react';

export function VideoBackground() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=2070"
      >
        <source
          src="public/videos/video1.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]" />
      <div className="absolute inset-0">
        <div className="h-full w-full" style={{
          background: `
            linear-gradient(to right, rgba(255,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
    </>
  );
}