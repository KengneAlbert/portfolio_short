import React from 'react';
import { Menu, Video, Instagram, Youtube } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Video className="w-8 h-8 text-red-500" />
            <span className="text-white font-bold text-xl">MaxShorts</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition">Accueil</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">À Propos</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition">Portfolio</a>
            <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/albert_g_kengne/profilecard/?igsh=cWZ1cGhrY3RubDkx " target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-gray-300 hover:text-white transition" />
            </a>
            <a href="youtube.com/channel/UCnLesk2bBBnTy_62va5cxpw?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6 text-gray-300 hover:text-white transition" />
            </a>
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}