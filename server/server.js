import express, { json } from 'express';
import { spawn } from 'child_process';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(json());
app.use(cors());

app.post('/resume/category', (req, res) => {
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});