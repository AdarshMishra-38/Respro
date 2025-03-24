import React from "react"; // Import React for component creation
import { NavLink, useNavigate } from "react-router-dom"; // Import routing tools

export default function Navbar() {
  const isLoggedIn = !!localStorage.getItem("token"); // Check authentication status
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border border-primary mx-3">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <h1 className="m-0">Logo</h1>
        </NavLink>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
                end // Ensures exact match for root path
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/editor"
              >
                Builder
              </NavLink>
            </li> 
          </ul>

          {/* Conditional Login/Logout Buttons */}
          {isLoggedIn ? (
            <div className="d-flex gap-3">
              
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/profile"
                >
                  <i class="bi bi-person-circle fs-3"></i> 
                </NavLink>
            
              <button
                className="btn btn-outline-primary"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="d-flex">
              <NavLink to="/login" className="btn btn-outline-primary me-2">
                Login
              </NavLink>
              <NavLink to="/signup" className="btn btn-primary">
                Signup
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
