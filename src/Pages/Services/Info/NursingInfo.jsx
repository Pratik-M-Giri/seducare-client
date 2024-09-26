import React from 'react';
import { Link } from 'react-router-dom';
import nursingImage from '../../../assets/Img/BscNursingInfo.png'; // Update the path to your image
import './NursingInfo.css';

const NursingInfo = () => {
  return (
    <div className="nursing-info-container">
      <div className="nursing-info-row">
        <img 
          src={nursingImage} 
          alt="B.Sc. Nursing" 
          className="nursing-info-image" 
        />
        <div className="nursing-info-description">
          <h1 className='text-black' >What is B.Sc. Nursing?</h1>
          <p>
            B.Sc. Nursing (Bachelor of Science in Nursing) is an undergraduate program designed to prepare students for a career in nursing. This comprehensive course covers essential nursing practices, healthcare management, and patient care. It integrates theoretical knowledge with practical experience to equip students with the skills needed to provide high-quality nursing care in various healthcare settings.
          </p>
          <p>
            The curriculum includes subjects such as anatomy, physiology, microbiology, pharmacology, and nursing management. Students also gain hands-on experience through clinical rotations in hospitals and healthcare facilities. This well-rounded training ensures that graduates are adept in both clinical skills and patient interaction.
          </p>
        </div>
      </div>
      <div className="nursing-info-details">
        <h2 className='text-black' >Career Scope</h2>
        <p>
          Graduates of the B.Sc. Nursing program have a broad range of career opportunities, including:
        </p>
        <ul>
          <li>Working as registered nurses in hospitals, clinics, and community health centers</li>
          <li>Specializing in areas such as pediatric nursing, critical care, or psychiatric nursing</li>
          <li>Engaging in healthcare management and administrative roles</li>
          <li>Contributing to research in nursing practices and healthcare improvements</li>
          <li>Participating in public health initiatives and educational programs</li>
        </ul>
        <h2 className='text-black' >Market Demand</h2>
        <p>
          The demand for qualified nurses is on the rise due to several key factors:
        </p>
        <ul>
          <li>Growing global population and increasing healthcare needs</li>
          <li>Rising prevalence of chronic diseases and the need for ongoing care</li>
          <li>Expansion of healthcare facilities and services globally</li>
          <li>Emphasis on preventive healthcare and patient education</li>
        </ul>
        <h2 className='text-black' >Why Choose B.Sc. Nursing with Seducare Consultancy?</h2>
        <p>
          Seducare Consultancy offers dedicated support for students pursuing a B.Sc. in Nursing. Here’s why you should choose us:
        </p>
        <ul>
          <li><strong>Expert Guidance:</strong> Receive tailored advice on selecting the best nursing programs and institutions.</li>
          <li><strong>Application Support:</strong> Assistance with the preparation and submission of applications, including personal statements and recommendations.</li>
          <li><strong>Exam Preparation:</strong> Access to resources and coaching for entrance exams and interviews to enhance your readiness.</li>
          <li><strong>Scholarship Assistance:</strong> Information on available scholarships and financial aid options to help fund your education.</li>
          <li><strong>Career Counseling:</strong> Ongoing support to help you navigate your career path and achieve your professional goals.</li>
        </ul>
        <h2 className='text-black'  >Admission Details</h2>
        <p>
          To apply for a B.Sc. Nursing program, candidates generally need to:
        </p>
        <ul>
          <li>Have completed higher secondary education with a focus on science subjects</li>
          <li>Pass relevant entrance exams or meet specific admission criteria set by the institutions</li>
          <li>Participate in interviews or counseling sessions if required</li>
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

export default NursingInfo;
