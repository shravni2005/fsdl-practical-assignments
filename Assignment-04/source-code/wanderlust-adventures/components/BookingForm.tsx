
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TRAVEL_PACKAGES } from '../constants';
import { Booking } from '../types';

interface BookingFormProps {
  onAddBooking: (booking: Booking) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onAddBooking }) => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  const selectedPackage = TRAVEL_PACKAGES.find(p => p.id === packageId);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    guests: 1,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!selectedPackage) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold">Package not found</h2>
        <button onClick={() => navigate('/packages')} className="mt-4 text-sky-600 hover:underline">Back to Packages</button>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: Booking = {
      id: Math.random().toString(36).substr(2, 9),
      packageId: selectedPackage.id,
      packageName: selectedPackage.title,
      ...formData,
      timestamp: Date.now()
    };

    try {
      await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBooking)
      });
    } catch (err) {
      console.error('Failed to save booking to server:', err);
    }

    onAddBooking(newBooking);
    setSubmitted(true);
    setTimeout(() => navigate('/'), 3000);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-xl text-center">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-emerald-100">
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Request Sent!</h2>
          <p className="text-slate-500 font-medium mb-8">Your journey is one step closer. Our designers will reach out shortly to finalize the details.</p>
          <p className="text-xs text-slate-400 font-black tracking-widest uppercase">Redirecting to explorer home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-slate-100 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Package Preview Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl sticky top-32 border border-slate-200/50">
              <img src={selectedPackage.imageUrl} alt={selectedPackage.title} className="w-full h-56 object-cover" />
              <div className="p-8">
                <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest mb-2 block">{selectedPackage.location}</span>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{selectedPackage.title}</h3>
                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Rate</span>
                  <span className="text-3xl font-black text-indigo-600">${selectedPackage.price}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-slate-200/50">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Reserve Interest</h2>
              <p className="text-slate-500 font-medium mb-12">Submit your details and a dedicated specialist will craft a custom proposal for your trip.</p>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium"
                      placeholder="e.g. Alex Mercer"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium"
                      placeholder="alex@travel.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Phone</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium"
                      placeholder="+1 (000) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Date</label>
                    <input 
                      required
                      type="date" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium text-slate-500"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Guests</label>
                  <select 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Notes</label>
                  <textarea 
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 outline-none transition-all font-medium"
                    placeholder="Any specific preferences or questions for the designer?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-5 bg-slate-900 hover:bg-sky-600 text-white font-black rounded-2xl transition-all shadow-xl hover:shadow-sky-500/20 transform hover:-translate-y-1 uppercase tracking-widest text-sm"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
