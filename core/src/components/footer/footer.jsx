import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer class="bg-dark text-white pt-4 pb-2 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3">
            <h5 className="text-main fs-3">ResuPro</h5>
            <p class="small">Creating solutions that matter.</p>
          </div>

          <div class="col-md-4 mb-3 ">
            <h6>Quick Links</h6>
            <div className="d-flex flex-column">
              <NavLink to="/about" className="text-light text-decoration-none ">
                About
              </NavLink>
              <NavLink to="/services" className="text-light text-decoration-none">
                Services
              </NavLink>
              <NavLink to="/contact" className="text-light text-decoration-none">
                Contact
              </NavLink>
            </div>
          </div>

          <div class="col-md-4 mb-3">
            <h6>Follow Us</h6>
            <a href="#" class="text-white me-3">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="text-white me-3">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" class="text-white">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        <hr class="border-light" />
        <div class="text-center small">
          &copy; 2025. Made with <i class="bi bi-heart-fill"></i> By ResuPro
          Team.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
