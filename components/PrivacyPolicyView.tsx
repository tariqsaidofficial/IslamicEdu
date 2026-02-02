
import React from 'react';

const PrivacyPolicyView: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white animate-in fade-in duration-700">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <span className="text-[#c5a075] uppercase tracking-[0.5em] font-black text-[10px] mb-6 block">Legal Information</span>
        <h1 className="text-5xl md:text-7xl serif mb-12">Privacy <span className="italic">Policy</span></h1>
        
        <div className="prose prose-lg text-gray-600 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 serif border-b border-[#c5a075]/20 pb-4 mb-6">Introduction</h2>
            <p>
              At IslamicEdu, we value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you interact with our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 serif border-b border-[#c5a075]/20 pb-4 mb-6">Data Collection</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or use our AI educational tools. This may include your name, email address, and learning preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 serif border-b border-[#c5a075]/20 pb-4 mb-6">Use of AI Services</h2>
            <p>
              Our platform uses advanced AI models to provide educational suggestions. Interactions with IslamicEduBot are processed to improve your learning experience but are handled with strict confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 serif border-b border-[#c5a075]/20 pb-4 mb-6">Security</h2>
            <p>
              We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 serif border-b border-[#c5a075]/20 pb-4 mb-6">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact our support team.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyView;
