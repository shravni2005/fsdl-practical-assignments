import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Global Curation',
      description: 'We hand-select only the most unique and sustainable travel experiences across the globe.',
      color: 'bg-amber-500',
      textColor: 'text-amber-700'
    },
    {
      title: 'Seamless Booking',
      description: 'A frictionless process from discovery to departure. We handle the logistics, you enjoy.',
      color: 'bg-indigo-500',
      textColor: 'text-indigo-700'
    },
    {
      title: 'Local Impact',
      description: 'Every trip supports local communities and promotes authentic cultural preservation.',
      color: 'bg-emerald-500',
      textColor: 'text-emerald-700'
    }
  ];

  return (
    <section id="features" className="py-32 bg-amber-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className={`w-14 h-1.5 ${feature.color} mb-8 rounded-full transition-all group-hover:w-24 shadow-sm`}></div>
              <span className={`text-[10px] font-black mb-4 tracking-[0.3em] uppercase ${feature.textColor}`}>Philosophy 0{idx + 1}</span>
              <h4 className="text-2xl font-bold mb-6 text-amber-950 tracking-tight">{feature.title}</h4>
              <p className="text-amber-900/60 leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;