
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const Booking = require('./models/Booking');

const app = express();
const PORT = process.env.PORT || 5000;
const LOCAL_DB_PATH = path.join(__dirname, 'database.json');

/**
 * 🟢 MONGODB ATLAS CONNECTION 🟢
 * User: Travel | Pass: 123
 */
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/wanderlust";

app.use(cors());
app.use(bodyParser.json());

// Initialize Local JSON DB if it doesn't exist (Backup fallback)
if (!fs.existsSync(LOCAL_DB_PATH)) {
  fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify([]));
}

let connectionSource = "Connecting...";
let connectionError = null;

// Attempt MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log(`✅ SUCCESS: Connected to MongoDB Atlas Cluster0`);
    console.log(`📂 Database: wanderlust`);
    connectionSource = "Cloud MongoDB (Atlas)";
    connectionError = null;
  })
  .catch(err => {
    console.error('❌ CONNECTION ERROR:', err.message);
    connectionSource = "Local database.json (Fallback Active)";
    connectionError = err.message;
  });

// API Routes
app.get('/api/status', (req, res) => {
  res.json({ 
    source: connectionSource, 
    uri: MONGODB_URI.replace(/:([^:@]+)@/, ":****@"),
    error: connectionError,
    readyState: mongoose.connection.readyState
  });
});

app.get('/api/bookings', async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const bookings = await Booking.find().sort({ timestamp: -1 });
      res.json(bookings);
    } else {
      const data = fs.readFileSync(LOCAL_DB_PATH);
      const bookings = JSON.parse(data);
      res.json(bookings.sort((a, b) => b.timestamp - a.timestamp));
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching", error: error.message });
  }
});

app.post('/api/bookings', async (req, res) => {
  try {
    const bookingData = { ...req.body, timestamp: Date.now() };

    if (mongoose.connection.readyState === 1) {
      const newBooking = new Booking(bookingData);
      const saved = await newBooking.save();
      console.log('📝 Saved new booking to MongoDB Atlas');
      res.status(201).json(saved);
    } else {
      const data = fs.readFileSync(LOCAL_DB_PATH);
      const bookings = JSON.parse(data);
      const newLocalBooking = { ...bookingData, id: Math.random().toString(36).substr(2, 9) };
      bookings.push(newLocalBooking);
      fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(bookings, null, 2));
      console.log('📝 MongoDB unavailable, saved to local JSON instead');
      res.status(201).json(newLocalBooking);
    }
  } catch (error) {
    console.error('❌ Failed to save booking:', error.message);
    res.status(400).json({ message: "Save failed", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Wanderlust API running at http://localhost:${PORT}`);
});
