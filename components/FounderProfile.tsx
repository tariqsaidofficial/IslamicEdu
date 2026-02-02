
import React from 'react';
import { Briefcase, Award, GraduationCap, CheckCircle2, Star, ShieldCheck, Heart, User, Quote, Linkedin, Youtube, Instagram, Music } from 'lucide-react';

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
    "Implemented High-Performance Learning (HPL) strategies"
  ];

  const certifications = [
    "KHDA Competent Teacher Process",
    "Child Protection & Safeguarding (GEMS U)",
    "Microsoft Innovative Educator Certification",
    "Training in supporting People of Determination",
    "Mental Health Support in Schools"
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
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="flex items-center gap-3 text-[#c5a075]">
            <User size={20} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Visionary Behind the Platform</span>
          </div>
          <h2 className="text-5xl md:text-6xl serif leading-tight">Meet <span className="italic">Mr. Islam Ezzat</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">Head of Islamic Studies | Islamic Education Leader | Content Creator</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Circular Image and Basic Bio */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative mb-10 group">
              <div className="absolute inset-0 bg-[#c5a075] rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-[12px] border-[#fcf9f5] overflow-hidden shadow-2xl">
                <img 
                  src={photoUrl} 
                  alt="Mr. Islam Ezzat" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                {socials.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.url} 
                    target="_blank" 
                    className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-400 hover:text-[#c5a075] hover:-translate-y-1 transition-all border border-gray-50"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-[#fcf9f5] p-8 rounded-[2rem] border border-[#c5a075]/10 w-full text-center">
              <h4 className="font-bold text-gray-800 mb-2">Academic Excellence</h4>
              <p className="text-xs text-gray-500 leading-relaxed italic">"Nurturing hearts as much as minds through authentic guidance and modern pedagogy."</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 justify-center text-sm font-bold text-gray-700">
                  <GraduationCap size={16} className="text-[#c5a075]" />
                  <span>Bachelor's in Islamic Studies</span>
                </div>
                <div className="flex items-center gap-3 justify-center text-sm font-bold text-gray-700">
                  <ShieldCheck size={16} className="text-[#c5a075]" />
                  <span>Hafiz with Ijazah</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Journey & Impact */}
          <div className="lg:col-span-8 space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Journey Column */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 text-[#c5a075]">
                  <Briefcase size={20} />
                  <h3 className="text-2xl font-bold serif">Professional Journey</h3>
                </div>
                <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-[#c5a075]/20">
                  {journey.map((item, idx) => (
                    <div key={idx} className="relative pl-8">
                      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#c5a075] border-4 border-white shadow-sm"></div>
                      <span className="text-[#c5a075] text-[10px] font-black tracking-widest block mb-1 uppercase">{item.years}</span>
                      <h4 className="font-bold text-gray-900 leading-tight">{item.role}</h4>
                      <p className="text-gray-400 text-[11px] font-bold mt-1 uppercase tracking-wider">{item.org}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Column */}
              <div className="space-y-8">
                <div className="flex items-center gap-3 text-[#c5a075]">
                  <Award size={20} />
                  <h3 className="text-2xl font-bold serif">Impact & Legacy</h3>
                </div>
                <div className="grid gap-3">
                  {impact.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all">
                      <CheckCircle2 size={16} className="text-[#c5a075] shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-600 font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Row */}
            <div className="pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 text-[#c5a075] mb-8">
                <ShieldCheck size={20} />
                <h3 className="text-2xl font-bold serif">Global Credentials</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, idx) => (
                  <span key={idx} className="px-5 py-2.5 bg-[#fcf9f5] border border-[#c5a075]/20 rounded-full text-[10px] font-black uppercase tracking-wider text-gray-700 hover:border-[#c5a075] transition-all">
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
