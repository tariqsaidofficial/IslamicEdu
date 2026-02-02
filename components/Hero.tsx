
import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2070" 
          alt="Grand Mosque" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl px-4">
        <h1 className="text-white text-6xl md:text-9xl font-bold mb-8 leading-tight serif uppercase">
          Grand <br /> Mosque <br /> <span className="text-[#c5a075] italic lowercase">Islamic</span> <br /> Center
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group">
            <Play size={24} fill="currentColor" className="ml-1" />
          </button>
          <button className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#c5a075] hover:text-white transition-all transform hover:scale-105">
            Take Action
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
