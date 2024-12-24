import React from 'react';
import { VideoCard } from './VideoCard';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export function VideoShowcase() {
  const { videos } = useApp();

  return (
    <section id="video-showcase" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 0, 0, 0.1) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Mes Meilleures Créations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez une sélection de mes vidéos les plus virales et engageantes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.showcase.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <VideoCard
                src={video.src}
                title={video.title}
                views={video.views}
                platform={video.platform}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 
                     transition-all duration-300 transform hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            Voir plus de créations
          </button>
        </motion.div>
      </div>
    </section>
  );
}