const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your user schema fields
  // For example:
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
