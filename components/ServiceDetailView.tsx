
import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Calendar as CalendarIcon, Clock, Moon, Star, Bell, BookOpen, Heart, Landmark, Coins, Map } from 'lucide-react';

interface ServiceDetailProps {
  id: string;
  onBack: () => void;
}

const FivePillarsSection: React.FC = () => {
  const pillars = [
    {
      id: 1,
      title: "Shahada (Testimony)",
      desc: "Believing and saying: \"None has the right to be worshipped but Allah, and Muhammad is His messenger.\"",
      quote: "\"The best remembrance is: La ilaha illa Allah.\"",
      icon: <Heart className="text-[#c5a075]" size={32} />
    },
    {
      id: 2,
      title: "Salah (Daily Prayer)",
      desc: "Performing the five obligatory prayers daily to maintain a direct link with Allah.",
      quote: "\"Prayer is a light that guides the believer's path.\"",
      icon: <Landmark className="text-[#c5a075]" size={32} />
    },
    {
      id: 3,
      title: "Zakat (Charity)",
      desc: "Giving 2.5% of your savings to the poor and needy every year.",
      quote: "\"Wealth is never diminished by giving in charity.\"",
      icon: <Coins className="text-[#c5a075]" size={32} />
    },
    {
      id: 4,
      title: "Sawm (Fasting)",
      desc: "Fasting from dawn to sunset during the month of Ramadan to grow in God-consciousness.",
      quote: "\"Fasting is a shield against wrongdoing and a path to piety.\"",
      icon: <Moon className="text-[#c5a075]" size={32} />
    },
    {
      id: 5,
      title: "Hajj (Pilgrimage)",
      desc: "Traveling to Mecca once in a lifetime for those who are physically and financially able.",
      quote: "\"The reward of an accepted Hajj is nothing but Paradise.\"",
      icon: <Map className="text-[#c5a075]" size={32} />
    }
  ];

  return (
    <div className="mt-20 py-16 border-t border-gray-100">
      <div className="text-center mb-16">
        <span className="text-[#c5a075] uppercase tracking-[0.4em] font-black text-[10px] mb-4 block">The Foundation of Faith</span>
        <h3 className="text-4xl md:text-5xl serif mb-6">The Five <span className="italic">Pillars</span> of Islam</h3>
        <div className="w-24 h-1 bg-[#c5a075] mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {pillars.map((pillar) => (
          <div key={pillar.id} className="bg-[#fcf9f5] border border-[#c5a075]/10 p-8 rounded-[2.5rem] flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:border-[#c5a075]/30 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
              {pillar.icon}
            </div>
            <span className="text-[10px] font-black text-[#c5a075]/40 mb-2 uppercase tracking-widest">Pillar {pillar.id}</span>
            <h4 className="text-lg font-bold text-gray-900 mb-4 serif leading-tight">{pillar.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6">{pillar.desc}</p>
            
            <div className="mt-auto pt-4 border-t border-[#c5a075]/10 w-full">
              <p className="text-[11px] italic text-[#c5a075] font-semibold leading-snug">
                {pillar.quote}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Simplified and Centered Visual Guide Illustration */}
      <div className="mt-24 flex flex-col items-center">
        <div className="max-w-2xl w-full rounded-3xl overflow-hidden border border-gray-100 shadow-lg bg-white">
          <img 
            src="https://res.cloudinary.com/do5bwj81j/image/upload/v1770017576/ChatGPT_Image_Feb_2_2026_11_32_26_AM_skoe8y.png" 
            alt="How to Pray Steps" 
            className="w-full h-auto object-contain block"
          />
        </div>
        <p className="mt-8 text-[#c5a075] text-[10px] font-black uppercase tracking-[0.4em] text-center">
          Allah loves your effort • Take your time
        </p>
      </div>
    </div>
  );
};

const RamadanCalendar: React.FC = () => {
  const [year, setYear] = useState<'2026' | '2027'>('2026');

  const calendars = {
    '2026': {
      title: "Ramadan 1447 AH",
      start: "February 18, 2026",
      end: "March 19, 2026",
      days: 30,
      startDay: 3, // Wednesday
    },
    '2027': {
      title: "Ramadan 1448 AH",
      start: "February 7, 2027",
      end: "March 8, 2027",
      days: 30,
      startDay: 0, // Sunday
    }
  };

  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const current = calendars[year];

  return (
    <div className="mt-16 bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-[#c5a075]/5 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <div className="flex items-center gap-2 text-[#c5a075] mb-4">
            <Star size={18} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Religious Schedule</span>
          </div>
          <h3 className="text-4xl md:text-5xl serif mb-3 tracking-tight">Ramadan <span className="italic">Calendar</span></h3>
          <p className="text-gray-500 text-sm max-w-md leading-relaxed">Preliminary dates based on astronomical calculations.</p>
        </div>
        
        <div className="flex bg-[#fcf9f5] rounded-2xl p-1.5 border border-gray-100 shadow-inner">
          <button 
            onClick={() => setYear('2026')}
            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${year === '2026' ? 'bg-[#c5a075] text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
          >
            1447 AH / 2026
          </button>
          <button 
            onClick={() => setYear('2027')}
            className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${year === '2027' ? 'bg-[#c5a075] text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
          >
            1448 AH / 2027
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        <div className="xl:col-span-4 space-y-6">
          <div className="bg-[#fcf9f5] p-8 rounded-3xl border border-[#c5a075]/10 group hover:border-[#c5a075]/30 transition-all">
            <div className="flex items-center gap-3 text-[#c5a075] mb-4">
              <Moon size={24} />
              <span className="text-xs font-black uppercase tracking-widest">Holy Month Timeline</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-400 font-medium">Expected Start:</p>
              <p className="text-2xl font-bold text-gray-800 serif">{current.start}</p>
            </div>
            <div className="mt-6 pt-6 border-t border-[#c5a075]/10 space-y-1">
              <p className="text-sm text-gray-400 font-medium">Expected Eid:</p>
              <p className="text-2xl font-bold text-gray-800 serif">{current.end}</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-8">
          <div className="bg-white border border-gray-50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-7 bg-[#fcf9f5] border-b border-gray-100">
              {weekdays.map(day => (
                <div key={day} className="py-4 text-center text-[10px] font-black text-gray-400 tracking-widest">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {Array.from({ length: current.startDay }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square bg-gray-50/30"></div>
              ))}
              {Array.from({ length: current.days }).map((_, i) => (
                <div key={i} className={`aspect-square border-r border-b border-gray-50 flex items-center justify-center text-xs font-bold text-gray-400`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const serviceData: Record<string, {
  name: string;
  icon: string;
  image: string;
  tagline: string;
  description: string;
  features: string[];
}> = {
  "mosque": {
    name: "Mosque",
    icon: "🕌",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2000",
    tagline: "A Sanctuary for the Soul",
    description: "Our Grand Mosque serves as the beating heart of the Metropol Al-Waha community.",
    features: ["Five Daily prayers", "Friday Sermons"]
  },
  "hajj-umrah": {
    name: "Hajj & Umrah",
    icon: "🕋",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d8f7ec?auto=format&fit=crop&q=80&w=2000",
    tagline: "The Journey of a Lifetime",
    description: "Preparing for the sacred journey to Makkah.",
    features: ["Training", "Visa support"]
  },
  "ramadan": {
    name: "Ramadan",
    icon: "🏮",
    image: "https://images.unsplash.com/photo-1581072460613-2be518c0df19?auto=format&fit=crop&q=80&w=2000",
    tagline: "A Month of Mercy",
    description: "Intensive Quranic study circles.",
    features: ["Taraweeh", "Iftars"]
  },
  "tafsir-quran": {
    name: "Tafsir Quran",
    icon: "📖",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=2000",
    tagline: "Understanding the Word",
    description: "Explore historical context of Quranic verses.",
    features: ["Weekly Circles", "Arabic Classes"]
  },
  "travel": {
    name: "Travel",
    icon: "🐫",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=2000",
    tagline: "Wonders of Creation",
    description: "Educational and spiritual retreats.",
    features: ["Heritage Tours", "Retreats"]
  },
  "prayer": {
    name: "Prayer",
    icon: "🧎",
    image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d978?auto=format&fit=crop&q=80&w=2000",
    tagline: "Ascension of the Believer",
    description: "Resources to improve your Salah. Prayer is the direct communication between the creator and the servant.",
    features: ["Workshops", "Quiet Halls", "Steps Guide", "The 5 Pillars"]
  },
  "events": {
    name: "Events",
    icon: "🥁",
    image: "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&q=80&w=2000",
    tagline: "Celebrating Faith",
    description: "Eid festivals and symposiums.",
    features: ["Celebrations", "Marriage Ceremonies"]
  },
  "zakat-sadaqah": {
    name: "Zakat Sadaqah",
    icon: "💰",
    image: "https://images.unsplash.com/photo-1623150502742-6a849aa94be4?auto=format&fit=crop&q=80&w=2000",
    tagline: "Purification through Giving",
    description: "Transparent distribution system.",
    features: ["Calculation", "Local charity"]
  }
};

const ServiceDetailView: React.FC<ServiceDetailProps> = ({ id, onBack }) => {
  const data = serviceData[id];

  if (!data) return <div className="pt-32 text-center">Service not found.</div>;

  return (
    <div className="fade-in">
      <section className="relative h-[500px] overflow-hidden">
        <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
             <button 
              onClick={onBack}
              className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mx-auto"
            >
              <ArrowLeft size={16} /> Back to Services
            </button>
            <div className="text-7xl mb-6">{data.icon}</div>
            <h1 className="text-white text-6xl md:text-8xl serif mb-4">{data.name}</h1>
            <p className="text-[#c5a075] text-xl italic serif">{data.tagline}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl serif leading-tight">About our {data.name} Service</h2>
              <div className="w-20 h-1 bg-[#c5a075]"></div>
              <p className="text-gray-500 text-lg leading-relaxed">{data.description}</p>
              <button className="bg-[#c5a075] text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#b38f66] transition-all shadow-lg">Inquire Now</button>
            </div>
            <div className="bg-[#fcf9f5] p-12 rounded-2xl border border-gray-100 shadow-sm self-start">
              <h3 className="text-2xl font-bold mb-8 serif">Highlights</h3>
              <ul className="space-y-6">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle size={20} className="mt-1 text-[#c5a075]" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {id === 'events' && <RamadanCalendar />}
          {id === 'prayer' && <FivePillarsSection />}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailView;
