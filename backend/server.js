const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');

// Connect to MongoDB for testing
beforeAll(async () => {
  await mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });
});

// Close the MongoDB connection after testing
afterAll(async () => {
  await mongoose.connection.close();
});

module.exports = app;
