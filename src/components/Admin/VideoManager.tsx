import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Save } from 'lucide-react';
import { motion } from 'framer-motion';
import { VideoEditModal } from './VideoEditModal';
import { useApp } from '../../context/AppContext';

export function VideoManager() {
  const { videos, updateVideos } = useApp();
  const [activeSection, setActiveSection] = useState<'showcase' | 'portfolio'>('showcase');
  const [editingVideo, setEditingVideo] = useState<any>(null);

  const handleSave = (newVideo: any) => {
    const updatedVideos = { ...videos };
    
    if (newVideo.id) {
      // Update existing video
      updatedVideos[activeSection] = videos[activeSection].map((video: any) =>
        video.id === newVideo.id ? newVideo : video
      );
    } else {
      // Add new video
      const newId = `video_${Date.now()}`;
      updatedVideos[activeSection] = [
        ...videos[activeSection],
        { ...newVideo, id: newId }
      ];
    }

    updateVideos(updatedVideos);
    setEditingVideo(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette vidéo ?')) {
      const updatedVideos = { ...videos };
      updatedVideos[activeSection] = videos[activeSection].filter(
        (video: any) => video.id !== id
      );
      updateVideos(updatedVideos);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6"
    >
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeSection === 'showcase'
              ? 'bg-red-500 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => setActiveSection('showcase')}
        >
          Showcase
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeSection === 'portfolio'
              ? 'bg-red-500 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => setActiveSection('portfolio')}
        >
          Portfolio
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos[activeSection].map((video: any) => (
          <motion.div
            key={video.id}
            layout
            className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-white font-semibold">{video.title}</h3>
                <span className="text-sm text-red-500">
                  {video.platform || video.category}
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setEditingVideo(video)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(video.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-2">{video.description}</p>
            
            {activeSection === 'showcase' && (
              <div className="text-sm text-gray-500">
                {video.views} vues
              </div>
            )}
            
            {video.tags && (
              <div className="flex flex-wrap gap-2 mt-3">
                {video.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-6">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg flex items-center space-x-2 hover:bg-red-600 transition-colors"
          onClick={() => setEditingVideo({})}
        >
          <Plus className="w-4 h-4" />
          <span>Ajouter une vidéo</span>
        </button>
      </div>

      {editingVideo !== null && (
        <VideoEditModal
          video={editingVideo}
          section={activeSection}
          onClose={() => setEditingVideo(null)}
          onSave={handleSave}
        />
      )}
    </motion.div>
  );
}