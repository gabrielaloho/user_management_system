// app.js

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const workersRoutes = require('./routes/workersRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
config.connectToMongoDB()
  .then((mongoClient) => {
    // Specify the database to use
    const db = mongoClient.db('workerdb');

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
