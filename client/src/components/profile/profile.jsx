import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const BASE_URL=process.env.REACT_APP_BASE_URL;


const Profile = () => {
  const [user, setUser] = useState({ email: "", name: "" });
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [resumes, setResumes] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const profileRes = await axios.get(
          `${BASE_URL}/api/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(profileRes.data);
        setNewEmail(profileRes.data.email);
        setNewName(profileRes.data.name);

        const resumesRes = await axios.get(
          `${BASE_URL}/api/resumes`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setResumes(resumesRes.data);
      } catch (error) {
        setMessage(error.response?.data.message || "Failed to load data");
      }
    };
    fetchData();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const updates = {};
      if (newEmail) updates.email = newEmail;
      if (newPassword) updates.password = newPassword;
      if (newName) updates.name = newName;

      await axios.put(`${BASE_URL}/api/profile`, updates, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("Profile updated successfully");
      setUser({ ...user, email: newEmail, name: newName });
      setNewPassword("");
    } catch (error) {
      setMessage(error.response?.data.message || "Failed to update profile");
    }
  };

  const handleDeleteResume = async (resumeId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`${BASE_URL}/api/resumes/${resumeId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResumes(resumes.filter((resume) => resume._id !== resumeId));
      setMessage("Resume deleted successfully");
    } catch (error) {
      setMessage(error.response?.data.message || "Failed to delete resume");
    }
  };

  const handleEditResume = (resume) => {
    navigate("/editor", {
      state: {
        resumeId: resume._id,
        resumeName: resume.name,
        resumeData: resume.data,
      },
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Account Management</h2>

      <div className="d-flex justify-content-evenly gap-3 mb-4">
        <div className="card w-25">
          <div className="card-body">
            <h3 className="card-title">Profile Details</h3>
            <form onSubmit={handleUpdateProfile}>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label text-start d-block"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Enter new email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-start d-block">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label text-start d-block "
                >
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </div>
              <button type="submit" className="btn my-btn">
                Update
              </button>
            </form>
            {message && (
              <div
                className={`mt-3 alert ${
                  message.includes("failed") ? "alert-danger" : "alert-success"
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>

        <div className="card w-75 ">
          <div className="card-body">
            <h3 className="card-title">Your Resumes</h3>
            {resumes.length === 0 ? (
              <p>No resumes found. Start creating one!</p>
            ) : (
              <ul className="list-group">
                {resumes.map((resume) => (
                  <li
                    key={resume._id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>
                      {resume.name} (Updated:{" "}
                      {new Date(resume.updatedAt).toLocaleDateString()})
                      {resume.category && ` - Category: ${resume.category}`}
                    </span>
                    <div>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleEditResume(resume)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteResume(resume._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <button
              className="btn btn-success mt-3"
              onClick={() => navigate("/create-resume")}
            >
              Create New Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
