// workersRoutes.js

const express = require('express');
const router = express.Router();
const passport = require('passport'); // Make sure to import passport if needed

// Import your worker controller or handler
//const workerController = require('../controllers/workerController');
const workerController = require('./controllers/workerController');




// Example route
router.get('/', passport.authenticate('jwt', { session: false }), workerController.getAllWorkers);

// Add more routes as needed

module.exports = router;
