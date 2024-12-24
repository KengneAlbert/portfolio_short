import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(220,38,38,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Contactez-moi</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
            Je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800
                        shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:border-red-500/20 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-white mb-6">Envoyez-moi un message</h3>
            <ContactForm />
          </div>

          <div className="lg:pl-12">
            <h3 className="text-xl font-semibold text-white mb-6">Informations de contact</h3>
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}