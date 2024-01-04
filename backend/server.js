const { connectToMongoDB } = require('./config');
const mongoose = require('mongoose');
const app = require('./app');

// Connect to MongoDB for testing
beforeAll(async () => {
  // Connect to MongoDB using the same function used in app.js
  await connectToMongoDB();
});

// Close the MongoDB connection after testing
afterAll(async () => {
  // Close the MongoDB connection
  await mongoose.connection.close();
});

module.exports = app;
