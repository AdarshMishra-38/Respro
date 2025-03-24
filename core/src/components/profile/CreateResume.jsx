import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateResume = () => {
  const [resumeName, setResumeName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeName.trim()) {
      setMessage('Please enter a resume name');
      return;
    }
    // Redirect to editor with resumeName as state
    navigate('/editor', { state: { resumeName } });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Create New Resume</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="resumeName" className="form-label">Resume Name</label>
            <input
              type="text"
              className="form-control"
              id="resumeName"
              value={resumeName}
              onChange={(e) => setResumeName(e.target.value)}
              placeholder="e.g., Resume 1"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Create Resume</button>
        </form>
        {message && (
          <div className="mt-3 alert alert-danger" role="alert">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateResume;