'use client';

import React from 'react';
import { Youtube, Instagram, Music, MessageSquareQuote, PlayCircle } from 'lucide-react';

const PodcastSection: React.FC = () => {
  const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEGdVlviHGC3ZnKvlvqHL9PUpubUixmykpw&s";
  const bannerUrl = "https://media.licdn.com/dms/image/v2/D4D16AQFaTF7Yp9sf_g/profile-displaybackgroundimage-shrink_350_1400/B4DZtcJdqTGUAY-/0/1766777544032?e=1771459200&v=beta&t=uJ4w2oZeZ2wb-Xi_By547LHCq-NM3Hk6a8hW14ZnlwM";
  
  const socialLinks = [
    { name: 'YouTube', url: 'https://www.youtube.com/@islamezzat1940', icon: <Youtube size={22} />, color: 'hover:bg-red-600' },
    { name: 'Instagram', url: 'https://www.instagram.com/eslam_islam_2010/', icon: <Instagram size={22} />, color: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-purple-600' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@ezzeldeen020', icon: <Music size={22} />, color: 'hover:bg-black' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="relative rounded-[4rem] shadow-2xl overflow-hidden min-h-[600px] flex flex-col lg:flex-row group/section">
          
          {/* Left Side: Solid Dark Branding Area */}
          <div className="relative z-30 lg:w-5/12 bg-[#1a1a1a] p-16 flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a075]/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="relative mb-10 group cursor-pointer z-40">
              {/* This glow sits behind the circular logo frame */}
              <div className="absolute -inset-6 bg-[#c5a075] rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700"></div>
              
              <div className="w-56 h-56 bg-white rounded-full p-2 shadow-2xl relative z-10 border-8 border-white transition-transform duration-700 group-hover:scale-105">
                <img 
                  src={logoUrl} 
                  alt="Podcast Logo" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              
              {/* Play icon definitively in front */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#c5a075] rounded-full flex items-center justify-center text-white shadow-2xl z-[50] animate-bounce">
                <PlayCircle size={32} />
              </div>
            </div>

            <div className="relative z-10 space-y-4">
              <h3 className="text-white font-bold tracking-[0.4em] uppercase text-[10px]">The Educational Podcast</h3>
              <p className="text-[#c5a075] serif text-2xl md:text-3xl italic leading-tight">"From the Heart of <br /> the Lesson"</p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#c5a075]/40"></div>)}
              </div>
            </div>
          </div>

          {/* Right Side: Information with Integrated Banner Background */}
          <div className="relative z-10 lg:w-7/12 flex flex-col justify-center overflow-hidden bg-white">
            
            {/* Banner Background - Specifically behind the outreach content */}
            <div className="absolute inset-0 z-0 overflow-hidden">
               <img 
                 src={bannerUrl} 
                 alt="Integrated Banner" 
                 className="w-full h-full object-cover opacity-30 blur-[12px] scale-110 transition-transform duration-[10s] group-hover/section:scale-100"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            </div>

            <div className="relative z-10 p-12 lg:p-24 space-y-8">
              <div className="inline-flex items-center gap-3 bg-[#c5a075] text-white px-6 py-2 rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-lg shadow-[#c5a075]/20">
                <MessageSquareQuote size={16} />
                <span>Educational Outreach</span>
              </div>

              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl serif leading-tight text-gray-900 drop-shadow-sm">
                  من قلب الحصة <br /> <span className="text-[#c5a075] italic">Insights</span>
                </h2>
                <p className="text-gray-700 leading-relaxed max-w-lg text-lg font-medium">
                  A unique educational platform sharing inspiring reflections, teaching insights, and Islamic guidance for students, parents, and educators.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center gap-5 p-8 bg-white/60 backdrop-blur-sm border border-white rounded-[2.5rem] shadow-sm transition-all duration-500 group/link ${link.color} hover:text-white hover:-translate-y-2 hover:shadow-2xl`}
                  >
                    <div className="text-[#c5a075] group-hover/link:text-white transition-colors p-4 bg-white rounded-2xl group-hover/link:bg-white/20 shadow-sm">
                      {link.icon}
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">{link.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 opacity-50">
                <div className="h-px flex-1 bg-gray-300"></div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500 font-bold whitespace-nowrap">
                  Mr. Islam Ezzat
                </p>
                <div className="h-px flex-1 bg-gray-300"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
