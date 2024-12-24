import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About';
import { VideoShowcase } from './components/VideoShowcase/VideoShowcase';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Services } from './components/Services';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
// import { AdminButton } from './components/Admin/AdminButton';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="bg-black min-h-screen">
        <Header />
        <Hero />
        <About />
        <VideoShowcase />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
        <ScrollToTop />
        {/* <AdminButton /> */}
      </div>
    </AppProvider>
  );
}

export default App;