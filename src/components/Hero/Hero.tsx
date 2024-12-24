import React from 'react';
import { Play, Sparkles } from 'lucide-react';
import { VideoBackground } from './VideoBackground';
import { ScrollIndicator } from './ScrollIndicator';
import { StatsBadge } from './StatsBadge';
import { motion } from 'framer-motion';
import { FadeIn } from '../animations/FadeIn';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <VideoBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeIn delay={0.2}>
            <motion.div 
              className="inline-flex items-center bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10 shadow-[0_0_15px_rgba(255,0,0,0.1)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4 text-red-500 mr-2 animate-pulse" />
              <span className="text-gray-200">Créateur de contenu viral</span>
            </motion.div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Donnez vie à vos
              <motion.span
                className="relative text-red-500 ml-4 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Shorts
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-3 bg-red-500/20 -rotate-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </motion.span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Expert en montage vidéo pour TikTok, Instagram Reels et YouTube Shorts.
              Transformez vos idées en contenus viraux qui captivent votre audience.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button 
                onClick={() => scrollToSection('video-showcase')}
                className="group bg-red-500 text-white px-8 py-4 rounded-full font-medium flex items-center space-x-3 hover:bg-red-600 transition-all transform hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                <span>Voir mes shorts</span>
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-full font-medium text-white border border-white/10 hover:bg-white/5 transition-all hover:border-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Demander un devis
              </motion.button>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <StatsBadge />
      <ScrollIndicator />
    </section>
  );
}