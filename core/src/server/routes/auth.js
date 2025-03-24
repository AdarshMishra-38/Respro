import express from 'express';   // Import Express
import bcrypt from 'bcryptjs';   // Import bcrypt for hashing
import jwt from 'jsonwebtoken';  // Import JWT for tokens
import User from '../models/user.js'; // Import User model

const router = express.Router(); // Create router instance

// Signup Route
router.post('/signup', async (req, res) => { // POST /api/signup
  const { email, password } = req.body;      // Destructure request body

  try {                                      // Start try block
    const existingUser = await User.findOne({ email }); // Check for existing user
    if (existingUser) {                      // If user exists
      return res.status(400).json({ message: 'Email already in use' }); // Return error
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    const user = new User({ email, password: hashedPassword }); // Create user instance
    await user.save();                       // Save to MongoDB

    res.status(201).json({ message: 'User created successfully' }); // Success response
  } catch (error) {                          // Catch errors
    console.error('Signup error:', error);   // Log error
    res.status(500).json({ message: 'Server error' }); // Return server error
  }
});

// Login Route
router.post('/login', async (req, res) => {  // POST /api/login
  const { email, password } = req.body;      // Destructure request body

  try {                                      // Start try block
    const user = await User.findOne({ email }); // Find user by email
    if (!user) {                             // If no user found
      return res.status(401).json({ message: 'Invalid email' }); // Return error
    }

    const isMatch = await bcrypt.compare(password, user.password); // Compare passwords
    if (!isMatch) {                          // If passwords don’t match
      return res.status(401).json({ message: 'Invalid password' }); // Return error
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Generate JWT
    res.json({ token });                    // Return token
  } catch (error) {                         // Catch errors
    console.error('Login error:', error);   // Log error
    res.status(500).json({ message: 'Server error' }); // Return server error
  }
});

export default router; // Export router