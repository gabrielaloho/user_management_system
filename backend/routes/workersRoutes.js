const express = require('express');
const router = express.Router();
const Worker = require('../models/workerModel');
const passport = require('passport');

// Middleware for email validation
const validateWorkerEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Check if the email is already in use
  Worker.findOne({ email: email.toLowerCase() }, (err, existingWorker) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (existingWorker) {
      return res.status(400).json({ error: 'Email address already in use' });
    }

    next();
  });
};

// Endpoint to add a new worker entry
router.post('/', validateWorkerEmail, async (req, res) => {
  try {
    const newWorker = new Worker(req.body);
    await newWorker.save();
    res.status(201).json(newWorker);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Endpoint to edit an existing worker entry by ID
router.put('/:id', validateWorkerEmail, async (req, res) => {
  const { id } = req.params;
  try {
    const updatedWorker = await Worker.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedWorker) {
      return res.status(404).json({ error: 'Worker not found' });
    }
    res.status(200).json(updatedWorker);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Protected routes with JWT authentication
router.post('/', passport.authenticate('jwt', { session: false }), validateWorkerEmail, async (req, res) => {
  // Existing implementation for protected route
});

router.put('/:id', passport.authenticate('jwt', { session: false }), validateWorkerEmail, async (req, res) => {
  // Existing implementation for protected route
});

// ... (other routes and middleware if any)

module.exports = router;
