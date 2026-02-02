'use client';

import React, { useState } from 'react';
import { Lightbulb, X, ChevronRight, Info } from 'lucide-react';

const FactsSection: React.FC = () => {
  const [showAllFacts, setShowAllFacts] = useState(false);

  const previewFacts = [
    { 
      id: 1, 
      title: "Meaning of Islam",
      text: "Islam is an Arabic word that means \"submission\" and \"surrender\" to the will of God (Allah), and it is derived from the word 'Salam' which means peace." 
    },
    { 
      id: 2, 
      title: "Absolute Monotheism",
      text: "The core belief in Islam is 'Tawhid'—the belief that there is only one God, Allah, who has no partners, no parents, and no children." 
    },
    { 
      id: 3, 
      title: "The Holy Quran",
      text: "The Quran is the literal word of Allah revealed to Prophet Muhammad ﷺ. It has remained unchanged for over 1,400 years." 
    },
    { 
      id: 4, 
      title: "Universal Message",
      text: "Islam is not a new religion; it is the same message of Monotheism preached by all previous Prophets like Noah, Abraham, Moses, and Jesus." 
    },
    { 
      id: 5, 
      title: "Prophet Muhammad ﷺ",
      text: "Muslims believe Muhammad ﷺ is the final Messenger sent by Allah to all of humanity to complete the divine message." 
    },
    { 
      id: 6, 
      title: "The Five Pillars",
      text: "Islam is built on five practical acts: Shahada (Faith), Salah (Prayer), Zakat (Charity), Sawm (Fasting), and Hajj (Pilgrimage)." 
    },
    { 
      id: 7, 
      title: "Faith in Angels",
      text: "Muslims believe in the unseen world, including Angels who are created from light and always obey Allah's commands." 
    },
    { 
      id: 8, 
      title: "The Day of Judgment",
      text: "Life on Earth is temporary. Every individual will be resurrected and held accountable for their deeds on the Day of Judgment." 
    },
    { 
      id: 9, 
      title: "Respect for All Prophets",
      text: "A person cannot be a Muslim without believing in and respecting all previous Prophets, including Jesus (Isa) and Moses (Musa)." 
    },
    { 
      id: 10, 
      title: "Equality in Islam",
      text: "In Islam, all humans are equal regardless of race, language, or nationality. Superiority is only based on piety and good character." 
    }
  ];

  const factsExtended = [
    { id: 11, title: "Islam Means Peace", text: "Islam comes from the root word \"Salam,\" which is associated with peace, safety, and harmony." },
    { id: 12, title: "Worship Is for Allah Alone", text: "Muslims worship only Allah directly, without intermediaries." },
    { id: 13, title: "The Quran Is a Guide", text: "The Quran is a complete guidance for life, covering faith, morality, and justice." },
    { id: 14, title: "Sunnah Explains the Quran", text: "The teachings and actions of Prophet Muhammad ﷺ help Muslims understand and apply Islam." },
    { id: 15, title: "Islam Is a Way of Life", text: "Islam is not only religion, but a complete way of living." },
    { id: 16, title: "Prayer Connects Believers to God", text: "Salah is performed five times daily to maintain spiritual connection." },
    { id: 17, title: "Charity Purifies Wealth", text: "Zakat helps the poor and purifies the giver's wealth." },
    { id: 18, title: "Ramadan Builds Self-Control", text: "Fasting teaches patience, gratitude, and discipline." },
    { id: 19, title: "Hajj Unites Muslims", text: "Pilgrimage brings millions together in equality and worship." },
    { id: 20, title: "Islam Encourages Knowledge", text: "Seeking knowledge is considered a noble act in Islam." },
  ];

  const allFacts = Array.from({ length: 20 }, (_, i) => previewFacts[i] || factsExtended[i - 10]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#c5a075]">
              <Lightbulb size={20} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Knowledge is Light</span>
            </div>
            <h2 className="text-5xl md:text-6xl serif leading-tight">
              Fascinating <span className="italic">Facts</span> <br /> About Islam
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-500 mb-6 leading-relaxed">
              Explore the rich tapestry of Islamic faith, history, and culture through these enlightening points of knowledge.
            </p>
            <button 
              onClick={() => setShowAllFacts(true)}
              className="group flex items-center gap-4 bg-[#fcf9f5] border border-[#c5a075]/20 hover:border-[#c5a075] px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all text-gray-800"
            >
              Discover Facts 
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Preview Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {previewFacts.map((fact) => (
            <div 
              key={fact.id} 
              className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:shadow-[#c5a075]/5 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="w-10 h-10 rounded-full bg-[#fcf9f5] flex items-center justify-center text-[#c5a075] font-black text-xs mb-6 border border-[#c5a075]/10 group-hover:bg-[#c5a075] group-hover:text-white transition-all">
                {fact.id}
              </div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#c5a075] mb-3">{fact.title}</h4>
              <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                {fact.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for All Facts */}
      {showAllFacts && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md" 
            onClick={() => setShowAllFacts(false)}
          ></div>
          <div className="relative bg-white w-full max-w-5xl h-[90vh] rounded-[3rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
            {/* Modal Header */}
            <div className="p-8 md:p-12 border-b flex items-center justify-between bg-[#fcf9f5]">
              <div>
                <h3 className="text-4xl serif mb-2">20 Insights About <span className="italic">Islam</span></h3>
                <p className="text-[#c5a075] text-[10px] font-black uppercase tracking-widest">Knowledge Compendium</p>
              </div>
              <button 
                onClick={() => setShowAllFacts(false)}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-100 transition-all shadow-sm"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allFacts.map((fact) => (
                  <div key={fact.id} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                    <span className="text-4xl serif italic text-[#c5a075]/20 font-black shrink-0">
                      {fact.id.toString().padStart(2, '0')}
                    </span>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">{fact.title}</h5>
                      <p className="text-gray-700 leading-relaxed text-sm">
                        {fact.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 border-t bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400 text-xs italic">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-200">
                  <Info size={12} />
                </div>
                <span>Knowledge provided by IslamicEdu Research Center</span>
              </div>
              <button 
                onClick={() => setShowAllFacts(false)}
                className="bg-gray-900 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#c5a075] transition-all"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FactsSection;
