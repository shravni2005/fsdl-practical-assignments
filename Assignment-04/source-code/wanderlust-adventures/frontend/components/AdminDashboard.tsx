
import React, { useEffect, useState } from 'react';
import { Booking } from '../types';

const AdminDashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [dbStatus, setDbStatus] = useState({ source: 'Loading...', uri: '', error: null, readyState: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookingsRes, statusRes] = await Promise.all([
          fetch('/api/bookings'),
          fetch('/api/status')
        ]);
        
        if (bookingsRes.ok) setBookings(await bookingsRes.json());
        if (statusRes.ok) setDbStatus(await statusRes.json());
      } catch (e) {
        console.error("Dashboard fetch failed");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return (
    <div className="pt-40 flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-6"></div>
      <div className="font-black uppercase tracking-widest text-slate-400">Syncing with MongoDB...</div>
    </div>
  );

  const isCloud = dbStatus.source.includes('Atlas');

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
      <div className="container mx-auto px-6">
        
        {/* Connection Status Panel */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-[10px] font-black text-indigo-600 tracking-[0.5em] uppercase mb-4 flex items-center">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
              System Overview
            </h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">Inquiry Management.</h3>
            <p className="text-slate-500 font-medium">Monitoring all incoming travel requests stored in your NoSQL cluster.</p>
          </div>

          <div className={`p-8 rounded-[2rem] border-2 shadow-sm transition-all ${isCloud ? 'bg-emerald-50 border-emerald-100' : 'bg-amber-50 border-amber-100'}`}>
            <div className="flex items-center justify-between mb-4">
               <span className={`text-[10px] font-black uppercase tracking-widest ${isCloud ? 'text-emerald-600' : 'text-amber-600'}`}>
                 Connection: {isCloud ? 'Online' : 'Fallback'}
               </span>
               <div className={`w-3 h-3 rounded-full ${isCloud ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></div>
            </div>
            <div className="text-xl font-black text-slate-900 mb-2">{dbStatus.source}</div>
            <div className="text-[10px] font-mono text-slate-500 break-all bg-white/50 p-2 rounded-lg border border-slate-200/50">
              {dbStatus.uri}
            </div>
            {dbStatus.error && (
              <div className="mt-4 text-[10px] text-rose-600 font-bold bg-rose-50 p-2 rounded-lg border border-rose-100">
                Error: {dbStatus.error}
              </div>
            )}
          </div>
        </div>

        {/* Troubleshooting Section if not connected to Cloud */}
        {!isCloud && (
          <div className="mb-12 bg-white rounded-[2rem] p-10 border-2 border-indigo-100 shadow-xl shadow-indigo-100/20">
            <h4 className="text-xl font-black text-slate-900 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Why is my database not showing in Compass?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-black text-sm">1</div>
                <h5 className="font-bold text-slate-900">Lazy Creation</h5>
                <p className="text-sm text-slate-500">The <b>'wanderlust'</b> database only appears in Compass AFTER you submit your first booking. Go book a trip!</p>
              </div>
              <div className="space-y-3">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-black text-sm">2</div>
                <h5 className="font-bold text-slate-900">Network Access</h5>
                <p className="text-sm text-slate-500">In MongoDB Atlas, click <b>Network Access</b> and add <b>0.0.0.0/0</b> to allow your current IP to connect.</p>
              </div>
              <div className="space-y-3">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-black text-sm">3</div>
                <h5 className="font-bold text-slate-900">User Roles</h5>
                <p className="text-sm text-slate-500">Ensure the user <b>'Travel'</b> has the 'Atlas Admin' or 'Read and Write to any database' role in Database Access.</p>
              </div>
            </div>
          </div>
        )}

        <div className="mb-8 flex space-x-4">
          <div className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">
            Records: {bookings.length}
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95"
          >
            Refresh Log
          </button>
        </div>

        {/* Inquiry Table */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Received</th>
                  <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Explorer</th>
                  <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Trip Info</th>
                  <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center">Guests</th>
                  <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bookings.map((b, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-10 py-8">
                      <div className="text-sm font-bold text-slate-900">{new Date(b.timestamp).toLocaleDateString()}</div>
                      <div className="text-[10px] font-black text-indigo-400 uppercase tracking-tighter">{new Date(b.timestamp).toLocaleTimeString()}</div>
                    </td>
                    <td className="px-10 py-8">
                      <div className="text-sm font-black text-slate-900 mb-1">{b.fullName}</div>
                      <div className="text-xs text-slate-500 font-medium">{b.email}</div>
                      <div className="text-[10px] text-slate-400 font-bold mt-2 uppercase">{b.phone}</div>
                    </td>
                    <td className="px-10 py-8">
                      <div className="text-sm font-bold text-slate-700 mb-1">{b.packageName}</div>
                      <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[9px] font-black uppercase tracking-widest">
                        {b.travelDate}
                      </div>
                    </td>
                    <td className="px-10 py-8 text-center">
                      <span className="text-sm font-black text-slate-900">{b.guests}</span>
                    </td>
                    <td className="px-10 py-8">
                       <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-[9px] font-black uppercase tracking-widest">New Lead</span>
                    </td>
                  </tr>
                ))}
                {bookings.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-10 py-32 text-center">
                      <div className="max-w-md mx-auto">
                        <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-slate-200">
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                        </div>
                        <h4 className="text-xl font-black text-slate-900 mb-2">The cloud is empty.</h4>
                        <p className="text-slate-400 font-bold text-sm">Once a traveler submits a booking, it will be instantly synced to your MongoDB Atlas cluster and appear here.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
