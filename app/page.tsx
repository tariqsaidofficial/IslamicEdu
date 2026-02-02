'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeView from '@/components/home/HomeView';
import AboutView from '@/components/about/AboutView';
import ServicesView from '@/components/services/ServicesView';
import ServiceDetailView from '@/components/services/ServiceDetailView';
import PrivacyPolicyView from '@/components/legal/PrivacyPolicyView';
import TermsOfServiceView from '@/components/legal/TermsOfServiceView';
import ZenChatbot from '@/components/chatbot/ZenChatbot';

type PageType = 'home' | 'about' | 'services' | 'service-detail' | 'privacy' | 'terms';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView
            onServiceSelect={(id) => {
              setSelectedServiceId(id);
              setCurrentPage('service-detail');
            }}
          />
        );
      case 'about':
        return <AboutView />;
      case 'services':
        return (
          <ServicesView
            onServiceSelect={(id) => {
              setSelectedServiceId(id);
              setCurrentPage('service-detail');
            }}
          />
        );
      case 'service-detail':
        return (
          <ServiceDetailView
            serviceId={selectedServiceId}
            onBack={() => setCurrentPage('services')}
          />
        );
      case 'privacy':
        return <PrivacyPolicyView />;
      case 'terms':
        return <TermsOfServiceView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-[#c5a075] selection:text-white">
      <Header 
        isScrolled={isScrolled} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      
      <main>
        {renderContent()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      
      <ZenChatbot />
    </div>
  );
}
