'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const TermsOfServiceView: React.FC = () => {
  return (
    <div className="fade-in">
      <section className="relative h-[350px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcf9f5] to-white"></div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-medium mb-6 serif tracking-wider leading-tight">
            Terms of <span className="italic text-[#c5a075]">Service</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Please read these terms carefully before using IslamicEdu. By accessing our platform, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl space-y-16">
          
          <div>
            <h2 className="text-3xl serif mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using IslamicEdu, you represent that you are at least 13 years old (or have parental consent if younger) and agree to comply with these Terms of Service and all applicable laws and regulations. If you do not agree to these terms, please do not use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-3xl serif mb-6">2. Use of Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Users may use IslamicEdu for lawful educational purposes only. You agree not to:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <ArrowRight size={20} className="text-[#c5a075] shrink-0 mt-0.5" />
                <span>Use the platform for any illegal activities or violate any laws</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={20} className="text-[#c5a075] shrink-0 mt-0.5" />
                <span>Harass, threaten, or abuse other users</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={20} className="text-[#c5a075] shrink-0 mt-0.5" />
                <span>Post or distribute inappropriate, hateful, or offensive content</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={20} className="text-[#c5a075] shrink-0 mt-0.5" />
                <span>Attempt to gain unauthorized access to platform systems</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={20} className="text-[#c5a075] shrink-0 mt-0.5" />
                <span>Transmit viruses, malware, or harmful code</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl serif mb-6">3. Intellectual Property Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All content on IslamicEdu—including text, images, videos, and educational materials—is the property of IslamicEdu or its content providers and is protected by copyright laws. You may not:
            </p>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Copy, reproduce, or distribute content without permission</li>
              <li>Modify, translate, or create derivative works</li>
              <li>Use content for commercial purposes without authorization</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Users retain rights to their own submissions but grant IslamicEdu a non-exclusive, royalty-free license to use submitted content for educational purposes.
            </p>
          </div>

          <div>
            <h2 className="text-3xl serif mb-6">4. User Accounts</h2>
            <p className="text-gray-600 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and are liable for all activities conducted through your account. We reserve the right to suspend or terminate accounts that violate these terms or engage in prohibited conduct.
            </p>
          </div>

          <div>
            <h2 className="text-3xl serif mb-6">5. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              IslamicEdu is provided "as is" without warranties of any kind. We are not liable for indirect, incidental, or consequential damages arising from your use of the platform, including data loss or service interruptions. Our total liability is limited to the amount you paid for our services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl serif mb-6">6. Indemnification</h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to indemnify and hold harmless IslamicEdu, its founders, employees, and partners from any claims, damages, or costs arising from your violation of these terms or misuse of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-3xl serif mb-6">7. Modifications to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Significant changes will be communicated via email or platform notification. Your continued use constitutes acceptance of updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-3xl serif mb-6">8. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms are governed by applicable local laws. Any disputes shall be resolved through appropriate legal channels.
            </p>
          </div>

          <div className="bg-[#fcf9f5] p-8 rounded-3xl border border-[#c5a075]/10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Questions?</h3>
            <p className="text-gray-600">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <p className="text-[#c5a075] font-bold mt-4">support@islamicedu.com</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsOfServiceView;
