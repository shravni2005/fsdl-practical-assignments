import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 border-[40px] border-white rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 border-[30px] border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-[10px] font-black text-indigo-200 tracking-[0.5em] uppercase mb-8">Concierge Service</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[1.1]">Let's craft your <br /> next story.</h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="mailto:concierge@wanderlust.com" className="bg-white text-indigo-600 px-10 py-6 rounded-[1.5rem] font-black text-sm uppercase tracking-widest transition-all shadow-2xl hover:bg-indigo-50 text-center">
                Email Designers
              </a>
              <a href="tel:1800WANDER" className="bg-indigo-700/50 text-white border-2 border-white/20 px-10 py-6 rounded-[1.5rem] font-black text-sm uppercase tracking-widest transition-all hover:bg-indigo-700 text-center backdrop-blur-md">
                Call Specialist
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-xl group hover:bg-white/15 transition-all text-white">
              <h4 className="text-xl font-bold mb-3">Live Support</h4>
              <p className="text-indigo-100/70 text-sm font-medium">Assistance across every continent, every timezone.</p>
            </div>
            <div className="p-10 rounded-[2rem] bg-white/10 border border-white/20 backdrop-blur-xl group hover:bg-white/15 transition-all text-white">
              <h4 className="text-xl font-bold mb-3">Expert Design</h4>
              <p className="text-indigo-100/70 text-sm font-medium">Itineraries built by explorers, not algorithms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;