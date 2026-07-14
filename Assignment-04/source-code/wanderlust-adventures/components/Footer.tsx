
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 py-32 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
          <div className="mb-12 lg:mb-0 max-w-sm">
            <Link to="/" className="text-3xl font-black tracking-tighter text-slate-900 mb-8 block">
              WANDER<span className="text-indigo-600">LUST</span>
            </Link>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              Redefining the art of exploration. We believe travel should be deeply personal, sustainable, and profoundly beautiful.
            </p>
            <div className="flex space-x-4">
               {['IG', 'TW', 'FB', 'LI'].map(sm => (
                 <a key={sm} href="#" className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[10px] font-black text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:shadow-xl transition-all">
                   {sm}
                 </a>
               ))}
            </div>
          </div>
          
          <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 gap-x-20 gap-y-12">
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Discover</h5>
              <ul className="space-y-5">
                <li><Link to="/packages" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Destinations</Link></li>
                <li><Link to="/packages" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Our Story</Link></li>
                <li><Link to="/packages" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">The Journal</Link></li>
                <li><Link to="/packages" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Impact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Support</h5>
              <ul className="space-y-5">
                <li><Link to="/contact" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Concierge</Link></li>
                <li><Link to="/contact" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Planning FAQ</Link></li>
                <li><Link to="/contact" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Safety Protocols</Link></li>
                <li><Link to="/contact" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Company</h5>
              <ul className="space-y-5">
                <li><Link to="/contact" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Privacy</Link></li>
                <li><Link to="/contact" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Terms</Link></li>
                <li><Link to="/contact" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] gap-6">
          <p>© 2024 Wanderlust Adventures Agency • All Rights Reserved</p>
          <div className="flex space-x-10">
             <span className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>SF / CA</span>
             <span className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>LON / UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
