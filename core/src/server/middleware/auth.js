import jwt from 'jsonwebtoken'; // Import JWT

const authenticate = (req, res, next) => { // Middleware function
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from header

  if (!token) {                         // If no token
    return res.status(401).json({ message: 'No token provided' }); // Return error
  }

  try {                                 // Try to verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.userId = decoded.userId;        // Attach userId to request
    next();                             // Proceed to route handler
  } catch (error) {                     // If verification fails
    res.status(401).json({ message: 'Invalid token' }); // Return error
  }
};

export default authenticate; // Export middleware