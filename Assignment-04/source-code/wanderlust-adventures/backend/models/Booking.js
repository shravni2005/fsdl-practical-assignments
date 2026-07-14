
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  packageId: { 
    type: String, 
    required: true 
  },
  packageName: { 
    type: String, 
    required: true 
  },
  fullName: { 
    type: String, 
    required: [true, 'Name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  phone: { 
    type: String, 
    required: true 
  },
  travelDate: { 
    type: String, 
    required: true 
  },
  guests: { 
    type: Number, 
    required: true, 
    min: [1, 'At least 1 guest required'] 
  },
  message: { 
    type: String 
  },
  timestamp: { 
    type: Number, 
    default: Date.now 
  }
});

// Check if model exists to prevent overwrite errors in dev environments
module.exports = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
