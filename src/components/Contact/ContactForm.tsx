import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import emailConfig from '../../config/email';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current
      );
      
      if (result.text === 'OK') {
        toast.success('Message envoyé avec succès!', {
          duration: 5000,
          style: {
            background: '#10B981',
            color: '#fff',
          },
        });
        setFormState({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer.', {
        duration: 5000,
        style: {
          background: '#EF4444',
          color: '#fff',
        },
      });
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <input
            type="text"
            name="user_name"
            placeholder="Votre nom"
            value={formState.name}
            onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg border border-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500
                     transition-all duration-300 placeholder-gray-500"
            required
          />
        </div>
        
        <div className="group">
          <input
            type="email"
            name="user_email"
            placeholder="Votre email"
            value={formState.email}
            onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg border border-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500
                     transition-all duration-300 placeholder-gray-500"
            required
          />
        </div>
        
        <div className="group">
          <textarea
            name="message"
            placeholder="Votre message"
            value={formState.message}
            onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
            rows={4}
            className="w-full px-4 py-3 bg-gray-800/50 text-white rounded-lg border border-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500
                     transition-all duration-300 placeholder-gray-500 resize-none"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-red-500 text-white py-3 rounded-lg
                   transition-all duration-300 flex items-center justify-center space-x-2
                   focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 
                   focus:ring-offset-gray-900
                   ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-red-600'}`}
        >
          <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer'}</span>
          <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
        </button>
      </form>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </>
  );
}