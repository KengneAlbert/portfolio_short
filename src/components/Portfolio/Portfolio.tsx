import React, { useState, useMemo } from 'react';
import { ProjectCard } from './ProjectCard';
import { VideoModal } from './VideoModal';
import { CategoryFilter } from './CategoryFilter';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export function Portfolio() {
  const { videos } = useApp();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = useMemo(() => 
    Array.from(new Set(videos.portfolio.map(project => project.category))),
    [videos.portfolio]
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return videos.portfolio;
    }
    return videos.portfolio.filter(video => video.category === activeCategory);
  }, [activeCategory, videos.portfolio]);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Mes Réalisations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez une sélection de mes meilleures créations vidéo à travers différentes plateformes.
          </p>
        </motion.div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                onClick={() => setSelectedVideo(project)}
              />
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">Aucun projet trouvé dans cette catégorie.</p>
          </div>
        )}
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        video={selectedVideo}
      />
    </section>
  );
}