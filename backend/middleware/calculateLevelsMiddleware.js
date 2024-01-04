const Worker = require('../models/workerModel');

// Middleware to calculate 'Lvl 2' and 'Lvl 3'
exports.calculateLevels = async (req, res, next) => {
  // Implementation of the hierarchy calculation logic
  // Modify this based on your specific requirements
  try {
    // Your logic here
    // For example:
    // const lvl2 = await Worker.findOne({ _id: req.body.gebrachtVonLvl1 });
    // const lvl3 = await Worker.findOne({ _id: lvl2.gebrachtVonLvl1 });

    // Assign the calculated values to req.body.lvl2 and req.body.lvl3
    // req.body.lvl2 = lvl2 ? lvl2._id : null;
    // req.body.lvl3 = lvl3 ? lvl3._id : null;

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
