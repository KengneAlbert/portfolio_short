import React, { useState } from 'react';
import { Save, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export function ContactManager() {
  const { contact, updateContact } = useApp();
  const [data, setData] = useState(contact);

  const handleSave = () => {
    updateContact(data);
    alert('Les modifications ont été appliquées avec succès!');
  };

  const toggleSocialMedia = (platform: keyof typeof data.socialMedia) => {
    setData({
      ...data,
      socialMedia: {
        ...data.socialMedia,
        [platform]: {
          ...data.socialMedia[platform],
          enabled: !data.socialMedia[platform].enabled
        }
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 space-y-8"
    >
      {/* Contact Information */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-6">Informations de contact</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Localisation
            </label>
            <input
              type="text"
              value={data.location}
              onChange={(e) => setData({ ...data, location: e.target.value })}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500"
            />
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-6">Réseaux sociaux</h3>
        <div className="space-y-6">
          {Object.entries(data.socialMedia).map(([platform, info]) => (
            <div key={platform} className="flex items-start space-x-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-400 capitalize">
                    {platform}
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={info.enabled}
                      onChange={() => toggleSocialMedia(platform as keyof typeof data.socialMedia)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer 
                                  peer-checked:after:translate-x-full peer-checked:after:border-white 
                                  after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                                  after:bg-white after:rounded-full after:h-5 after:w-5 
                                  after:transition-all peer-checked:bg-red-500">
                    </div>
                  </label>
                </div>
                <div className="relative">
                  <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="url"
                    value={info.url}
                    onChange={(e) => setData({
                      ...data,
                      socialMedia: {
                        ...data.socialMedia,
                        [platform]: {
                          ...info,
                          url: e.target.value
                        }
                      }
                    })}
                    placeholder={`URL ${platform}`}
                    className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-red-500"
                  />
                </div>
              </div>
            </div>
          ))}
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