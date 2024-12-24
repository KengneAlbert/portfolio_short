import React, { createContext, useContext, useState, useEffect } from 'react';
import aboutData from '../content/about.json';
import videosData from '../content/videos.json';
import contactData from '../content/contact.json';

interface AppContextType {
  about: typeof aboutData;
  videos: typeof videosData;
  contact: typeof contactData;
  updateAbout: (data: typeof aboutData) => void;
  updateVideos: (data: typeof videosData) => void;
  updateContact: (data: typeof contactData) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  ABOUT: 'maxshorts_about',
  VIDEOS: 'maxshorts_videos',
  CONTACT: 'maxshorts_contact'
};

function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return defaultValue;
  }
}

function saveToStorage<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [about, setAbout] = useState(() => loadFromStorage(STORAGE_KEYS.ABOUT, aboutData));
  const [videos, setVideos] = useState(() => loadFromStorage(STORAGE_KEYS.VIDEOS, videosData));
  const [contact, setContact] = useState(() => loadFromStorage(STORAGE_KEYS.CONTACT, contactData));

  // Save to localStorage whenever data changes
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.ABOUT, about);
  }, [about]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.VIDEOS, videos);
  }, [videos]);

  useEffect(() => {
    saveToStorage(STORAGE_KEYS.CONTACT, contact);
  }, [contact]);

  const updateAbout = (data: typeof aboutData) => {
    setAbout(data);
  };

  const updateVideos = (data: typeof videosData) => {
    setVideos(data);
  };

  const updateContact = (data: typeof contactData) => {
    setContact(data);
  };

  return (
    <AppContext.Provider value={{ 
      about, 
      videos, 
      contact,
      updateAbout, 
      updateVideos,
      updateContact
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}