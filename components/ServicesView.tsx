
import React from 'react';
import ServicesSection from './ServicesSection';

interface ServicesViewProps {
  onServiceSelect: (id: string) => void;
}

const ServicesView: React.FC<ServicesViewProps> = ({ onServiceSelect }) => {
  return (
    <div className="fade-in">
      <section className="relative h-[450px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1590076215667-875d4ef2d978?auto=format&fit=crop&q=80&w=2070" 
            alt="Services Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-3xl px-4">
          <span className="text-[#c5a075] uppercase tracking-[0.4em] font-bold text-xs mb-4 block">Metropol Al-Waha</span>
          <h1 className="text-white text-5xl md:text-7xl font-medium mb-6 serif tracking-wider leading-tight">
            Our <span className="italic text-[#c5a075]">Spiritual</span> Services
          </h1>
          <p className="text-white/90 text-lg font-light leading-relaxed">
            Providing pathways to worship and community connection through traditionally inspired and modernly delivered services.
          </p>
        </div>
      </section>

      <ServicesSection onServiceSelect={onServiceSelect} />

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl text-center">
          <h2 className="text-4xl serif mb-12">Commitment to the Ummah</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <h3 className="font-bold text-[#c5a075] tracking-widest uppercase text-xs">Accessible Everywhere</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our services are designed to be accessible to all members of the community, regardless of background or physical location.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#c5a075] tracking-widest uppercase text-xs">Traditional Excellence</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We combine deep-rooted Islamic traditions with modern service standards to ensure the highest quality experience for our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesView;
