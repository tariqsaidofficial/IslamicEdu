'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const PrivacyPolicyView: React.FC = () => {
  return (
    <div className="fade-in">
      <section className="relative h-[350px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcf9f5] to-white"></div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-medium mb-6 serif tracking-wider leading-tight">
            Privacy <span className="italic text-[#c5a075]">Policy</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Your privacy is important to us. This document outlines how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl space-y-16">
          
          <div>
            <h2 className="text-3xl serif mb-6">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information to provide, improve, and support our services. This includes:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <ArrowRight size={20} className="text-[#c5a075] shrink-0 mt-0.5" />
                <span><strong>Personal Information:</strong> Name, email, phone number provided during registration</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={20} className="text-[#c5a075] shrink-0 mt-0.5" />
                <span><strong>Usage Data:</strong> Pages visited, time spent, interactions with content</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={20} className="text-[#c5a075] shrink-0 mt-0.5" />
                <span><strong>Device Information:</strong> Browser type, IP address, operating system</span>
              </li>
              <li className="flex gap-3">
                <ArrowRight size={20} className="text-[#c5a075] shrink-0 mt-0.5" />
                <span><strong>Cookies:</strong> Small files used to remember preferences and improve experience</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl serif mb-6">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use collected information to:
            </p>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Provide and improve our educational services</li>
              <li>Personalize your learning experience</li>
              <li>Send educational updates and newsletters (with your consent)</li>
              <li>Respond to inquiries and support requests</li>
              <li>Analyze usage patterns to enhance platform functionality</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl serif mb-6">3. Data Protection</h2>
            <p className="text-gray-600 leading-relaxed">
              We employ industry-standard security measures including encryption, secure servers, and regular security audits to protect your data. However, no online platform is completely secure, and we encourage you to maintain strong passwords and report suspicious activity.
            </p>
          </div>

          <div>
            <h2 className="text-3xl serif mb-6">4. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability in electronic format</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl serif mb-6">5. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed">
              We use Google Gemini AI for educational support. Your chats with our AI mentor may be processed through their services. Please review their privacy policy for additional information.
            </p>
          </div>

          <div>
            <h2 className="text-3xl serif mb-6">6. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of significant changes via email or platform announcement. Your continued use constitutes acceptance of updates.
            </p>
          </div>

          <div className="bg-[#fcf9f5] p-8 rounded-3xl border border-[#c5a075]/10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-[#c5a075] font-bold mt-4">support@islamicedu.com</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyView;
