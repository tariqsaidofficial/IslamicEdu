
import React from 'react';

const TermsOfServiceView: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white animate-in fade-in duration-700">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <span className="text-[#c5a075] uppercase tracking-[0.5em] font-black text-[10px] mb-6 block">Legal Information</span>
        <h1 className="text-5xl md:text-7xl serif mb-12">Our <span className="italic">Terms</span></h1>
        
        <div className="prose prose-lg text-gray-600 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 serif border-b border-[#c5a075]/20 pb-4 mb-6">Agreement to Terms</h2>
            <p>
              By accessing IslamicEdu, you agree to be bound by these terms of service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 serif border-b border-[#c5a075]/20 pb-4 mb-6">Use License</h2>
            <p>
              Permission is granted to temporarily use the materials on IslamicEdu's platform for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 serif border-b border-[#c5a075]/20 pb-4 mb-6">Educational Purpose</h2>
            <p>
              IslamicEdu is an educational platform. While we strive for authentic and accurate Islamic knowledge, users are encouraged to consult qualified scholars for specific religious rulings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 serif border-b border-[#c5a075]/20 pb-4 mb-6">Disclaimer</h2>
            <p>
              The materials on IslamicEdu are provided on an 'as is' basis. IslamicEdu makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 serif border-b border-[#c5a075]/20 pb-4 mb-6">Modifications</h2>
            <p>
              IslamicEdu may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceView;
