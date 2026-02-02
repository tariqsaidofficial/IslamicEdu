
import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, currentPage, setCurrentPage }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const isLightMode = isScrolled || isSearchOpen || isMobileMenuOpen;
  const logoUrl = "https://res.cloudinary.com/do5bwj81j/image/upload/v1770008761/Asset_3_gmnqey.webp";
  
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Programs', id: 'programs' },
    { name: 'Events', id: 'events' },
  ];

  const searchableItems = [
    { title: "Grand Mosque", link: "home", section: "Home" },
    { title: "Education Center", link: "about", section: "Education" },
    { title: "Pathways to Worship", link: "services", section: "Services" },
    { title: "Hajj & Umrah", link: "services", section: "Services" },
    { title: "K-12 Programs", link: "about", section: "Programs" },
    { title: "Ramadan Calendar", link: "services", section: "Events" }
  ];

  const filteredItems = searchQuery 
    ? searchableItems.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
          isLightMode 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl relative">
          
          <div 
            className="flex items-center gap-4 cursor-pointer group" 
            onClick={() => { setCurrentPage('home'); setIsSearchOpen(false); }}
          >
            <div className="relative w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
              <img src={logoUrl} alt="IslamicEdu Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-[0.15em] transition-colors duration-300 uppercase ${isLightMode ? 'text-gray-900' : 'text-white'}`}>
                IslamicEdu
              </span>
              <span className={`text-[8px] font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${isLightMode ? 'text-[#c5a075]' : 'text-white/60'}`}>
                Enlightened Learning
              </span>
            </div>
          </div>

          <nav className={`hidden lg:flex items-center gap-10 transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => link.id === 'programs' || link.id === 'events' ? null : setCurrentPage(link.id)}
                  className={`relative py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 group
                    ${isActive 
                      ? 'text-[#c5a075]' 
                      : (isLightMode ? 'text-gray-600 hover:text-[#c5a075]' : 'text-white hover:text-white/80')
                    }
                  `}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#c5a075] transition-transform duration-300 origin-left 
                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                  `}></span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isLightMode ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Search"
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                isLightMode ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`absolute top-full left-0 right-0 bg-white border-t border-gray-50 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
          isSearchOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="container mx-auto max-w-5xl px-6 py-12">
            <div className="relative mb-12">
              <input 
                autoFocus
                type="text" 
                placeholder="Search IslamicEdu content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-3xl md:text-5xl serif border-b-2 border-gray-100 focus:border-[#c5a075] py-6 outline-none transition-all placeholder:text-gray-200"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => { setCurrentPage(item.link); setIsSearchOpen(false); }}
                    className="flex items-center justify-between p-5 border border-gray-100 rounded-2xl hover:bg-[#fcf9f5] hover:border-[#c5a075]/30 text-left transition-all group"
                  >
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#c5a075] block mb-1">{item.section}</span>
                      <h4 className="text-lg serif text-gray-800 group-hover:text-gray-900">{item.title}</h4>
                    </div>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-[#c5a075] group-hover:translate-x-1 transition-all" />
                  </button>
                ))
              ) : (
                <p className="col-span-full text-center py-12 text-gray-400 italic">No matches found. Try searching for 'Services' or 'Education'.</p>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[110] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute top-0 right-0 bottom-0 w-[80%] max-w-xs bg-white shadow-2xl transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <img src={logoUrl} alt="IslamicEdu Logo" className="w-8 h-8 object-contain" />
                <span className="text-lg font-black tracking-widest uppercase">IslamicEdu</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-gray-900"><X size={24} /></button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { if (link.id !== 'programs' && link.id !== 'events') { setCurrentPage(link.id); setIsMobileMenuOpen(false); } }}
                  className={`text-left py-2 text-sm font-black uppercase tracking-[0.2em] transition-all flex items-center justify-between ${currentPage === link.id ? 'text-[#c5a075]' : 'text-gray-600'}`}
                >
                  {link.name} <ChevronRight size={16} />
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
