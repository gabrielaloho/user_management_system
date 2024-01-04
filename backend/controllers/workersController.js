const Worker = require('../models/workerModel');

// Controller to add a new worker
exports.addWorker = async (req, res) => {
  try {
    // Add logic for calculating 'Lvl 2' and 'Lvl 3' based on hierarchy if needed

    const newWorker = new Worker(req.body);
    
    // Mongoose validation for uniqueness and other field validations
    // For example, validating that email is unique
    const existingWorker = await Worker.findOne({ email: newWorker.email });
    if (existingWorker) {
      return res.status(400).json({ error: 'Email address must be unique.' });
    }

    await newWorker.save();
    res.status(201).json(newWorker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to edit an existing worker by ID
exports.editWorker = async (req, res) => {
  const { id } = req.params;
  try {
    // Add logic for calculating 'Lvl 2' and 'Lvl 3' based on hierarchy if needed

    const updatedWorker = await Worker.findByIdAndUpdate(id, req.body, { new: true });

    // Mongoose validation for uniqueness and other field validations
    // For example, validating that email is unique
    const existingWorker = await Worker.findOne({ email: updatedWorker.email, _id: { $ne: id } });
    if (existingWorker) {
      return res.status(400).json({ error: 'Email address must be unique.' });
    }

    res.status(200).json(updatedWorker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
