import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import resumeRoutes from './routes/resume.js';
import userRoutes from './routes/user.js'; // Add user routes

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(`mongodb connection error ${process.env.MONGO_URI}`, err));

app.use('/api', authRoutes);
app.use('/api', resumeRoutes);
app.use('/api', userRoutes); // Mount user routes

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});