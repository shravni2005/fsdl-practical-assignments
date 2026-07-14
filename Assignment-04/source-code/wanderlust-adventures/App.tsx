
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Packages from './components/Packages';
import Contact from './components/Contact';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { Booking } from './types';

const App: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Simulate Database Persistence with LocalStorage
  useEffect(() => {
    const savedBookings = localStorage.getItem('wanderlust_bookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  const addBooking = (newBooking: Booking) => {
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem('wanderlust_bookings', JSON.stringify(updatedBookings));
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
