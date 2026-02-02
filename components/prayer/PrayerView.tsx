import React from 'react';
import Link from 'next/link';

const highlights = ['Workshops', 'Quiet Halls', 'Steps Guide'];

const pillars = [
  {
    title: 'Pillar 1',
    name: 'Shahada (Testimony)',
    description:
      'Believing and saying: "None has the right to be worshipped but Allah, and Muhammad is His messenger."',
    quote: '"The best remembrance is: La ilaha illa Allah."',
  },
  {
    title: 'Pillar 2',
    name: 'Salah (Daily Prayer)',
    description:
      'Performing the five obligatory prayers daily to maintain a direct link with Allah.',
    quote: '"Prayer is a light that guides the believer\'s path."',
  },
  {
    title: 'Pillar 3',
    name: 'Zakat (Charity)',
    description: 'Giving 2.5% of your savings to the poor and needy every year.',
    quote: '"Wealth is never diminished by giving in charity."',
  },
  {
    title: 'Pillar 4',
    name: 'Sawm (Fasting)',
    description:
      'Fasting from dawn to sunset during the month of Ramadan to grow in God-consciousness.',
    quote: '"Fasting is a shield against wrongdoing and a path to piety."',
  },
  {
    title: 'Pillar 5',
    name: 'Hajj (Pilgrimage)',
    description:
      'Traveling to Mecca once in a lifetime for those who are physically and financially able.',
    quote: '"The reward of an accepted Hajj is nothing but Paradise."',
  },
];

const PrayerView: React.FC = () => {
  return (
    <div className="fade-in">
      <section className="relative h-[520px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/islamic/prayer-beads.jpg"
            alt="Prayer service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/80 hover:text-white mb-6"
          >
            Back to Home
          </Link>
          <h1 className="text-white text-5xl md:text-7xl font-medium mb-6 serif tracking-wider leading-tight">
            About our Prayer Service
          </h1>
          <p className="text-white/90 text-lg font-light leading-relaxed mb-10">
            Resources to improve your Salah. Prayer is the direct communication between the creator and the servant.
          </p>
          <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
            Inquire Now
          </button>
        </div>
      </section>

      <section className="py-24 bg-[#fcf9f5]">
        <div className="container mx-auto px-4 md:px-12 max-w-6xl">
          <div className="text-center mb-16">
            <span className="uppercase text-[10px] tracking-[0.4em] text-[#c5a075] font-bold mb-4 block">
              Highlights
            </span>
            <h2 className="text-4xl md:text-5xl font-medium serif">Workshops, Quiet Halls, Steps Guide</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#c5a075]/20 bg-white p-8 text-center shadow-sm"
              >
                <h3 className="text-xl serif mb-3">{item}</h3>
                <p className="text-sm text-gray-500">
                  Thoughtfully designed to strengthen daily worship and create a calm space for devotion.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase text-[10px] tracking-[0.4em] text-[#c5a075] font-bold mb-4 block">
              The 5 Pillars
            </span>
            <h2 className="text-4xl md:text-5xl font-medium serif mb-4">The Foundation of Faith</h2>
            <p className="text-gray-500 text-sm">The Five Pillars of Islam</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-gray-100 p-8 bg-[#fcf9f5]">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a075]">
                  {pillar.title}
                </span>
                <h3 className="text-2xl serif mt-3 mb-4">{pillar.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{pillar.description}</p>
                <p className="text-sm italic text-gray-500">{pillar.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#fcf9f5]">
        <div className="container mx-auto px-4 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="uppercase text-[10px] tracking-[0.4em] text-[#c5a075] font-bold mb-4 block">
                How to Pray Steps
              </span>
              <h2 className="text-4xl md:text-5xl font-medium serif mb-6">Allah loves your effort - Take your time</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Use this guide as a gentle reminder that prayer is a journey of sincerity and growth. Keep practicing with
                patience and presence.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-white">
              <img
                src="/images/prayer/prayer-guide.png"
                alt="Prayer steps guide"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayerView;
