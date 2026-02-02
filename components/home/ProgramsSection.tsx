'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: "Learn Hadith for Teacher & Kids",
    image: "/images/general/education-1.jpg"
  },
  {
    title: "Tafsir Al-Quran Library",
    image: "/images/prayer/prayer-guide.png"
  },
  {
    title: "Rebuild the Mosque Green Dome",
    image: "/images/mosque/mosque-main.jpg"
  }
];

const ProgramsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-medium serif leading-tight">
            Recent <span className="italic text-[#c5a075]">Programs</span>
          </h2>
          <div className="max-w-md">
            <p className="text-gray-500 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-800 hover:text-[#c5a075]">
              View All <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-t-[100px] rounded-b-xl h-[500px]">
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 serif leading-tight max-w-[200px]">{program.title}</h3>
                <div className="w-12 h-1 bg-[#c5a075] mb-6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
