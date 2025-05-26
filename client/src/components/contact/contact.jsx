import React from 'react';
import Footer from '../footer/footer'; // Import Footer component

const ContactPage = () => {
  return (
    <>
    <div className="container my-5">
      <h1 className="mb-5 text-start fw-bold">Contact Us</h1>
      <div className="row gx-5">
        {/* Contact Form */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <div className="bg-white rounded-4 shadow-sm p-4 border border-light">
            <h2 className="h4 mb-4 text-start fw-semibold">Send Us a Message</h2>
            <form>
              <div className="mb-3 text-start">
                <label htmlFor="name" className="form-label fw-medium">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label fw-medium">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="message" className="form-label fw-medium">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-12 col-lg-6">
          <div className="bg-white rounded-4 shadow-sm p-4 border border-light">
            <h2 className="h4 mb-4 text-start fw-semibold">Get in Touch</h2>
            <ul className="list-unstyled text-start">
              <li className="mb-3">
                <strong>Email:</strong>{' '}
                <a href="mailto:support@example.com" className="text-decoration-none text-primary">
                  support@example.com
                </a>
              </li>
              <li className="mb-3">
                <strong>Phone:</strong>{' '}
                <a href="tel:+1234567890" className="text-decoration-none text-primary">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="mb-3">
                <strong>Address:</strong> 123 Example Street, City, Country
              </li>
            </ul>
            <div className="mt-4 text-start">
              <h3 className="h5 mb-3 fw-semibold">Follow Us</h3>
              <div className="d-flex gap-4">
                <a href="#" className="text-dark fs-5" aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-dark fs-5" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-dark fs-5" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;
