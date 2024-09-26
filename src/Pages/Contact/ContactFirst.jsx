import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
import './ContactFirst.css';

const ContactFirst = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/getintouch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        toast.success('Thanks for contacting SEDUCARE!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast.error(result.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error sending message.');
    }
  };

  return (
    <div className="contact-container">
      <div className="heading">
        <h1>Get in Touch</h1>
        <p className='heading-desc'>Fill up the form to get in touch with us.</p>
      </div>

      <div className="contact-box">
        {/* Left side of the form */}
        <div className="container-left">
          <h3>Fill the Form*</h3>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone*</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="+91 1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="youremail@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              rows="10"
              placeholder="Enter your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className='sendmsgBTN text-center'>
              <button className='btn btn-warning SendMsg' type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>

        {/* Right side with contact information */}
        <div className="container-right">
          <h3>Reach Us</h3>
          <div className="contact-info">
            <p><strong>Business Name:</strong> S-EDUCARE</p>
            <p><strong>Address:</strong> BANGALORE CITY / MAHARASHTRA KOPARGAON OFFICE / MANGALORE OFFICE</p>
            <p><strong>Name:</strong> DR SHIVAM DEOKAR</p>
            <p><strong>Phone Number:</strong> 7248909551</p>
            <p><strong>College Details:</strong> MBBS, BAMS, BHMS, BDS</p>
            <p><strong>STATE:</strong> WE DO ADMISSION WORK ALL OVER INDIA</p>
          </div>

          {/* Map section */}
          <div className="map">
            <iframe
              title="Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2888210618585!2d77.09131724016883!3d28.621104670527558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04afb8dbcfe1%3A0xaff19e718be2136b!2sMaharaja%20Surajmal%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1711214006526!5m2!1sen!2sin"
              width="100%"
              height="275"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Toast container to display messages */}
      <ToastContainer />
    </div>
  );
};

export default ContactFirst;
