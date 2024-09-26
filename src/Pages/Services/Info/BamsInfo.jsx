import React from 'react';
import { Link } from 'react-router-dom';
import bamsImage from '../../../assets/Img/Bams.jpg'; // Update the path to your image
import './BamsInfo.css';

const BamsInfo = () => {
  return (
    <div className="bams-info-container">
      <div className="bams-info-row">
        <img 
          src={bamsImage} 
          alt="BAMS" 
          className="bams-info-image" 
        />
        <div className="bams-info-description">
          <h1 className='text-black'>What is BAMS?</h1>
          <p>
            BAMS (Bachelor of Ayurvedic Medicine and Surgery) is a professional undergraduate degree in Ayurveda. 
            This program offers a holistic approach to health and wellness, integrating the ancient wisdom of Ayurveda with modern medical practices. The curriculum is designed to equip students with the skills to diagnose, treat, and prevent various health conditions using traditional Ayurvedic methods and principles.
          </p>
         

          <p>Key Aspects of BAMS:
Curriculum and Training:

Core Subjects: The BAMS curriculum integrates ancient Ayurvedic texts with modern medical science. Students study subjects such as anatomy, physiology, pharmacology, and surgery, alongside traditional Ayurvedic practices including herbal medicine, dietary management, and detoxification therapies.
Clinical Training: Hands-on experience is crucial. Students receive practical training in diagnosing and treating patients using Ayurvedic methods. This often includes internships and clinical rotations in Ayurvedic hospitals and clinics.
Research and Development: The program includes research components where students engage in scientific studies to validate Ayurvedic practices and contribute to the field’s development.</p>
        </div>
      </div>
      <div className="bams-info-details">
        <h2 className='text-black' >Career Opportunities</h2>
        <p>
          The BAMS program opens up a wide array of career opportunities. Graduates can:
        </p>
        <ul>
          <li>Practice as Ayurvedic doctors in hospitals, clinics, or private practice settings</li>
          <li>Work as consultants in integrative medicine, combining Ayurveda with conventional treatments</li>
          <li>Engage in research to explore and validate Ayurvedic treatments</li>
          <li>Teach Ayurveda at educational institutions, contributing to the academic growth of the field</li>
          <li>Collaborate with government health agencies to promote holistic health practices</li>
        </ul>
        <p>
          The global recognition of Ayurveda and its growing integration into modern healthcare systems enhance the demand for qualified BAMS practitioners. This trend offers significant career prospects for graduates.
        </p>
        <h2 className='text-black' >Importance of the Scope</h2>
        <p>
          Ayurveda is increasingly valued for its holistic approach to health and wellness. The importance of BAMS lies in its ability to offer a complete system of medicine that addresses the root causes of diseases rather than just symptoms. With an increasing global focus on natural and preventive healthcare, BAMS professionals are at the forefront of a movement towards more comprehensive, patient-centered medical care.
        </p>
        <h2 className='text-black'  >What Our Coaching Provides</h2>
        <p>
          Our coaching program for BAMS students is designed to offer:
        </p>
        <ul>
          <li>In-depth training in Ayurvedic principles and practices</li>
          <li>Expert guidance on integrating Ayurvedic knowledge with modern medical techniques</li>
          <li>Hands-on clinical experience through our network of affiliated hospitals and clinics</li>
          <li>Preparation for entrance exams and academic challenges</li>
          <li>Personalized mentorship to help students excel in their careers</li>
          <li>Support with research opportunities and career placements</li>
        </ul>
        <p>
          With our comprehensive coaching, students are well-prepared to excel in the BAMS program and make a significant impact in the field of Ayurvedic medicine.
        </p>
      </div>
      <Link to="/AdmsnForm" className="admission-button">
        Apply for Admission
      </Link>
    </div>
  );
};

export default BamsInfo;
