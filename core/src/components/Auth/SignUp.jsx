import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/signup', { email, password });
      setMessage('Account created! Please log in.');
      setEmail('');
      setPassword('');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setMessage(error.response?.data.message || 'Signup failed');
    }
  };

  return (
    <>

      <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label text-start d-block">Email</label>
            <input
              type="email"
              className="form-control"
              id="signupEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label text-start d-block">Password</label>
            <input
              type="password"
              className="form-control"
              id="signupPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
        {message && (
          <div className={`mt-3 alert ${message.includes('failed') ? 'alert-danger' : 'alert-success'}`} role="alert">
            {message}
          </div>
        )}
        <p className="text-center mt-3">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
      </div>
    </>
  );
};

export default Signup;