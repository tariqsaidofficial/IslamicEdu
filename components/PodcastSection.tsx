
import React from 'react';
import { Youtube, Instagram, Music, ArrowRight, MessageSquareQuote } from 'lucide-react';

const PodcastSection: React.FC = () => {
  const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEGdVlviHGC3ZnKvlvqHL9PUpubUixmykpw&s";
  
  const socialLinks = [
    { name: 'YouTube', url: 'https://www.youtube.com/@islamezzat1940', icon: <Youtube size={20} /> },
    { name: 'Instagram', url: 'https://www.instagram.com/eslam_islam_2010/', icon: <Instagram size={20} /> },
    { name: 'TikTok', url: 'https://www.tiktok.com/@ezzeldeen020', icon: <Music size={20} /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/islam-ezzat-141716228/', icon: <ArrowRight size={20} /> },
  ];

  return (
    <section className="py-24 bg-[#fcf9f5] border-t border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Brand Visual */}
          <div className="lg:w-1/3 bg-[#1a1a1a] p-16 flex flex-col items-center justify-center text-center">
            <div className="w-48 h-48 bg-white rounded-full p-2 shadow-2xl mb-8 group hover:scale-105 transition-transform duration-500">
              <img 
                src={logoUrl} 
                alt="Podcast Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <h3 className="text-white font-bold tracking-[0.3em] uppercase text-xs mb-2">The Podcast</h3>
            <p className="text-[#c5a075] serif text-xl italic">From the Heart of the Lesson</p>
          </div>

          {/* Content & Links */}
          <div className="lg:w-2/3 p-12 lg:p-20 space-y-10 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#c5a075] font-black uppercase tracking-[0.2em] text-[10px]">
                <MessageSquareQuote size={18} />
                <span>Educational Outreach</span>
              </div>
              <h2 className="text-4xl md:text-5xl serif leading-tight">
                من قلب الحصة <br /> <span className="text-[#c5a075] italic">Insights & Reflections</span>
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                A unique educational platform sharing inspiring reflections, teaching insights, and Islamic guidance for students, parents, and educators. Connect with Mr. Islam Ezzat across these official channels.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-4 p-6 border border-gray-100 rounded-3xl hover:bg-[#c5a075] hover:text-white hover:border-[#c5a075] transition-all group"
                >
                  <div className="text-[#c5a075] group-hover:text-white transition-colors">
                    {link.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
