import React from 'react';
import { Video, Scissors, Share2 } from 'lucide-react';

const services = [
  {
    icon: <Video className="w-8 h-8 text-red-500" />,
    title: "Montage Vidéo",
    description: "Montage professionnel optimisé pour les formats courts avec transitions dynamiques et effets visuels captivants."
  },
  {
    icon: <Scissors className="w-8 h-8 text-red-500" />,
    title: "Édition Créative",
    description: "Adaptation de vos contenus longs en formats courts percutants pour maximiser l'engagement."
  },
  {
    icon: <Share2 className="w-8 h-8 text-red-500" />,
    title: "Optimisation Multi-Plateforme",
    description: "Adaptation de vos vidéos pour TikTok, Instagram Reels et YouTube Shorts avec les meilleurs ratios et formats."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Mes Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:transform hover:-translate-y-2 transition duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}