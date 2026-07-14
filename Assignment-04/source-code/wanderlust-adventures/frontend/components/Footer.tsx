
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 py-32 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          <div className="mb-12 lg:mb-0 max-w-sm text-slate-900">
            <Link to="/" className="text-3xl font-black tracking-tighter mb-8 block">
              WANDER<span className="text-indigo-600">LUST</span>
            </Link>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              Redefining the art of exploration. We believe travel should be deeply personal, sustainable, and profoundly beautiful.
            </p>
          </div>
          
          <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 gap-x-20 gap-y-12 text-slate-700">
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Discover</h5>
              <ul className="space-y-5 text-sm font-bold">
                <li><Link to="/packages" className="hover:text-indigo-600 transition-colors">Destinations</Link></li>
                <li><Link to="/packages" className="hover:text-indigo-600 transition-colors">Our Story</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Support</h5>
              <ul className="space-y-5 text-sm font-bold">
                <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Concierge</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Planning FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">System</h5>
              <ul className="space-y-5 text-sm font-bold">
                <li><Link to="/admin" className="text-indigo-600 hover:text-indigo-800 transition-colors">Admin Log</Link></li>
                <li><span className="text-emerald-500">Live Status</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-slate-200 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2024 Wanderlust Adventures Agency • All Rights Reserved</p>
          <div className="flex space-x-10">
             <span>SF / CA</span>
             <span>LON / UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
