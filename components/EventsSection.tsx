
import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    title: "Navigating Life's Journey with Faith",
    date: "January 25, 2024",
    location: "Metro Building",
    image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Exploring Islamic Insights and Wisdom",
    date: "August 1, 2025",
    location: "Boston Square",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Embarking on a Journey of Reflection",
    date: "March 3, 2025",
    location: "London Park",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Strengthening Faith and Community",
    date: "July 17, 2025",
    location: "Paradise Road",
    image: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&q=80&w=600"
  }
];

const EventsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-medium serif leading-tight">
            Upcoming <span className="italic text-[#c5a075]">Events</span> and Exhibitions
          </h2>
          <div className="max-w-md">
            <p className="text-gray-500 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-800 hover:text-[#c5a075]">
              View All <ArrowRight size={14} />
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {events.map((event, idx) => (
            <div key={idx} className="flex gap-6 group">
              <div className="w-1/3 aspect-square overflow-hidden rounded-t-full rounded-b-lg shrink-0">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-4 serif group-hover:text-[#c5a075] transition-colors">{event.title}</h3>
                <div className="space-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#c5a075]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#c5a075]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-800 hover:text-[#c5a075]">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
