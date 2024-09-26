import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling
import './Footer.css';
import footerLogo from '../assets/Img/CutOff.png';

const Footer = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const scrollElements = document.querySelectorAll('.footer');

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('show-on-scroll');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}. Response: ${text}`);
      }

      const result = await response.json();
      if (result.success) {
        toast.success('Email sent successfully!');
        setFormData({ email: '', subject: '', message: '' });
      } else {
        toast.error(result.message || 'Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error sending email.');
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Logo Column */}
            <div className="col-lg-3 col-md-6 footer-logo">
              <img src={footerLogo} alt="S-EDUCARE Logo" className="footer-logo-img" />
            </div>

            {/* Contact Details Column */}
            <div className="col-lg-3 col-md-6 contact-details">
              <h4>Contact Details</h4>
              <p><strong>Address:</strong> BANGALORE CITY / MAHARASHTRA KOPARGAON OFFICE / MANGALORE OFFICE</p>
              <p><strong>Name:</strong> DR SHIVAM DEOKAR</p>
              <p><strong>Phone Number:</strong> 7248909551</p>
            </div>

            {/* Contact Form Column */}
            <div className="col-lg-3 col-md-6 contact-form">
              <h4>Contact Us</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>

            {/* Map Column */}
            <div className="col-lg-3 col-md-6 map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.105863320438!2d77.60879051426347!3d12.97159891977808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a7c917b5db%3A0x33906634d8bbd63e!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1632992044940!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} PratikGiri All rights reserved.</p>
            <div className="social-icons-bottom">
              <a href="https://www.facebook.com" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.linkedin.com" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://wa.me/yourphonenumber" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <ToastContainer /> {/* Toast container to render toast notifications */}
    </>
  );
};

export default Footer;
