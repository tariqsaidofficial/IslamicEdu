
import React from 'react';
import AboutHero from './AboutHero';
import AboutSection from './AboutSection';
import FounderProfile from './FounderProfile';
import PodcastSection from './PodcastSection';
import IslamicStudiesSection from './IslamicStudiesSection';

const AboutView: React.FC = () => {
  return (
    <div className="fade-in">
      <AboutHero />
      
      {/* Introduction to the Website */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center space-y-8">
          <div className="inline-block px-6 py-2 bg-[#fcf9f5] border border-[#c5a075]/20 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a075]">
            About IslamicEdu
          </div>
          <h2 className="text-5xl serif leading-tight">
            An Enlightenment for <br /> <span className="italic">Every Learner</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            IslamicEdu was founded with a singular purpose: to provide a modern, authentic gateway to Islamic knowledge. Our platform serves as a holistic mission to integrate faith with academic rigor, ensuring every student has the tools to thrive in this world and the hereafter.
          </p>
          <div className="w-16 h-1 bg-[#c5a075] mx-auto"></div>
        </div>
      </section>

      <IslamicStudiesSection />

      <FounderProfile />
      <PodcastSection />
      
      <AboutSection />
      
      {/* Footer Insight */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl text-center">
          <h2 className="text-4xl serif mb-8">Our Holistic Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4">
              <h3 className="font-bold text-[#c5a075] tracking-widest uppercase text-xs">A Central Hub</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                As a Metropol Islamic center, we integrate daily life with spiritual practice, creating a vibrant hub for the community to grow together.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-[#c5a075] tracking-widest uppercase text-xs">Madrasa System</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our Al-Waha inspired Madrasa combines traditional Islamic sciences with modern academic rigor to produce well-rounded K-12 students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
