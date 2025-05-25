import React, { useState } from 'react'; // Import React and useState
import axios from 'axios';               // Import axios for HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const Login = () => {                    // Define Login component
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [message, setMessage] = useState(''); // State for feedback message
  const navigate = useNavigate();       // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setMessage('Logged in successfully!');
      setEmail('');
      setPassword('');
      setTimeout(() => navigate('/create-resume'), 1000); // Updated redirect
    } catch (error) {
      setMessage(error.response?.data.message || 'Login failed');
    }
  };

  return (  
    <>
            
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label text-start d-block">Email</label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label text-start d-block">Password</label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Log In</button>
        </form>
        {message && (                   // Conditional message display
          <div className={`mt-3 alert ${message.includes('failed') ? 'alert-danger' : 'alert-success'}`} role="alert">
            {message}
          </div>
        )}
        <p className="text-center mt-3">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
    </> 
    
  );
};

export default Login; // Export component