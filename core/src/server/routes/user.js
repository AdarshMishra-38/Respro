import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import Resume from '../models/resume.js';
import authenticate from '../middleware/auth.js';

const router = express.Router();

// Get User Profile
router.get('/profile', authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password'); // Exclude password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user); // Return email, name, etc.
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update User Profile
router.put('/profile', authenticate, async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (email) user.email = email;
    if (name) user.name = name;
    if (password) user.password = await bcrypt.hash(password, 10); // Hash new password

    await user.save();
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get All Resumes
router.get('/resumes', authenticate, async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.userId }).sort({ updatedAt: -1 });
    res.json(resumes); // Return array of resumes
  } catch (error) {
    console.error('Get resumes error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Save or Update Resume
// Save or Update Resume
router.post('/resumes', authenticate, async (req, res) => {
  const { resumeId, name, data, category } = req.body; // Add name

  try {
    if (resumeId) {
      const resume = await Resume.findOne({ _id: resumeId, userId: req.userId });
      if (!resume) {
        return res.status(404).json({ message: 'Resume not found' });
      }
      resume.name = name || resume.name; // Update name if provided
      resume.data = data || resume.data;
      resume.category = category || resume.category;
      resume.updatedAt = Date.now();
      await resume.save();
      res.json({ message: 'Resume updated successfully', resume });
    } else {
      if (!name) { // Require name for new resumes
        return res.status(400).json({ message: 'Resume name is required' });
      }
      const resume = new Resume({
        userId: req.userId,
        name,
        data,
        category: category || '',
      });
      await resume.save();
      res.status(201).json({ message: 'Resume created successfully', resume });
    }
  } catch (error) {
    console.error('Save resume error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
// Delete Resume
router.delete('/resumes/:id', authenticate, async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }
    res.json({ message: 'Resume deleted successfully' });
  } catch (error) {
    console.error('Delete resume error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



export default router;