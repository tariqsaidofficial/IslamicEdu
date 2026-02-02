
import React from 'react';

const SpiritualitySection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-5xl md:text-6xl font-medium serif leading-tight">
              Inside the <span className="italic">K-12 Zone</span>
            </h2>
            
            <p className="text-gray-500 leading-relaxed max-w-lg">
              Explore our interactive learning environment designed for students from Kindergarten through High School. From coding classes to Quranic studies, we prepare students for a bright future.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex flex-col items-center bg-[#fcf9f5] py-10 rounded-t-full shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 border border-[#c5a075]/20">
                  <span className="text-3xl">🎒</span>
                </div>
                <span className="font-bold text-gray-800 text-xs tracking-[0.2em] uppercase">Student Portal</span>
              </div>
              <div className="flex flex-col items-center bg-[#fcf9f5] py-10 rounded-t-full shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 border border-[#c5a075]/20">
                  <span className="text-3xl">🧪</span>
                </div>
                <span className="font-bold text-gray-800 text-xs tracking-[0.2em] uppercase">STEM Lab</span>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex flex-col items-center lg:items-end">
            <div className="flex gap-12 mb-12">
               <div className="text-center">
                  <div className="text-7xl font-medium serif text-[#1a1a1a]">1.2k</div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#c5a075]">Students</div>
               </div>
               <div className="text-center">
                  <div className="text-7xl font-medium serif text-[#1a1a1a]">45</div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#c5a075]">Mentors</div>
               </div>
            </div>

            <div className="relative flex items-center justify-end w-full">
              <div className="w-[85%] rounded-t-full overflow-hidden border-8 border-white shadow-2xl relative z-10 aspect-[1/1.2]">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Library" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -left-12 bottom-12 w-1/2 aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl z-20">
                <img 
                  src="https://images.unsplash.com/photo-1544391496-1ca7c97457cd?auto=format&fit=crop&q=80&w=800" 
                  alt="Classroom" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiritualitySection;
