import React from 'react';
import { Link } from 'react-router-dom';
import mbbsImage from '../../../assets/Img/MbbsInfo.png'; // Update the path to your image
import './MbbsInfo.css';

const MbbsInfo = () => {
  return (
    <div className="mbbs-info-container">
      <div className="mbbs-info-row">
        <img 
          src={mbbsImage} 
          alt="MBBS" 
          className="mbbs-info-image" 
        />
        <div className="mbbs-info-description">
          <h1 className='text-black' >What is MBBS?</h1>
          <p>
            MBBS (Bachelor of Medicine, Bachelor of Surgery) is an undergraduate degree in medicine and surgery. It is one of the most sought-after medical degrees globally, providing foundational knowledge and clinical skills necessary to become a medical doctor. The MBBS program integrates both theoretical studies and practical experience to prepare students for diagnosing, treating, and managing a wide range of health conditions.
          </p>
          <p>
            The MBBS curriculum covers subjects such as anatomy, physiology, biochemistry, pharmacology, pathology, and clinical skills. Students also gain hands-on experience through clinical rotations in various specialties, including internal medicine, surgery, pediatrics, and obstetrics. This comprehensive training ensures that graduates are well-equipped to provide high-quality patient care.
          </p>
        </div>
      </div>
      <div className="mbbs-info-details">
        <h2 className='text-black' >Career Scope</h2>
        <p>
          The MBBS degree opens up a wide array of career opportunities in the medical field. Graduates can pursue various paths, including:
        </p>
        <ul>
          <li>Practicing as a General Physician or Surgeon in hospitals, clinics, or private practice</li>
          <li>Specializing in various fields such as cardiology, neurology, or orthopedics through postgraduate studies</li>
          <li>Working in academic institutions as faculty members, teaching future medical professionals</li>
          <li>Engaging in medical research to advance the understanding and treatment of diseases</li>
          <li>Contributing to public health initiatives and working with government health agencies</li>
        </ul>
        <h2 className='text-black' >Market Demand</h2>
        <p>
          The demand for MBBS graduates remains strong due to the ever-growing need for healthcare services. Factors driving this demand include:
        </p>
        <ul>
          <li>Increasing global population and aging demographics, leading to a higher prevalence of health conditions</li>
          <li>Advancements in medical technology and treatments creating new opportunities and specialties</li>
          <li>Growing focus on preventive and personalized medicine, requiring skilled healthcare professionals</li>
          <li>Expansion of healthcare infrastructure in both developed and developing countries</li>
        </ul>
        <h2 className='text-black' >Why Choose MBBS with Seducare Consultancy?</h2>
        <p>
          Seducare Consultancy offers expert guidance and support for students aspiring to pursue MBBS. Here’s why choosing Seducare can be advantageous:
        </p>
        <ul>
          <li><strong>Expert Counseling:</strong> Get personalized advice on selecting the right medical schools and understanding the admission process.</li>
          <li><strong>Application Support:</strong> Assistance with the preparation and submission of application documents, including personal statements and recommendation letters.</li>
          <li><strong>Exam Preparation:</strong> Access to resources and coaching for entrance exams and interviews, ensuring you are well-prepared for the challenges ahead.</li>
          <li><strong>Scholarship Guidance:</strong> Information on available scholarships and financial aid options to support your studies.</li>
          <li><strong>Career Planning:</strong> Ongoing support and career counseling to help you make informed decisions about your medical career.</li>
        </ul>
        <h2 className='text-black' >Admission Details</h2>
        <p>
          To apply for the MBBS program, candidates typically need to:
        </p>
        <ul>
          <li>Have completed higher secondary education with a focus on science subjects</li>
          <li>Pass relevant entrance exams as required by the medical schools</li>
          <li>Meet minimum academic and eligibility criteria set by the institution</li>
          <li>Participate in interviews or counseling sessions, if applicable</li>
        </ul>
        <p>
          For more information on admission requirements and procedures, please visit our admissions page or contact Seducare Consultancy directly.
        </p>
      </div>
      <Link to="/AdmsnForm" className="admission-button">
        Apply for Admission
      </Link>
    </div>
  );
};

export default MbbsInfo;
