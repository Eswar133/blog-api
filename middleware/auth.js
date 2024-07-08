const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, config.secret);
    req.user = await User.findById(decoded.id);
    if (!req.user) return res.status(401).json({ message: 'Invalid token.' });
    next();
  } catch (ex) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
