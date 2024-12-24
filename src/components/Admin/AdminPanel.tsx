import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { VideoManager } from './VideoManager';
import { AboutManager } from './AboutManager';
import { ContactManager } from './ContactManager';
import { TabSelector } from './TabSelector';

interface AdminPanelProps {
  onClose: () => void;
}

type TabType = 'videos' | 'about' | 'contact';

export function AdminPanel({ onClose }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>('videos');

  const tabs = [
    { id: 'videos', label: 'Vidéos' },
    { id: 'about', label: 'À Propos' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-900 rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col"
      >
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Administration</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <TabSelector
          tabs={tabs}
          activeTab={activeTab}
          onChange={(tab) => setActiveTab(tab as TabType)}
        />

        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'videos' && <VideoManager key="videos" />}
            {activeTab === 'about' && <AboutManager key="about" />}
            {activeTab === 'contact' && <ContactManager key="contact" />}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}