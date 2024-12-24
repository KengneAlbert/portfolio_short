import React from 'react';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        src="https://player.vimeo.com/external/494252666.sd.mp4?s=684d2d28f4d2dca5cab6635437e00b966d5b5b23&profile_id=164&oauth2_token_id=57447761"
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Créateur de Contenu <span className="text-red-500">Court Format</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Spécialiste du montage vidéo pour vos contenus courts : TikTok, Instagram Reels, YouTube Shorts
        </p>
        <button className="bg-red-500 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 mx-auto hover:bg-red-600 transition">
          <Play className="w-5 h-5" />
          <span>Voir mes créations</span>
        </button>
      </div>
    </section>
  );
}