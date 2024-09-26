import React from 'react';
import './BhmsInfo.css'; // Import your CSS file for styles
import bhmsImage from '../../../assets/Img/BhmsInfo.png'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const BhmsInfo = () => {
  return (
    <div className="bhms-info-container">
      <div className="bhms-info-row">
        <img 
          src={bhmsImage} 
          alt="BHMS" 
          className="bhms-info-image" 
        />
        <div className="bhms-info-description">
          <h1>What is BHMS?</h1>
          <p>
            BHMS (Bachelor of Homeopathic Medicine and Surgery) is a professional undergraduate degree in homeopathy. 
            This program integrates the study of homeopathic medicine with conventional medical practices, aiming to
            prepare students to diagnose and treat a variety of health conditions using homeopathic principles. 
            The scope of BHMS includes working in hospitals, clinics, and private practices, as well as engaging in
            research and teaching. Students acquire skills in patient care, diagnostic techniques, and holistic
            treatment methods.
          </p>
          <p>
            Admission to BHMS requires a background in science and passing relevant entrance exams. Students who 
            are interested in holistic and alternative medicine may find this field particularly rewarding. 
            The BHMS program emphasizes both theoretical knowledge and practical experience to ensure that 
            graduates are well-equipped to provide high-quality patient care.
          </p>
        </div>
      </div>
      <div className="bhms-info-fullwidth">
        <h2>Career Opportunities</h2>
        <p>
          Graduates of the BHMS program can pursue various career paths, including working as homeopathic practitioners,
          consultants in integrative medicine, or researchers in homeopathy. Opportunities also exist in academia and
          government health agencies. The growing interest in holistic and complementary medicine means that there
          are increasing career prospects for BHMS graduates.
        </p>
        <h2>Program Highlights</h2>
        <ul>
          <li>Comprehensive training in homeopathic medicine and surgery</li>
          <li>Integration of modern medical practices with traditional homeopathy</li>
          <li>Hands-on clinical experience in diverse healthcare settings</li>
          <li>Opportunities for research and specialization</li>
          <li>Focus on patient-centered care and holistic treatment approaches</li>
        </ul>
      </div>
      <Link to="/AdmsnForm" className="admission-button"  >Apply for Admission</Link>
    </div>
  );
};

export default BhmsInfo;
