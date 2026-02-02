
import React from 'react';
import { Briefcase, Award, GraduationCap, CheckCircle2, ShieldCheck, User, Linkedin, Youtube, Instagram, Music } from 'lucide-react';

const FounderProfile: React.FC = () => {
  const photoUrl = "https://media.licdn.com/dms/image/v2/D4D03AQHa5EWyZ2QFKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724267674795?e=1771459200&v=beta&t=8aUp69NFUg6QHpJXV5GuAKaFNsYzzNW0VeYEhS8Vg0s";

  const journey = [
    { role: "Head of Islamic Department", org: "GEMS Metropole Al Waha", years: "2025–Present" },
    { role: "Islamic Studies Teacher (A & B)", org: "Sunmarke International School", years: "2023–2025" },
    { role: "Islamic Studies Teacher", org: "Cambridge International School, Dubai", years: "2018–2023" },
  ];

  const impact = [
    "Improved inspection rating from 'Acceptable' to 'Good' (2022)",
    "Creative lesson design & modern instructional tools",
    "Empowered students through reflection and self-evaluation",
    "Qur'an memorization through applied teaching",
    "High-Performance Learning (HPL) strategies"
  ];

  const certifications = [
    "KHDA Competent Teacher Process",
    "Child Protection (GEMS U)",
    "Microsoft Innovative Educator",
    "Mental Health Support"
  ];

  const socials = [
    { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/islam-ezzat-141716228/" },
    { icon: <Youtube size={18} />, url: "https://www.youtube.com/@islamezzat1940" },
    { icon: <Instagram size={18} />, url: "https://www.instagram.com/eslam_islam_2010/" },
    { icon: <Music size={18} />, url: "https://www.tiktok.com/@ezzeldeen020" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="flex items-center gap-3 text-[#c5a075]">
            <User size={20} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Visionary Behind the Platform</span>
          </div>
          <h2 className="text-5xl md:text-7xl serif leading-tight">Meet <span className="italic">Mr. Islam Ezzat</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">Head of Islamic Studies | Islamic Education Leader | Content Creator</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          {/* Column 1: Journey */}
          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-[#c5a075]">
                <Briefcase size={20} />
                <h3 className="text-2xl font-bold serif">Professional Journey</h3>
              </div>
              <div className="space-y-8 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-[#c5a075]/20">
                {journey.map((item, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#c5a075] border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
                    <span className="text-[#c5a075] text-[10px] font-black tracking-widest block mb-1 uppercase">{item.years}</span>
                    <h4 className="font-bold text-gray-900 leading-tight group-hover:text-[#c5a075] transition-colors">{item.role}</h4>
                    <p className="text-gray-400 text-[11px] font-bold mt-1 uppercase tracking-wider">{item.org}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#fcf9f5] p-8 rounded-[2.5rem] border border-[#c5a075]/10">
              <div className="flex items-center gap-3 text-[#c5a075] mb-4">
                <GraduationCap size={20} />
                <h4 className="font-bold text-gray-800 text-sm uppercase tracking-widest">Academic Excellence</h4>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed italic mb-4">"Nurturing hearts as much as minds through authentic guidance and modern pedagogy."</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
                  <ShieldCheck size={14} className="text-[#c5a075]" />
                  <span>Bachelor's in Islamic Studies</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-gray-700">
                  <ShieldCheck size={14} className="text-[#c5a075]" />
                  <span>Hafiz with Ijazah (Hafs & Shoaba)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Center Photo */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <div className="relative group">
              {/* Outer Decorative Rings */}
              <div className="absolute -inset-4 border border-[#c5a075]/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute -inset-8 border border-dashed border-[#c5a075]/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
              
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-[16px] border-[#fcf9f5] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-105">
                <img 
                  src={photoUrl} 
                  alt="Mr. Islam Ezzat" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Float Socials */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {socials.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-400 hover:text-[#c5a075] hover:-translate-y-2 transition-all border border-gray-100"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 text-center">
               <div className="w-12 h-1 bg-[#c5a075] mx-auto mb-4"></div>
               <p className="text-[#c5a075] serif italic text-xl">Innovation in Islamic Education</p>
            </div>
          </div>

          {/* Column 3: Impact */}
          <div className="space-y-12 order-3">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-[#c5a075]">
                <Award size={20} />
                <h3 className="text-2xl font-bold serif">Impact & Legacy</h3>
              </div>
              <div className="grid gap-4">
                {impact.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-[#c5a075]/20 transition-all group">
                    <CheckCircle2 size={18} className="text-[#c5a075] shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-600 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#c5a075] mb-6">Global Credentials</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, idx) => (
                  <span key={idx} className="px-4 py-2 bg-[#fcf9f5] border border-[#c5a075]/10 rounded-full text-[9px] font-black uppercase tracking-widest text-gray-600">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderProfile;
