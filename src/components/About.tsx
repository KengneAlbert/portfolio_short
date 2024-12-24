import React from 'react';
import { Award, Clock, Sparkles, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';
import { ScaleIn } from './animations/ScaleIn';
import { useApp } from '../context/AppContext';

export function About() {
  const { about } = useApp();

  const stats = [
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      value: about.stats.experience,
      label: "Années d'expérience"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-red-500" />,
      value: about.stats.videosProduced,
      label: "Vidéos produites"
    },
    {
      icon: <Award className="w-6 h-6 text-red-500" />,
      value: about.stats.satisfaction,
      label: "Clients satisfaits"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">À Propos de Moi</h2>
            <div className="mt-4 h-1 w-20 bg-red-500 mx-auto rounded-full"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeIn direction="right" delay={0.2} className="lg:col-span-5 relative">
            <motion.div 
              className="relative aspect-[4/5]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={about.image}
                alt="Portrait professionnel"
                className="rounded-lg shadow-xl w-full h-full object-cover"
                loading="lazy"
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-black p-4 rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play className="w-8 h-8 text-red-500" />
              </motion.div>
            </motion.div>
            <div className="absolute -z-10 top-4 left-4 w-full h-full bg-red-500/20 rounded-lg"></div>
          </FadeIn>

          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={0.4}>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">{about.description.primary}</p>
                <p className="text-lg">{about.description.secondary}</p>
                <p className="text-lg">{about.description.tertiary}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                  {stats.map((stat, index) => (
                    <ScaleIn key={index} delay={0.2 * (index + 1)}>
                      <motion.div
                        className="bg-black p-6 rounded-lg text-center"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="flex justify-center mb-4"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {stat.icon}
                        </motion.div>
                        <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                        <div className="text-gray-400">{stat.label}</div>
                      </motion.div>
                    </ScaleIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}