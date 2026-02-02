
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const insights = [
  {
    title: "Striving for Excellence in the Islamic Way",
    date: "August 24, 2023",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Exploring Spirituality",
    date: "August 24, 2023",
    image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d978?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Preserving Traditions",
    date: "August 23, 2023",
    image: "https://images.unsplash.com/photo-1564683214965-3619addd900d?auto=format&fit=crop&q=80&w=800"
  }
];

const InsightsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl font-medium serif leading-tight">
            Insights from the <br /> <span className="italic text-[#c5a075]">Islamic</span> Path
          </h2>
          <div className="max-w-md">
            <p className="text-gray-500 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-800 hover:text-[#c5a075]">
              View All <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Main featured post */}
          <div className="lg:col-span-1 h-[500px] relative rounded-t-full rounded-b-xl overflow-hidden group">
            <img 
              src={insights[0].image} 
              alt={insights[0].title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold serif mb-4">{insights[0].title}</h3>
            </div>
          </div>

          {/* List of other posts */}
          <div className="space-y-8 lg:col-span-2">
            {insights.slice(1).map((item, idx) => (
              <div key={idx} className="flex gap-6 items-center group">
                <div className="w-48 h-32 rounded-lg overflow-hidden shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-all" />
                </div>
                <div>
                  <h3 className="text-xl font-bold serif mb-2 group-hover:text-[#c5a075] transition-colors">{item.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={14} className="text-[#c5a075]" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
