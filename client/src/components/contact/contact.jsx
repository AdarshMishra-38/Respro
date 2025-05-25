import React from 'react';

const ContactPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Contact Us</h1>
      <div className="row gx-5">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <div className="bg-white rounded-3 shadow p-4 border border-light">
            <h2 className="h4 mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control text-start"
                  id="name"
                  placeholder="Your Name"
                  required
                  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control text-start"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control text-start"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="bg-white rounded-3 shadow p-4 border border-light">
            <h2 className="h4 mb-4">Get in Touch</h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong>Email:</strong> <a href="mailto:support@example.com">support@example.com</a>
              </li>
              <li className="mb-3">
                <strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="mb-3">
                <strong>Address:</strong> 123 Example Street, City, Country
              </li>
            </ul>
            <div className="mt-4">
              <h3 className="h5 mb-3">Follow Us</h3>
              <div className="d-flex gap-3">
                <a href="#" className="text-dark"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-dark"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-dark"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;