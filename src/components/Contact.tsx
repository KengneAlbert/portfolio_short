import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Contactez-moi</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-red-500" />
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400">albertkengne2000@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-red-500" />
              <div>
                <h3 className="text-white font-semibold">Téléphone</h3>
                <p className="text-gray-400">+237 6 59 07 08 72</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-red-500" />
              <div>
                <h3 className="text-white font-semibold">Localisation</h3>
                <p className="text-gray-400">Bayangam, Cameroun</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Votre message"
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}