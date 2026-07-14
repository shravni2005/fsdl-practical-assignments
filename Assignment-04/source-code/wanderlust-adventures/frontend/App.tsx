
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Packages from './components/Packages';
import Contact from './components/Contact';
import BookingForm from './components/BookingForm';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import { Booking } from './types';

const App: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/bookings');
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        } else {
          const saved = localStorage.getItem('wanderlust_bookings');
          if (saved) setBookings(JSON.parse(saved));
        }
      } catch (e) {
        const saved = localStorage.getItem('wanderlust_bookings');
        if (saved) setBookings(JSON.parse(saved));
      }
    };
    fetchBookings();
  }, []);

  const addBooking = async (newBooking: Booking) => {
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBooking),
      });
      
      if (response.ok) {
        const savedBooking = await response.json();
        setBookings(prev => [savedBooking, ...prev]);
      } else {
        throw new Error("Server storage failed");
      }
    } catch (e) {
      const localBooking = { ...newBooking, id: Math.random().toString(36).substr(2, 9) };
      const updated = [localBooking, ...bookings];
      setBookings(updated);
      localStorage.setItem('wanderlust_bookings', JSON.stringify(updated));
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <Packages />
                <Contact />
              </>
            } />
            <Route path="/packages" element={<Packages />} />
            <Route path="/book/:packageId" element={<BookingForm onAddBooking={addBooking} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
