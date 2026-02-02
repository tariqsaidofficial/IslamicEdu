
import React, { useEffect, useState } from 'react';

const AboutSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 bg-[#fcf9f5] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex items-center justify-center h-[500px]">
            <div className="relative z-10 w-full flex items-end gap-4 h-full">
              <div 
                className="w-1/2 rounded-full overflow-hidden border-8 border-white shadow-xl aspect-[1/1.4] transition-transform duration-300 ease-out"
                style={{ transform: `translateY(${(scrollY - 1000) * -0.05}px)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" 
                  alt="Education" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div 
                className="w-1/2 rounded-full overflow-hidden border-8 border-white shadow-xl aspect-[1/1.2] transition-transform duration-300 ease-out"
                style={{ transform: `translateY(${(scrollY - 1000) * 0.08}px)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1574246604907-db69e30ddb97?auto=format&fit=crop&q=80&w=800" 
                  alt="Young learner" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div 
              className="absolute top-0 right-0 w-48 h-64 rounded-t-full border-4 border-[#c5a075]/20 z-0 transition-transform duration-500 ease-out"
              style={{ transform: `translateY(${(scrollY - 1000) * 0.1}px)` }}
            ></div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-medium serif leading-tight">
              A <span className="italic">Metropol</span> for Growing Minds
            </h2>
            
            <div className="flex flex-col items-start gap-4">
              <p className="text-[#c5a075] font-black uppercase tracking-[0.3em] text-[10px]">Our Educational Vision</p>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                IslamicEdu is modeled after the <strong>Al-Waha Metropol</strong> philosophy. We don't just teach subjects; we nurture the whole child. Our program integrates core academics with profound moral development.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full mt-4">
                <div className="border-l-2 border-[#c5a075] pl-4">
                  <h4 className="font-bold text-gray-800">Holistic Living</h4>
                  <p className="text-xs text-gray-500">Integrating faith with daily academic excellence.</p>
                </div>
                <div className="border-l-2 border-[#c5a075] pl-4">
                  <h4 className="font-bold text-gray-800">Sustainability</h4>
                  <p className="text-xs text-gray-500">Learning to be stewards of the earth (Khalifah).</p>
                </div>
              </div>
            </div>
            
            <button className="bg-[#dcc7ae] text-[#8d6e63] px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#c5a075] hover:text-white transition-all shadow-md">
              ADMISSIONS OPEN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
