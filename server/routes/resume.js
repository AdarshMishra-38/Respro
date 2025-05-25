import express from 'express';     // Import Express
import { spawn } from 'child_process'; // Import spawn
import authenticate from '../middleware/auth.js'; // Import JWT middleware

const router = express.Router(); // Create router instance

// Resume Category Prediction (Protected)
router.post('/resume/category', authenticate, (req, res) => { // POST /api/resume/category
  const resumeString = JSON.stringify(req.body);
  
  // Change 'python3' to 'python' for Windows
  const pythonProcess = spawn('python', ['src/server/ml-model/app.py', resumeString]);

  let category = '';
  let errorOutput = '';

  pythonProcess.stdout.on('data', (data) => {
    category += data.toString().trim();
  });

  pythonProcess.stderr.on('data', (data) => {
    errorOutput += data.toString();
  });

  pythonProcess.on('close', (code) => {
    if (code === 0 && category) {
      res.status(200).json({ message: 'Category predicted successfully', category });
    } else {
      res.status(500).json({ error: 'Failed to predict category', details: errorOutput });
    }
  });

});

export default router; // Export router