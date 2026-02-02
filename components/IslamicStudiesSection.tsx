
import React, { useState } from 'react';
import { BookOpen, Shield, Scale, History, UserCheck, Globe, Trophy, Star, Layout, Sparkles, Loader2 } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';

interface IslamicStudiesSectionProps {
  title?: React.ReactNode;
  tagline?: string;
}

const IslamicStudiesSection: React.FC<IslamicStudiesSectionProps> = ({ 
  title = <>Islamic Studies <br /> <span className="italic">Redefined</span></>,
  tagline = "Core Curriculum"
}) => {
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const standards = [
    { name: "Divine Revelation", desc: "Quran and Hadith studies", icon: <BookOpen size={24} /> },
    { name: "Islamic Beliefs", desc: "Understanding Aqeedah", icon: <Shield size={24} /> },
    { name: "Islamic Rulings & Aims", desc: "Fiqh and its applications", icon: <Scale size={24} /> },
    { name: "Islamic Biography", desc: "Seerah and Personalities", icon: <History size={24} /> },
    { name: "Islamic Etiquette", desc: "Akhlaq and manners", icon: <UserCheck size={24} /> },
    { name: "Contemporary Issues", desc: "Islamic values in today's world", icon: <Globe size={24} /> },
  ];

  const handleGetSuggestion = async () => {
    setIsLoading(true);
    const prompt = [
      {
        role: 'user',
        parts: [{ text: "Give me a list of 5 creative, practical AI-powered organization and decluttering suggestions specifically for a student's study space to enhance focus and spiritual clarity. Use a warm, encouraging tone." }]
      }
    ] as any;
    
    try {
      const response = await getGeminiResponse(prompt, "You are a wise Islamic education mentor.");
      setAiSuggestion(response);
    } catch (err) {
      setAiSuggestion("Try to keep your study space clean and start every session with Bismillah. (AI service temporarily unavailable)");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#fcf9f5]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-[#c5a075]">
              <div className="w-8 h-px bg-[#c5a075]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">{tagline}</span>
            </div>
            <h2 className="text-5xl md:text-6xl serif leading-tight">
              {title}
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed text-lg font-medium">
                Mandatory for Muslim students, focusing on Islamic principles, history, and their relevance in today's world. In Islamic Studies, we follow the <span className="text-[#c5a075] font-bold">MOE curriculum and KHDA framework</span>, linking the curriculum with real life.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                The Islamic curriculum contains six standards and topics of great importance to the students' interests, lives, and environment. It aims to promote moderate Islamic values that reflect the true Islam adopted by the UAE, which is linked to the original Arab values and concepts.
              </p>
            </div>
            <div className="p-8 bg-white border border-[#c5a075]/10 rounded-[2.5rem] shadow-sm">
              <p className="text-gray-500 text-sm leading-relaxed italic">
                "Our education is built on exploring verses of the Quran and the sayings of the Prophet Mohammad (PBUH). It aims to give pupils a clear, thorough understanding of Islamic teachings, moral behaviour and Islamic etiquette."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {standards.map((std, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-[#c5a075]/30 hover:shadow-xl transition-all group">
                <div className="text-[#c5a075] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {std.icon}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{std.name}</h4>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl serif italic text-gray-800">Holistic Understanding</h3>
              <p className="text-gray-500 leading-relaxed">
                Through their Islamic education, children increase their knowledge of Islam by learning the stories of prophets and understanding aspects such as the manners of living a Muslim's life, the Five Pillars of Islam, and Islamic faith and morals. This enables them to effectively apply these teachings to their contemporary lives. Religious occasions such as Eid al-Fitr and Eid al-Adha are observed so that children realize their importance and value.
              </p>
              <p className="text-gray-500 leading-relaxed">
                As the Holy Quran builds the character and conscience of a true Muslim, children are encouraged to respect and memorise the Holy Quran. School-organised competitions—internal, across the cluster, and international—celebrate their achievements in Quran memorisation.
              </p>
            </div>

            {/* AI Organization Feature */}
            <div className="bg-[#1a1a1a] rounded-[3rem] p-10 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a075]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-16 h-16 bg-[#c5a075] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  <Layout size={32} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2 serif italic">AI-Powered Organization</h4>
                  <p className="text-white/60 text-sm mb-6">Need tips to declutter your study space for better focus? Our AI can suggest personalized organization strategies.</p>
                  <button 
                    onClick={handleGetSuggestion}
                    disabled={isLoading}
                    className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#c5a075] hover:text-white transition-all disabled:opacity-50"
                  >
                    {isLoading ? <Loader2 className="animate-spin" size={14} /> : <Sparkles size={14} />}
                    Get Suggestions
                  </button>
                </div>
              </div>
              {aiSuggestion && (
                <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-top-4">
                   <div className="text-sm text-white/80 leading-relaxed whitespace-pre-wrap italic">
                     {aiSuggestion}
                   </div>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#c5a075] rounded-full flex items-center justify-center text-white">
                  <Star size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Religious Occasions</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Celebrating the spiritual joy of Eid while understanding its deep heritage and core values.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#c5a075] rounded-full flex items-center justify-center text-white">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Quran Competitions</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Excellence in memorisation and recitation across regional and international platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
            {/* Reliable and relevant image for "Islamic Learning" */}
            <img 
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200" 
              alt="Islamic Education and Learning" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#c5a075]/80 to-transparent flex items-end p-8">
              <p className="text-white text-sm font-bold uppercase tracking-widest leading-relaxed">
                "Knowledge is the lamp of the heart"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IslamicStudiesSection;
