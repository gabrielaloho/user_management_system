// Middleware for validation
exports.validateInput = (req, res, next) => {
  // Validation logic
  // Modify this based on your specific requirements
  const { firstName, lastName, email } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  next();
};
