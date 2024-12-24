import React, { useState, useEffect, useRef } from 'react';
import { Save, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export function AboutManager() {
  const { about, updateAbout } = useApp();
  const [data, setData] = useState(about);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setData(about);
  }, [about]);

  const handleSave = () => {
    updateAbout(data);
    alert('Les modifications ont été appliquées avec succès!');
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData({
          ...data,
          image: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 space-y-8"
    >
      {/* Image Section */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Photo de profil</h3>
        <div className="flex items-center space-x-6">
          <img
            src={data.image}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <button
            onClick={triggerFileInput}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-600 transition-colors duration-200"
          >
            <Upload className="w-4 h-4" />
            <span>Changer l'image</span>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Statistiques</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Années d'expérience
            </label>
            <input
              type="text"
              value={data.stats.experience}
              onChange={(e) => setData({
                ...data,
                stats: { ...data.stats, experience: e.target.value }
              })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Vidéos produites
            </label>
            <input
              type="text"
              value={data.stats.videosProduced}
              onChange={(e) => setData({
                ...data,
                stats: { ...data.stats, videosProduced: e.target.value }
              })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Satisfaction client
            </label>
            <input
              type="text"
              value={data.stats.satisfaction}
              onChange={(e) => setData({
                ...data,
                stats: { ...data.stats, satisfaction: e.target.value }
              })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500"
            />
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-4">Description</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Paragraphe 1
            </label>
            <textarea
              value={data.description.primary}
              onChange={(e) => setData({
                ...data,
                description: { ...data.description, primary: e.target.value }
              })}
              rows={3}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Paragraphe 2
            </label>
            <textarea
              value={data.description.secondary}
              onChange={(e) => setData({
                ...data,
                description: { ...data.description, secondary: e.target.value }
              })}
              rows={3}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Paragraphe 3
            </label>
            <textarea
              value={data.description.tertiary}
              onChange={(e) => setData({
                ...data,
                description: { ...data.description, tertiary: e.target.value }
              })}
              rows={3}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-red-500 text-white rounded-lg flex items-center space-x-2 hover:bg-red-600"
        >
          <Save className="w-4 h-4" />
          <span>Enregistrer les modifications</span>
        </button>
      </div>
    </motion.div>
  );
}