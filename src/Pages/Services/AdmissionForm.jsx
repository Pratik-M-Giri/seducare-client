import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdmissionForm.css';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    currentSchool: '',
    grade: '',
    interestedIn: '',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) errorMsg = 'Full Name is required.';
        break;
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) errorMsg = 'Email is required.';
        else if (!emailPattern.test(value)) errorMsg = 'Invalid email format.';
        break;
      case 'phone':
        if (!value.trim()) errorMsg = 'Phone Number is required.';
        break;
      case 'dob':
        if (!value) errorMsg = 'Date of Birth is required.';
        break;
      case 'address':
        if (!value.trim()) errorMsg = 'Address is required.';
        break;
      case 'currentSchool':
        if (!value.trim()) errorMsg = 'Current School/College is required.';
        break;
      case 'grade':
        if (!value.trim()) errorMsg = 'Current Grade/Year is required.';
        break;
      case 'interestedIn':
        if (!value) errorMsg = 'Please select a program.';
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: errorMsg });
  };

  const isFormValid = () => {
    return Object.values(formData).every(field => field.trim() !== '') && Object.values(errors).every(error => !error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    try {
      const response = await fetch('http://localhost:5000/api/admission/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const result = await response.json();
      if (result.success) {
        navigate('/thank-you', { state: { formData } });
      } else {
        alert(result.message || 'Failed to submit form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form.');
    }
  };

  return (
    <div className="admission-form-container">
      <h2>Admission Form </h2>
      <form onSubmit={handleSubmit} className="admission-form">
        <div className="row">
          <div className="col-sm-6 form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              required
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              required
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              required
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
              required
            />
            {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
          </div>
          <div className="col-sm-12 form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.address ? 'is-invalid' : ''}`}
              rows="3"
              required
            ></textarea>
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="currentSchool">Current School/College:</label>
            <input
              type="text"
              id="currentSchool"
              name="currentSchool"
              value={formData.currentSchool}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.currentSchool ? 'is-invalid' : ''}`}
              required
            />
            {errors.currentSchool && <div className="invalid-feedback">{errors.currentSchool}</div>}
          </div>
          <div className="col-sm-6 form-group">
            <label htmlFor="grade">Current Grade/Year:</label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.grade ? 'is-invalid' : ''}`}
              required
            />
            {errors.grade && <div className="invalid-feedback">{errors.grade}</div>}
          </div>
          <div className="col-sm-12 form-group">
            <label htmlFor="interestedIn">Programs Interested In:</label>
            <select
              id="interestedIn"
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-control ${errors.interestedIn ? 'is-invalid' : ''}`}
              required
            >
              <option value="">Select a program</option>
              <option value="consulting">Consulting Services</option>
              <option value="training">Training Programs</option>
              <option value="counseling">Career Counseling</option>
              <option value="exam-prep">Exam Preparation</option>
              <option value="workshops">Medical Workshops</option>
              <option value="guidance">Personalized Guidance</option>
            </select>
            {errors.interestedIn && <div className="invalid-feedback">{errors.interestedIn}</div>}
          </div>
          <div className="col-sm-12 form-group">
            <label htmlFor="additionalInfo">Additional Information:</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
              rows="4"
            ></textarea>
          </div>
          <div className="col-sm-12">
            <button type="submit" className="submit-button" disabled={!isFormValid()}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
