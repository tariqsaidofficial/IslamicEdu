'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { PageType } from '@/types';

interface FooterProps {
  setCurrentPage?: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-[#fcf9f5] pt-24 pb-12 relative">
      <div className="container mx-auto px-4 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <h2 className="text-6xl font-medium serif leading-tight mb-8">
              Uniting <span className="italic">Hearts</span> <br /> in Worship
            </h2>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#c5a075] transition-all"><Facebook size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-[#c5a075] transition-all"><Twitter size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-[#c5a075] transition-all"><Instagram size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-[#c5a075] transition-all"><Youtube size={18} /></a>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-bold uppercase text-xs tracking-widest mb-8 text-gray-800">SERVICES</h3>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Mosque</a></li>
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Hajj & Umrah</a></li>
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Zakat Sadaqah</a></li>
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Ramadan</a></li>
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Tafsir Quran</a></li>
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Travel</a></li>
                <li><a href="/prayer" className="hover:text-[#c5a075] transition-colors">• Prayer</a></li>
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Events</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold uppercase text-xs tracking-widest mb-8 text-gray-800">PROGRAMS</h3>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Madrasa Education</a></li>
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Quranic Studies</a></li>
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Community Initiatives</a></li>
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Spiritual Development</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold uppercase text-xs tracking-widest mb-8 text-gray-800">LINKS</h3>
              <ul className="space-y-4 text-sm text-gray-500 font-medium">
                <li><button onClick={() => setCurrentPage?.('about')} className="hover:text-[#c5a075] transition-colors">• About Us</button></li>
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Contact Us</a></li>
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Our Mission</a></li>
                <li><a href="#" className="hover:text-[#c5a075] transition-colors">• Resources</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-12 border-t border-[#c5a075]/10 space-y-6">
           <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
             <button onClick={() => setCurrentPage?.('privacy')} className="hover:text-[#c5a075]">Privacy Policy</button>
             <button onClick={() => setCurrentPage?.('terms')} className="hover:text-[#c5a075]">Our Terms</button>
           </div>
           <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
             Built with ❤️ by <a href="https://portfolio.dxbmark.com/" target="_blank" rel="noopener noreferrer" className="text-[#c5a075] hover:underline">Tariq Said</a>.
           </p>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 -mb-20 pointer-events-none opacity-[0.03] z-0">
        <svg width="600" height="600" viewBox="0 0 100 100" className="fill-[#c5a075]">
          <path d="M50 0L61.2 38.8L100 50L61.2 61.2L50 100L38.8 61.2L0 50L38.8 38.8Z" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
