import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-black tracking-tighter transition-all duration-300 ${scrolled ? 'text-slate-900 scale-95' : 'text-white'}`}>
          WANDER<span className={scrolled ? 'text-indigo-600' : 'text-sky-400'}>LUST</span>
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          <Link to="/" className={`text-[11px] font-black uppercase tracking-widest transition-colors ${scrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-white/70 hover:text-white'}`}>Home</Link>
          <Link to="/packages" className={`text-[11px] font-black uppercase tracking-widest transition-colors ${scrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-white/70 hover:text-white'}`}>Journeys</Link>
          <Link to="/contact" className={`text-[11px] font-black uppercase tracking-widest transition-colors ${scrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-white/70 hover:text-white'}`}>Concierge</Link>
          <Link to="/packages" className={`text-[11px] px-8 py-3 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg ${scrolled ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white text-slate-900 hover:bg-sky-50'}`}>
            Book Trip
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;