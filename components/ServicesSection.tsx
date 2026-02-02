
import React from 'react';

const services = [
  { id: "mosque", name: "Mosque", icon: "🕌" },
  { id: "hajj-umrah", name: "Hajj & Umrah", icon: "🕋" },
  { id: "ramadan", name: "Ramadan", icon: "🏮" },
  { id: "tafsir-quran", name: "Tafsir Quran", icon: "📖" },
  { id: "travel", name: "Travel", icon: "🐫" },
  { id: "prayer", name: "Prayer", icon: "🧎" },
  { id: "events", name: "Events", icon: "🥁" },
  { id: "zakat-sadaqah", name: "Zakat Sadaqah", icon: "💰" }
];

interface ServicesSectionProps {
  onServiceSelect?: (id: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceSelect }) => {
  return (
    <section className="py-24 bg-[#fcf9f5]">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-6xl">
        <span className="uppercase text-[10px] tracking-[0.4em] text-[#c5a075] font-bold mb-4 block">SERVICES</span>
        <h2 className="text-5xl md:text-6xl font-medium serif mb-8">
          Pathways to <span className="italic">Worship</span>
        </h2>
        <p className="text-gray-500 mb-20 max-w-2xl mx-auto text-sm">Discover our comprehensive range of spiritual services designed to nurture your soul and connect you with the divine.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer"
              onClick={() => onServiceSelect?.(service.id)}
            >
              <div className="bg-[#f9f7f2] rounded-t-full rounded-b-2xl p-10 flex flex-col items-center justify-center transition-all group-hover:bg-white group-hover:shadow-xl group-hover:-translate-y-2">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-sm tracking-wide">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
