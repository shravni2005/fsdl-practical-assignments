
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Richer Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[30s] scale-105"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.4), rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.9)), url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000')` 
        }}
      />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span className="inline-block py-2 px-5 bg-indigo-500/10 backdrop-blur-xl text-indigo-300 text-[11px] font-black tracking-[0.4em] uppercase rounded-full mb-10 border border-indigo-400/20">
          The New Era of Exploration
        </span>
        <h1 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.85] drop-shadow-2xl">
          Wander <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300">Infinite.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-14 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
          Hand-crafted journeys that connect you with the soul of a destination. Where high-end luxury meets untamed adventure.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/packages" 
            className="w-full sm:w-auto px-14 py-6 bg-indigo-600 text-white font-black rounded-[1.75rem] transition-all hover:bg-indigo-500 hover:shadow-[0_0_50px_rgba(79,70,229,0.4)] transform hover:-translate-y-1.5 uppercase tracking-widest text-sm"
          >
            Explore Trips
          </Link>
          <a 
            href="#packages" 
            className="w-full sm:w-auto px-14 py-6 text-white font-black border-2 border-white/20 rounded-[1.75rem] hover:bg-white/10 transition-all backdrop-blur-xl uppercase tracking-widest text-sm"
          >
            How it works
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 hidden lg:block">
         <div className="flex items-center space-x-6 text-white/40 text-[10px] font-black tracking-[0.5em] uppercase">
            <span className="w-16 h-[2px] bg-indigo-500"></span>
            <span>The Gold Standard</span>
         </div>
      </div>
    </section>
  );
};

export default Hero;
