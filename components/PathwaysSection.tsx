
import React from 'react';

const pathways = [
  {
    title: "Primary: Seeds of Wisdom (K-5)",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Middle School: Exploring Heritage (6-8)",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "High School: Future Leaders (9-12)",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
  }
];

const PathwaysSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#fcf9f5]">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <span className="uppercase text-xs tracking-[0.3em] text-[#c5a075] font-bold mb-4 block">K-12 EDUCATION</span>
        <h2 className="text-5xl md:text-6xl font-medium serif mb-6">
          Junior <span className="italic">Learning Tracks</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
          Inspired by the Al-Waha Metropol curriculum, our tracks ensure that every student grows intellectually and spiritually at their own pace.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pathways.map((path, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-t-full rounded-b-xl h-[600px] shadow-xl border-8 border-white">
              <img 
                src={path.image} 
                alt={path.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-10 text-center">
                <h3 className="text-3xl font-bold text-white serif leading-tight px-4">
                  {path.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center items-center">
           <div className="w-full border-t border-dashed border-[#c5a075]/30 flex justify-center">
              <span className="bg-[#fcf9f5] px-4 -mt-3 text-[#c5a075] text-xs font-bold tracking-widest">KNOWLEDGE IS LIGHT</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
