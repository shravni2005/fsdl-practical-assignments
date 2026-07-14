
import React from 'react';
import { Link } from 'react-router-dom';
import { TRAVEL_PACKAGES } from '../constants';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Dynamic Background Light Leak */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-black text-indigo-400 tracking-[0.5em] uppercase mb-6">The Collection</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">Curated <br /><span className="text-indigo-500">Journeys.</span></h3>
          </div>
          <p className="text-slate-400 font-medium max-w-sm md:text-right leading-relaxed">
            Meticulously planned expeditions across seven continents, optimized for high-impact discovery and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {TRAVEL_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="group relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] mb-10 shadow-2xl transition-all duration-700 group-hover:-translate-y-4">
                <img 
                  src={pkg.imageUrl} 
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                
                {/* Difficulty Badge */}
                <div className={`absolute top-8 right-8 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-2xl backdrop-blur-md border border-white/10
                  ${pkg.difficulty === 'Easy' ? 'bg-emerald-500/60' : pkg.difficulty === 'Moderate' ? 'bg-amber-500/60' : 'bg-rose-500/60'}`}>
                  {pkg.difficulty}
                </div>

                {/* Hover Action */}
                <div className="absolute bottom-10 left-10 right-10">
                   <Link 
                    to={`/book/${pkg.id}`}
                    className="w-full block text-center bg-white text-slate-950 py-5 rounded-[1.25rem] text-xs font-black uppercase tracking-[0.2em] shadow-2xl opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-indigo-50"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              
              <div className="px-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.3em]">{pkg.location}</span>
                  <div className="flex items-center text-slate-500 text-xs font-bold">
                    <svg className="w-3.5 h-3.5 mr-1.5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/></svg>
                    {pkg.duration}
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-5 tracking-tight group-hover:text-indigo-400 transition-colors">{pkg.title}</h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-black text-white">${pkg.price}</span>
                    <span className="text-slate-500 text-[10px] ml-1.5 uppercase font-black tracking-widest">USD</span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all shadow-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
