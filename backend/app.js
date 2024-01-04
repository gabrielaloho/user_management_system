// app.js

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');  // Import Passport
const config = require('./config');
const workersRoutes = require('./routes/workersRoutes');
const passportStrategy = require('./passportStrategy');  // Import your Passport strategy

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
config.connectToMongoDB()
  .then((mongoClient) => {
    // Specify the database to use
    const db = mongoClient.db('workerdb');

    // Configure Passport
    passportStrategy(passport);  // Pass Passport to your strategy configuration function

    // Passport middleware
    app.use(passport.initialize());

    // Routes
    app.use('/api/workers', workersRoutes);

    // Server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the process on connection failure
  });
