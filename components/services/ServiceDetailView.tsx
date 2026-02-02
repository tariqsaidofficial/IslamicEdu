'use client';

import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const serviceDetails = [
  {
    id: 'mosque',
    title: 'Mosque Services',
    subtitle: 'A sacred space for worship, learning, and community.',
    image: '/images/mosque/mosque-main.jpg',
    highlights: [
      'Daily prayers and khutbahs led by qualified imams.',
      'Community gatherings and faith-centered programs.',
      'Dedicated spaces for reflection and learning.'
    ]
  },
  {
    id: 'hajj-umrah',
    title: 'Hajj & Umrah Guidance',
    subtitle: 'Support for a spiritually fulfilling pilgrimage.',
    image: '/images/general/travel.jpg',
    highlights: [
      'Preparation workshops and spiritual briefings.',
      'Travel logistics and group coordination.',
      'Trusted advisors for rituals and guidance.'
    ]
  },
  {
    id: 'ramadan',
    title: 'Ramadan Programs',
    subtitle: 'A month of devotion, learning, and community.',
    image: '/images/islamic/quran-study.jpg',
    highlights: [
      'Daily iftar gatherings and taraweeh prayers.',
      'Quran recitation and community reflections.',
      'Charity initiatives and volunteer opportunities.'
    ]
  },
  {
    id: 'tafsir-quran',
    title: 'Tafsir Quran Studies',
    subtitle: 'Deepen understanding with guided Quran studies.',
    image: '/images/prayer/prayer-guide.png',
    highlights: [
      'Structured tafsir sessions for all levels.',
      'Contextual insights with practical application.',
      'Access to curated study materials.'
    ]
  },
  {
    id: 'travel',
    title: 'Faith-Centered Travel',
    subtitle: 'Journeys that connect faith with exploration.',
    image: '/images/general/education-2.jpg',
    highlights: [
      'Group travel focused on faith and community.',
      'Cultural immersion with Islamic heritage.',
      'Guided itineraries and mentorship.'
    ]
  },
  {
    id: 'prayer',
    title: 'Prayer Support',
    subtitle: 'Resources to strengthen daily worship.',
    image: '/images/islamic/prayer-beads.jpg',
    highlights: [
      'Workshops on prayer etiquette and consistency.',
      'Guided resources for all age groups.',
      'Support for new learners and families.'
    ]
  },
  {
    id: 'events',
    title: 'Community Events',
    subtitle: 'Gatherings that nurture unity and learning.',
    image: '/images/mosque/mosque-event.jpg',
    highlights: [
      'Seasonal lectures and spiritual retreats.',
      'Family-friendly programs and exhibitions.',
      'Local and global community collaborations.'
    ]
  },
  {
    id: 'zakat-sadaqah',
    title: 'Zakat & Sadaqah',
    subtitle: 'Compassionate giving that uplifts the community.',
    image: '/images/general/community-1.jpg',
    highlights: [
      'Transparent collection and distribution.',
      'Support for local families and initiatives.',
      'Guidance on calculating and giving.'
    ]
  }
];

interface ServiceDetailViewProps {
  serviceId: string | null;
  onBack: () => void;
}

const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ serviceId, onBack }) => {
  const service = serviceDetails.find((item) => item.id === serviceId) ?? serviceDetails[0];

  return (
    <div className="fade-in">
      <section className="relative h-[450px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-3xl px-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft size={16} />
            Back to Services
          </button>
          <h1 className="text-white text-5xl md:text-7xl font-medium mb-6 serif tracking-wider leading-tight">
            {service.title}
          </h1>
          <p className="text-white/90 text-lg font-light leading-relaxed">
            {service.subtitle}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c5a075]">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl serif leading-tight">
                A Path of <span className="italic">Guidance</span> and Care
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                We design each service to create meaningful experiences that deepen faith, foster community, and encourage lifelong learning.
              </p>
            </div>
            <div className="space-y-4">
              {service.highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-gray-100 p-5 bg-[#fcf9f5]"
                >
                  <CheckCircle size={18} className="text-[#c5a075] mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailView;
