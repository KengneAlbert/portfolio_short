import React from 'react';
import { Video, Instagram, Youtube, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Video className="w-8 h-8 text-red-500" />
            <span className="font-bold text-xl">MaxShorts</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/albert_g_kengne/profilecard/?igsh=cWZ1cGhrY3RubDkx " target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-red-500 transition" />
            </a>
            <a href="youtube.com/channel/UCnLesk2bBBnTy_62va5cxpw?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6 hover:text-red-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-red-500 transition" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MaxShorts. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}