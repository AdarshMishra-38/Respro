import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Details from "./details";
import Preview from "./preview";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/index.css";
import { DataContext } from './context/dataContext';
import Footer from '../footer/footer';

export default function Builder() {
  const { resumeData, setResumeData } = useContext(DataContext); // Updated destructuring
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [resumeId, setResumeId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const resumeName = location.state?.resumeName || 'Untitled Resume';
  const initialResumeData = location.state?.resumeData;
  const initialResumeId = location.state?.resumeId;

  // Initialize resumeData on mount or navigation change
  useEffect(() => {
    if (!setResumeData) {
      console.error('setResumeData is not available in DataContext');
      setMessage('Error: Unable to initialize resume data');
      return;
    }

    if (initialResumeData) {
      // Load existing resume for editing
      setResumeData(initialResumeData);
      setResumeId(initialResumeId);
      setCategory(initialResumeData.category || '');
    } else {
      // Initialize new resume with resumeName
      const newResumeData = {
        basicInfo: { name: '', email: '', phone: '', address: '', linkedin: '', github: '' },
        workExperience: [{ company: '', role: '', startDate: '', endDate: '', description: '' }],
        education: [{ institution: '', percentage: '', degree: '', startDate: '', endDate: '', grade: '' }],
        skills: [],
        projects: [{ title: '', description: '', technologies: [], link: '' }],
        achievements: [{ title: '', description: '' }],
        summary: '',
        others: '',
        resumeName,
      };
      setResumeData(newResumeData);
      setResumeId(null);
      setCategory('');
    }
  }, [setResumeData, resumeName, initialResumeData, initialResumeId]);

  const handleGetCategory = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Please log in to predict resume category');
      setCategory('');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/api/resume/category',
        resumeData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCategory(response.data.category);
      setMessage(response.data.message);
      await handleSaveResume(response.data.category);
      navigate('/profile');
    } catch (error) {
      setMessage(error.response?.data.error || 'Failed to predict category');
      setCategory('');
    }
  };

  const handleSaveResume = async (category) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'http://localhost:3001/api/resumes',
        { resumeId, name: resumeName, data: resumeData, category },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResumeId(response.data.resume._id);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data.message || 'Failed to save resume');
    }
  };

  return (
    <>
  <div className="container my-4">
  <div className="row gx-4">
    <div className="col-6">
      <div className="bg-white rounded-3 shadow p-4 ">
        <Details />
      </div>
    </div>
    <div className="col-6">
      <div className="bg-white rounded-3 shadow p-4 border border-light">
        <Preview onGetCategory={handleGetCategory} category={category} message={message} />
      </div>
    </div>
  </div>
</div>
  <Footer/>
  </>
  );
}