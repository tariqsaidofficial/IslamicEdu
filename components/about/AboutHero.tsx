'use client';

import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative h-[550px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/mosque/mosque-main.jpg" 
          alt="GEMS Metropole School - Al Waha" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl px-4 mt-20">
        <span className="text-[#c5a075] uppercase tracking-[0.5em] font-black text-[10px] mb-6 block animate-in fade-in slide-in-from-bottom-4">Our Vision & Leadership</span>
        <h1 className="text-white text-5xl md:text-7xl font-medium mb-6 serif tracking-wider leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700">
          Islamic Education <br /> <span className="italic">Redefined</span>
        </h1>
        <p className="text-white/90 text-xs md:text-sm font-bold uppercase tracking-[0.3em] leading-relaxed max-w-2xl mx-auto border-t border-b border-white/20 py-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Bridging Faith and Academic Excellence
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default AboutHero;
