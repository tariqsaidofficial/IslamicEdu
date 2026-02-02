
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import ServiceDetailView from './components/ServiceDetailView';
import Footer from './components/Footer';
import ZenChatbot from './components/ZenChatbot';

export type PageType = 'home' | 'about' | 'services' | 'service-detail';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedServiceId]);

  const navigateToService = (id: string) => {
    setSelectedServiceId(id);
    setCurrentPage('service-detail');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView onServiceSelect={navigateToService} />;
      case 'about':
        return <AboutView />;
      case 'services':
        return <ServicesView onServiceSelect={navigateToService} />;
      case 'service-detail':
        return selectedServiceId ? (
          <ServiceDetailView 
            id={selectedServiceId} 
            onBack={() => setCurrentPage('services')} 
          />
        ) : <ServicesView onServiceSelect={navigateToService} />;
      default:
        return <HomeView onServiceSelect={navigateToService} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-[#c5a075] selection:text-white">
      <Header 
        isScrolled={isScrolled} 
        currentPage={currentPage} 
        setCurrentPage={(page) => {
          setCurrentPage(page as PageType);
          if (page !== 'service-detail') setSelectedServiceId(null);
        }} 
      />
      
      <main>
        {renderContent()}
      </main>

      <Footer />
      
      <ZenChatbot />
    </div>
  );
};

export default App;
