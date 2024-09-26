import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomeAppointmentPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeAppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    course: '',
    consultant: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to manage submission status

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/; // Assuming a 10-digit phone number

    if (!formData.name) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!formData.date) {
      newErrors.date = 'Preferred date and time are required.';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time for comparison
      if (selectedDate < today) {
        newErrors.date = 'Please choose a date from today onward.';
      }
    }

    if (!formData.course) newErrors.course = 'Please select a course.';
    if (!formData.consultant) newErrors.consultant = 'Please select a consultant.';

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    // Validate the field on blur
    const validationErrors = validate();
    if (validationErrors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validationErrors[name], // Set error if validation fails
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;

    // Set all fields as touched
    const newTouched = {
      name: true,
      email: true,
      phone: true,
      date: true,
      course: true,
      consultant: true,
      message: true,
    };
    setTouched(newTouched);

    // Validate all fields on submit
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show all errors
      return;
    }

    setIsSubmitting(true); // Mark as submitting

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('We will get back to you, thank you.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          course: '',
          consultant: '',
          message: '',
        });
        setErrors({});
        setTouched({});
      } else {
        toast.error('There was an error submitting your request.');
      }
    } catch (error) {
      toast.error('There was an error submitting your request.');
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };

  return (
    <section id="appointment" className="appointment">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="text-black">Book a Consultation</h2>
        <p>
          Schedule a session with our expert faculty to discuss your academic goals and get personalized guidance.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form onSubmit={handleSubmit} className="php-email-form">
          <div className="row">
            <div className="col-md-4 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.phone && errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input
                type="datetime-local"
                name="date"
                className="form-control"
                value={formData.date}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.date && errors.date && <span className="error">{errors.date}</span>}
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="course"
                className="form-select"
                value={formData.course}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select Course</option>
                <option value="BAMS">BAMS (Bachelor of Ayurvedic Medicine and Surgery)</option>
                <option value="BHMS">BHMS (Bachelor of Homeopathic Medicine and Surgery)</option>
                <option value="MBBS">MBBS (Bachelor of Medicine, Bachelor of Surgery)</option>
                <option value="BSc-Therapy">BSc Therapy</option>
                <option value="Nursing">Nursing</option>
                <option value="BSc-Surgery">BSc Surgery</option>
              </select>
              {touched.course && errors.course && <span className="error">{errors.course}</span>}
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="consultant"
                className="form-select"
                value={formData.consultant}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select Consultant</option>
                <option value="Consultant 1">Consultant 1</option>
                <option value="Consultant 2">Consultant 2</option>
                <option value="Consultant 3">Consultant 3</option>
              </select>
              {touched.consultant && errors.consultant && <span className="error">{errors.consultant}</span>}
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message or Additional Information (Optional)"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
          </div>
          <div className="mt-3">
            <div className="text-center">
              <button className="btn btn-warning" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Book Consultation'}
              </button>
            </div>
          </div>
        </form>

        <ToastContainer />
      </div>
    </section>
  );
};

export default HomeAppointmentPage;
