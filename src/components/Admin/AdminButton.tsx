import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { AdminPanel } from './AdminPanel';
import { motion } from 'framer-motion';

export function AdminButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  const ADMIN_PASSWORD = 'maxshorts2024'; // In a real app, this should be properly secured

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Mot de passe incorrect');
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-8 left-8 p-3 bg-gray-900/50 backdrop-blur-sm text-white rounded-full 
                 shadow-lg hover:bg-gray-800 transition-all duration-300 z-50
                 border border-gray-700 hover:border-red-500/30"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Settings className="w-5 h-5" />
      </motion.button>

      {isOpen && !isAuthenticated && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 p-8 rounded-lg max-w-md w-full mx-4"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Administration</h2>
            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 
                         focus:outline-none focus:border-red-500"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Connexion
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {isOpen && isAuthenticated && (
        <AdminPanel onClose={() => {
          setIsOpen(false);
          setIsAuthenticated(false);
        }} />
      )}
    </>
  );
}