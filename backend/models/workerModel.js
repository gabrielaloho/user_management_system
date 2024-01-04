const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  // ID (unique identifier for each worker)
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  // Vorname (First Name)
  vorname: {
    type: String,
    required: true,
  },
  // Nachname (Last Name)
  nachname: {
    type: String,
    required: true,
  },
  // E-Mail (Email Address)
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: (value) => {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  // Gebracht von (Lvl1) (Brought by Level 1)
  gebrachtVonLvl1: {
    type: Number,
    default: null,
  },
  // Supervisor (Supervisor ID)
  supervisor: {
    type: Number,
    default: null,
  },
  // Lvl 2 (Level 2 ID, calculated)
  lvl2: {
    type: Number,
    default: null,
  },
  // Lvl 3 (Level 3 ID, calculated)
  lvl3: {
    type: Number,
    default: null,
  },
  // Superprov. berechtigt (Super commission permitted, boolean)
  superprovBerechtigt: {
    type: Boolean,
    default: false,
  },
  // Straße (Street)
  strasse: {
    type: String,
  },
  // Ort (Location/City)
  ort: {
    type: String,
  },
  // IBAN (International Bank Account Number)
  iban: {
    type: String,
  },
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;
