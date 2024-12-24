import React from 'react';
import { Play } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    thumbnail: string;
    category: string;
    videoUrl: string;
    description: string;
  };
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-video">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-500 p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-gray-300 text-sm">{project.category}</span>
            <span className="text-red-500 text-sm">Voir la vidéo</span>
          </div>
        </div>
      </div>
    </div>
  );
}