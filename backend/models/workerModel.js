const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  vorname: { type: String },
  nachname: { type: String },
  email: { type: String, unique: true, required: true },
  gebrachtVonLvl1: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker' },
  supervisor: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker' },
  lvl2: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker' },
  lvl3: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker' },
  superProvBerechtigt: { type: Boolean },
  strasse: { type: String },
  ort: { type: String },
  iban: { type: String },
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;
