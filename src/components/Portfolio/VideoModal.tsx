import React from 'react';
import { X, Heart, MessageCircle, Share2, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    title: string;
    videoUrl: string;
    description: string;
    platform: string;
  } | null;
}

export function VideoModal({ isOpen, onClose, video }: VideoModalProps) {
  if (!isOpen || !video) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        
        <motion.div 
          className="relative z-10 bg-gray-900 rounded-2xl max-w-4xl w-full h-[90vh] flex flex-col md:flex-row overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          {/* Video Section */}
          <div className="flex-1 bg-black flex items-center justify-center">
            <div className="relative w-full max-w-[400px] mx-auto">
              <video
                className="w-full aspect-[9/16] object-contain"
                controls
                autoPlay
                src={video.videoUrl}
                loop
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-96 p-6 flex flex-col bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <motion.span 
                className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm"
                whileHover={{ scale: 1.05 }}
              >
                {video.platform}
              </motion.span>
              <button 
                onClick={onClose}
                className="text-white/80 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">{video.title}</h3>
            <p className="text-gray-400 mb-6">{video.description}</p>

            {/* Engagement Metrics */}
            <div className="flex items-center justify-around mb-6 py-4 border-y border-gray-800">
              <motion.button 
                className="flex flex-col items-center text-gray-400 hover:text-red-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-6 h-6 mb-1" />
                <span className="text-sm">23.5K</span>
              </motion.button>
              <motion.button 
                className="flex flex-col items-center text-gray-400 hover:text-red-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-6 h-6 mb-1" />
                <span className="text-sm">1.2K</span>
              </motion.button>
              <motion.button 
                className="flex flex-col items-center text-gray-400 hover:text-red-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-6 h-6 mb-1" />
                <span className="text-sm">Share</span>
              </motion.button>
              <div className="flex flex-col items-center text-gray-400">
                <Eye className="w-6 h-6 mb-1" />
                <span className="text-sm">45.8K</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['#shortform', '#viral', '#trending'].map((tag) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Call to Action */}
            <motion.button
              className="mt-auto w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://www.instagram.com/albert_g_kengne/', '_blank')}
            >
              Suivre sur {video.platform}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}