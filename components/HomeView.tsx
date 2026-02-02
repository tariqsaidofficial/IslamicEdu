
import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import ServicesSection from './ServicesSection.tsx';
import ProgramsSection from './ProgramsSection.tsx';
import InsightsSection from './InsightsSection.tsx';
import FactsSection from './FactsSection.tsx';

const carouselImages = [
  "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1590076215667-875d4ef2d978?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1564121211835-e88c852648ab?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&q=80&w=2070"
];

interface HomeViewProps {
  onServiceSelect: (id: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onServiceSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <div className="fade-in">
      {/* Hero Section Carousel */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {carouselImages.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={img} 
              alt={`Slide ${idx + 1}`} 
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
        
        <div className="relative z-10 max-w-5xl px-4 mt-20">
          <h1 className="text-white text-6xl md:text-9xl font-medium mb-12 leading-[1.1] serif uppercase tracking-wider">
            Grand <br /> Mosque <br /> <span className="text-[#c5a075] italic lowercase">Islamic</span> <br /> Center
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all group">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                 <Play size={14} fill="currentColor" />
              </div>
              Take Action
            </button>
          </div>
        </div>

        <button onClick={prevSlide} className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2 rounded-full border border-white/20">
          <ChevronLeft size={32} />
        </button>
        <button onClick={nextSlide} className="absolute right-8 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2 rounded-full border border-white/20">
          <ChevronRight size={32} />
        </button>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {carouselImages.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-[#c5a075] w-8' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </section>

      {/* Blossoming Section */}
      <section className="py-24 bg-[#fcf9f5]">
        <div className="container mx-auto px-4 md:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative flex items-center justify-center">
              <div className="relative z-10 w-full flex items-end gap-4">
                <div className="w-1/2 rounded-full overflow-hidden border-8 border-white shadow-xl aspect-[1/1.4]">
                  <img src="https://images.unsplash.com/photo-1590076215667-875d4ef2d978?auto=format&fit=crop&q=80&w=800" alt="Islamic Art" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 rounded-full overflow-hidden border-8 border-white shadow-xl aspect-[1/1.2] -translate-y-12">
                  <img src="https://images.unsplash.com/photo-1564683214965-3619addd900d?auto=format&fit=crop&q=80&w=800" alt="Prayer" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-64 rounded-t-full border-4 border-[#c5a075]/20 z-0"></div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-medium serif leading-tight">
                <span className="italic">Blossoming</span> in the Garden of Islamic Knowledge
              </h2>
              <div className="text-3xl serif text-[#c5a075]">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
              <p className="text-gray-500 leading-relaxed text-sm">
                Islamic Metropol Al-Waha serves as a central oasis for spiritual and academic growth. Our mission is to integrate holistic Islamic living with modern excellence, fostering a community that thrives on knowledge and faith.
              </p>
              <button className="bg-[#dcc7ae] text-[#8d6e63] px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#c5a075] hover:text-white transition-all shadow-md">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <FactsSection />

      <ServicesSection onServiceSelect={onServiceSelect} />

      <ProgramsSection />

      <section className="relative h-[650px] flex items-center justify-center text-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2070" 
          alt="Mosque at Night" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 serif">Upcoming Events at Muslim <br /><span className="italic">Community</span> Center</h2>
          <button className="bg-[#c5a075] hover:bg-[#b38f66] text-white px-10 py-3 rounded-full mb-16 text-[10px] font-bold tracking-widest transition-all transform hover:scale-105">
            SUBSCRIBE
          </button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "564", label: "Days" },
              { val: "00", label: "Hours" },
              { val: "34", label: "Minutes" },
              { val: "16", label: "Seconds" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-6xl md:text-8xl font-medium serif">{stat.val}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 mt-4">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsightsSection />
    </div>
  );
};

export default HomeView;
