import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, AlertCircle, Eye } from 'lucide-react';

interface VideoCardProps {
  src: string;
  title: string;
  views: string;
  platform: string;
}

export function VideoCard({ src, title, views, platform }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    if (videoRef.current && !hasError && src) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => setHasError(true));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (!src) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !hasError) {
            videoRef.current.play()
              .catch(() => setHasError(true));
            setIsPlaying(true);
          } else if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [hasError, src]);

  if (!src) {
    return (
      <div className="relative group rounded-xl overflow-hidden bg-gray-900 transform hover:scale-[1.02] transition-all duration-300 aspect-[9/16]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-4">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-2" />
            <p className="text-gray-400">{title}</p>
            <p className="text-sm text-gray-500 mt-2">{platform}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative group rounded-xl overflow-hidden bg-gray-900 transform hover:scale-[1.02] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {hasError ? (
        <div className="w-full aspect-[9/16] bg-gray-800 flex items-center justify-center">
          <div className="text-center p-4">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-2" />
            <p className="text-gray-400">Impossible de charger la vidéo</p>
          </div>
        </div>
      ) : (
        <div className="relative">
          <video
            ref={videoRef}
            src={src}
            loop
            muted
            playsInline
            onError={() => setHasError(true)}
            className="w-full aspect-[9/16] object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-red-500" />
                  <span className="text-gray-300 text-sm">{views}</span>
                </div>
                <span className="text-gray-300 text-sm bg-white/10 px-3 py-1 rounded-full">
                  {platform}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {!hasError && src && (
        <button
          onClick={togglePlay}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     bg-red-500 p-4 rounded-full transition-all duration-300
                     hover:bg-red-600 hover:scale-110 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
      )}
    </div>
  );
}