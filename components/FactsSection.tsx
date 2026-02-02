
import React, { useState } from 'react';
import { Lightbulb, X, ChevronRight, Info } from 'lucide-react';

const FactsSection: React.FC = () => {
  const [showAllFacts, setShowAllFacts] = useState(false);

  // Updated first 10 facts for the preview grid
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

  // Full list data including the facts 11-100
  const factsExtended = [
    { id: 11, title: "Islam Means Peace", text: "Islam comes from the root word “Salam,” which is associated with peace, safety, and harmony." },
    { id: 12, title: "Worship Is for Allah Alone", text: "Muslims worship only Allah directly, without intermediaries." },
    { id: 13, title: "The Quran Is a Guide", text: "The Quran is a complete guidance for life, covering faith, morality, and justice." },
    { id: 14, title: "Sunnah Explains the Quran", text: "The teachings and actions of Prophet Muhammad ﷺ help Muslims understand and apply Islam." },
    { id: 15, title: "Islam Is a Way of Life", text: "Islam is not only religion, but a complete way of living." },
    { id: 16, title: "Prayer Connects Believers to God", text: "Salah is performed five times daily to maintain spiritual connection." },
    { id: 17, title: "Charity Purifies Wealth", text: "Zakat helps the poor and purifies the giver’s wealth." },
    { id: 18, title: "Ramadan Builds Self-Control", text: "Fasting teaches patience, gratitude, and discipline." },
    { id: 19, title: "Hajj Unites Muslims", text: "Pilgrimage brings millions together in equality and worship." },
    { id: 20, title: "Islam Encourages Knowledge", text: "Seeking knowledge is considered a noble act in Islam." },
    { id: 21, title: "Islam Honors Parents", text: "Kindness and respect toward parents are strongly emphasized." },
    { id: 22, title: "Good Character Is Essential", text: "Prophet Muhammad ﷺ taught that the best Muslims have the best manners." },
    { id: 23, title: "Mercy Is Central", text: "Allah is described as “The Most Merciful” throughout the Quran." },
    { id: 24, title: "Islam Promotes Justice", text: "Justice is a key principle in personal and social life." },
    { id: 25, title: "Islam Rejects Racism", text: "All people are equal before Allah." },
    { id: 26, title: "The Kaaba Is the Qiblah", text: "Muslims pray facing the Kaaba in Makkah." },
    { id: 27, title: "Islam Teaches Modesty", text: "Modesty applies to behavior, speech, and dress." },
    { id: 28, title: "The Quran Mentions Many Prophets", text: "Stories of earlier prophets appear throughout the Quran." },
    { id: 29, title: "Jesus Is Respected in Islam", text: "Muslims honor Jesus (Isa) as a prophet and messenger." },
    { id: 30, title: "Islam Values Family", text: "Family ties and responsibilities are highly important." },
    { id: 31, title: "Every Person Is Accountable", text: "Each individual is responsible for their own deeds." },
    { id: 32, title: "Islam Forbids Oppression", text: "Oppressing people is one of the greatest sins in Islam (ظلم الناس من أعظم الذنوب في الإسلام)." },
    { id: 33, title: "Repentance Is Always Open", text: "Allah accepts sincere repentance at any time." },
    { id: 34, title: "Islam Teaches Forgiveness", text: "Forgiving others is encouraged." },
    { id: 35, title: "Muslims Greet With Peace", text: "“As-salamu alaykum” means “peace be upon you.”" },
    { id: 36, title: "Cleanliness Is Part of Faith", text: "Islam places strong emphasis on hygiene." },
    { id: 37, title: "Intention Matters", text: "Actions are judged by intentions in Islam." },
    { id: 38, title: "Islam Protects Human Life", text: "Saving one life is like saving all humanity." },
    { id: 39, title: "Islam Encourages Honest Work", text: "Halal earning is praised and respected." },
    { id: 40, title: "Islam Promotes Kindness", text: "Kindness to all creation is rewarded." },
    { id: 41, title: "Animals Are Treated With Mercy", text: "Islam teaches compassion toward animals." },
    { id: 42, title: "The Quran Was Revealed Gradually", text: "It was revealed over 23 years." },
    { id: 43, title: "Muslims Believe in Divine Decree", text: "Everything happens by Allah’s wisdom and knowledge." },
    { id: 44, title: "Islam Teaches Hope", text: "Believers should never despair of Allah’s mercy." },
    { id: 45, title: "Prayer Strengthens Discipline", text: "Regular prayer builds structure in life." },
    { id: 46, title: "Islam Encourages Community", text: "Muslims are urged to support one another." },
    { id: 47, title: "Backbiting Is Forbidden", text: "Speaking badly about others is a serious sin." },
    { id: 48, title: "Islam Promotes Peaceful Relations", text: "Peace is preferred whenever possible." },
    { id: 49, title: "The Quran Is Memorized Worldwide", text: "Millions have memorized the Quran completely." },
    { id: 50, title: "Islam Is a Global Religion", text: "Islam is practiced across all continents." },
    { id: 51, title: "Islam Calls for Truthfulness", text: "Honesty is a major virtue." },
    { id: 52, title: "Islam Discourages Arrogance", text: "Pride and arrogance are condemned." },
    { id: 53, title: "Gratitude Is Worship", text: "Thanking Allah is part of faith." },
    { id: 54, title: "Islam Protects Orphans", text: "Caring for orphans is highly rewarded." },
    { id: 55, title: "Islam Encourages Feeding the Poor", text: "Helping the needy is a major act of worship." },
    { id: 56, title: "The Mosque Is a Place of Worship", text: "Mosques serve as centers of prayer and learning." },
    { id: 57, title: "Friday Is a Special Day", text: "Jumu’ah prayer is the most important weekly congregation." },
    { id: 58, title: "Islam Values Time", text: "Believers are encouraged to use time wisely." },
    { id: 59, title: "Islam Teaches Patience", text: "Patience is one of the greatest virtues." },
    { id: 60, title: "Paradise Is Promised to the Righteous", text: "Those who believe and do good will be rewarded." },
    { id: 61, title: "Hell Is a Warning", text: "Islam teaches accountability and consequences." },
    { id: 62, title: "Islam Teaches Balance", text: "Life should be lived with spiritual and worldly balance." },
    { id: 63, title: "Islam Encourages Reflection", text: "Thinking about creation strengthens faith." },
    { id: 64, title: "Islam Opposes Injustice", text: "Standing against oppression is encouraged." },
    { id: 65, title: "Islam Teaches Humility", text: "True believers remain humble." },
    { id: 66, title: "Muslims Fast Voluntarily Too", text: "Fasting is also practiced outside Ramadan." },
    { id: 67, title: "Islam Encourages Smiling", text: "Even a smile is considered charity." },
    { id: 68, title: "Neighbors Have Rights", text: "Islam commands kindness to neighbors." },
    { id: 69, title: "Islam Protects Women’s Rights", text: "Women have spiritual, social, and legal rights in Islam." },
    { id: 70, title: "Marriage Is Honored", text: "Marriage is a blessed and important institution." },
    { id: 71, title: "Islam Discourages Harmful Speech", text: "Words should be kind and meaningful." },
    { id: 72, title: "Islam Encourages Self-Improvement", text: "Believers strive to better themselves." },
    { id: 73, title: "Muslims Believe in the Hereafter", text: "Life continues after death." },
    { id: 74, title: "Islam Encourages Unity", text: "Division and hatred are discouraged." },
    { id: 75, title: "Islam Supports Peace Treaties", text: "Peace agreements are respected in Islamic teachings." },
    { id: 76, title: "Islam Forbids Cheating", text: "Dishonesty in trade and life is forbidden." },
    { id: 77, title: "Islam Promotes Responsibility", text: "Everyone has duties toward society." },
    { id: 78, title: "Islam Honors Prophets", text: "All prophets are respected equally." },
    { id: 79, title: "Islam Calls for Compassion", text: "Mercy is central to faith." },
    { id: 80, title: "Dua Is Powerful", text: "Supplication connects the believer to Allah." },
    { id: 81, title: "Islam Is Simple at Its Core", text: "Faith is based on worshiping Allah alone." },
    { id: 82, title: "Islam Encourages Good Deeds", text: "Even small good actions are rewarded." },
    { id: 83, title: "Islam Teaches Brotherhood", text: "Muslims are like one family." },
    { id: 84, title: "Islam Rejects Superstition", text: "Faith is based on truth, not myths." },
    { id: 85, title: "Islam Teaches Self-Respect", text: "Believers maintain dignity and honor." },
    { id: 86, title: "Islam Encourages Peaceful Dialogue", text: "Respectful communication is important." },
    { id: 87, title: "The Quran Mentions Maryam", text: "Mary (Maryam) is honored greatly in Islam." },
    { id: 88, title: "Islam Promotes Moderation", text: "Extremes are discouraged." },
    { id: 89, title: "Islam Is for All People", text: "It is not limited to one race or nation." },
    { id: 90, title: "Islam Encourages Charity Secretly", text: "Private charity is highly valued." },
    { id: 91, title: "Islam Teaches Trust in Allah", text: "Reliance on Allah brings peace." },
    { id: 92, title: "Islam Encourages Thankfulness", text: "Being grateful increases blessings." },
    { id: 93, title: "Islam Values Sincerity", text: "Faith must be genuine." },
    { id: 94, title: "Islam Teaches Accountability", text: "Every action matters." },
    { id: 95, title: "Islam Encourages Clean Hearts", text: "Purity includes inner character." },
    { id: 96, title: "Islam Promotes Good Relations", text: "Maintaining ties is rewarded." },
    { id: 97, title: "Islam Teaches Respect", text: "Respect for elders and others is essential." },
    { id: 98, title: "Islam Encourages Hope", text: "Believers always remain hopeful." },
    { id: 99, title: "Islam Is a Religion of Guidance", text: "It leads people toward truth and goodness." },
    { id: 100, title: "Islam Calls to Worship the Creator", text: "The ultimate purpose is knowing and worshiping Allah." },
  ];

  // Generate the full 100 facts array
  const allFacts = Array.from({ length: 100 }, (_, i) => {
    const factIndex = i + 1;
    if (factIndex <= 10) return previewFacts[i];
    
    const extendedFact = factsExtended.find(f => f.id === factIndex);
    if (extendedFact) return extendedFact;

    return { 
      id: factIndex, 
      title: `Fact #${factIndex}`, 
      text: `[Placeholder] Additional insight about Islamic history, culture, or spirituality.` 
    };
  });

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
              Discover 100 Facts 
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

      {/* Modal for 100 Facts */}
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
                <h3 className="text-4xl serif mb-2">100 Pillars of <span className="italic">Insight</span></h3>
                <p className="text-[#c5a075] text-[10px] font-black uppercase tracking-widest">Compendium of Islamic Knowledge</p>
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
