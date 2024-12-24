import React from 'react';
import { Trophy } from 'lucide-react';

export function StatsBadge() {
  return (
    <div className="absolute top-1/2 right-8 transform translate-y-1/2 hidden lg:block">
      <div className="bg-black/40 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:border-red-500/50 transition-colors duration-300 group hover:shadow-[0_0_30px_rgba(255,0,0,0.1)]">
        <Trophy className="w-6 h-6 text-red-500 mb-2 group-hover:scale-110 transition-transform" />
        <div className="text-white font-bold">1M+</div>
        <div className="text-gray-400 text-sm">Vues</div>
      </div>
    </div>
  );
}