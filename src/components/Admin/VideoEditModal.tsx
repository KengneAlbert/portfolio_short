import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Upload, Play, Pause } from 'lucide-react';

interface VideoEditModalProps {
  video: any;
  section: 'showcase' | 'portfolio';
  onClose: () => void;
  onSave: (video: any) => void;
}

export function VideoEditModal({ video, section, onClose, onSave }: VideoEditModalProps) {
  const [formData, setFormData] = useState(video);
  const [isPlaying, setIsPlaying] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.title?.trim()) errors.title = 'Le titre est requis';
    if (!formData.description?.trim()) errors.description = 'La description est requise';
    
    if (section === 'showcase') {
      if (!formData.platform?.trim()) errors.platform = 'La plateforme est requise';
      if (!formData.src?.trim()) errors.src = 'La vidéo est requise';
    } else {
      if (!formData.category?.trim()) errors.category = 'La catégorie est requise';
      if (!formData.videoUrl?.trim()) errors.videoUrl = 'La vidéo est requise';
      if (!formData.thumbnail?.trim()) errors.thumbnail = 'La miniature est requise';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFileUpload = (type: 'video' | 'thumbnail') => {
    const inputRef = type === 'video' ? videoInputRef : thumbnailInputRef;
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'video' | 'thumbnail') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      if (type === 'video') {
        setFormData({
          ...formData,
          [section === 'showcase' ? 'src' : 'videoUrl']: result
        });
        setFormErrors(prev => ({ ...prev, [section === 'showcase' ? 'src' : 'videoUrl']: '' }));
      } else {
        setFormData({ ...formData, thumbnail: result });
        setFormErrors(prev => ({ ...prev, thumbnail: '' }));
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">
            {video.id ? 'Modifier' : 'Ajouter'} une vidéo
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Preview Section */}
            <div>
              <div className="aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden mb-4">
                {section === 'portfolio' ? (
                  <img
                    src={formData.thumbnail || 'https://placehold.co/600x800?text=Miniature'}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative h-full">
                    <video
                      ref={videoRef}
                      src={formData.src || formData.videoUrl}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                    />
                    <button
                      onClick={togglePlay}
                      className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100"
                    >
                      {isPlaying ? (
                        <Pause className="w-12 h-12 text-white" />
                      ) : (
                        <Play className="w-12 h-12 text-white" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* File Upload Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => handleFileUpload('video')}
                  className={`w-full px-4 py-2 bg-gray-800 text-white rounded-lg border ${
                    formErrors.src || formErrors.videoUrl ? 'border-red-500' : 'border-gray-700'
                  } hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2`}
                >
                  <Upload className="w-4 h-4" />
                  <span>Sélectionner une vidéo</span>
                </button>

                {section === 'portfolio' && (
                  <button
                    type="button"
                    onClick={() => handleFileUpload('thumbnail')}
                    className={`w-full px-4 py-2 bg-gray-800 text-white rounded-lg border ${
                      formErrors.thumbnail ? 'border-red-500' : 'border-gray-700'
                    } hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2`}
                  >
                    <Upload className="w-4 h-4" />
                    <span>Sélectionner une miniature</span>
                  </button>
                )}
              </div>

              {/* Hidden File Inputs */}
              <input
                ref={videoInputRef}
                type="file"
                accept="video/*"
                onChange={(e) => handleFileChange(e, 'video')}
                className="hidden"
              />
              <input
                ref={thumbnailInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'thumbnail')}
                className="hidden"
              />
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Titre *
                </label>
                <input
                  type="text"
                  value={formData.title || ''}
                  onChange={(e) => {
                    setFormData({ ...formData, title: e.target.value });
                    setFormErrors(prev => ({ ...prev, title: '' }));
                  }}
                  placeholder="Entrez le titre de la vidéo"
                  className={`w-full px-4 py-2 bg-gray-800 text-white rounded-lg border ${
                    formErrors.title ? 'border-red-500' : 'border-gray-700'
                  } focus:border-red-500`}
                />
                {formErrors.title && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  {section === 'showcase' ? 'Plateforme *' : 'Catégorie *'}
                </label>
                <select
                  value={section === 'showcase' ? formData.platform : formData.category}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [section === 'showcase' ? 'platform' : 'category']: e.target.value
                    });
                    setFormErrors(prev => ({
                      ...prev,
                      [section === 'showcase' ? 'platform' : 'category']: ''
                    }));
                  }}
                  className={`w-full px-4 py-2 bg-gray-800 text-white rounded-lg border ${
                    formErrors.platform || formErrors.category ? 'border-red-500' : 'border-gray-700'
                  } focus:border-red-500`}
                >
                  <option value="">Sélectionner</option>
                  <option value="TikTok">TikTok</option>
                  <option value="YouTube Shorts">YouTube Shorts</option>
                  <option value="Instagram Reels">Instagram Reels</option>
                  <option value="Facebook Reels">Facebook Reels</option>
                </select>
                {(formErrors.platform || formErrors.category) && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.platform || formErrors.category}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Description *
                </label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                    setFormErrors(prev => ({ ...prev, description: '' }));
                  }}
                  placeholder="Décrivez votre vidéo"
                  rows={3}
                  className={`w-full px-4 py-2 bg-gray-800 text-white rounded-lg border ${
                    formErrors.description ? 'border-red-500' : 'border-gray-700'
                  } focus:border-red-500`}
                />
                {formErrors.description && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Tags (séparés par des virgules)
                </label>
                <input
                  type="text"
                  value={formData.tags?.join(', ') || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    tags: e.target.value.split(',').map((tag: string) => tag.trim())
                  })}
                  placeholder="ex: #viral, #trending, #dance"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Vues
                  </label>
                  <input
                    type="text"
                    value={formData.views || ''}
                    onChange={(e) => setFormData({ ...formData, views: e.target.value })}
                    placeholder="ex: 45.8K"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Likes
                  </label>
                  <input
                    type="text"
                    value={formData.likes || ''}
                    onChange={(e) => setFormData({ ...formData, likes: e.target.value })}
                    placeholder="ex: 23.5K"
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-red-500"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            {video.id ? 'Mettre à jour' : 'Ajouter'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}