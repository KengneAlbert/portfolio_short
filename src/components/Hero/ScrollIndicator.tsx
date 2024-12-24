import React from 'react';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToAbout}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group"
      aria-label="Scroll to content"
    >
      <ChevronDown className="w-8 h-8 text-white/60 group-hover:text-red-500 transition-colors duration-300" />
    </button>
  );
}