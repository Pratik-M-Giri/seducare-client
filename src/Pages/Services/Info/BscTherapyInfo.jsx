import React from 'react';
import { Link } from 'react-router-dom';
import therapyImage from '../../../assets/Img/BscTherapyInfo.png'; // Update the path to your image
import './BscTherapyInfo.css';

const BscTherapyInfo = () => {
  return (
    <div className="bsc-therapy-info-container">
      <div className="bsc-therapy-info-row">
        <img 
          src={therapyImage} 
          alt="B.Sc. Therapy" 
          className="bsc-therapy-info-image" 
        />
        <div className="bsc-therapy-info-description">
          <h1 className='text-black' >What is B.Sc. Therapy?</h1>
          <p>
            A B.Sc. in Therapy (Bachelor of Science in Therapy) is an undergraduate program that prepares students for a career in various therapeutic fields. This course provides in-depth knowledge and practical skills related to therapeutic techniques, patient care, and rehabilitation practices. The program typically covers subjects such as physiotherapy, occupational therapy, and speech therapy, equipping students with the tools to help individuals recover and improve their quality of life.
          </p>
          <p>
            The curriculum includes theoretical studies as well as hands-on experience in clinical settings. Students learn about the latest therapeutic techniques, patient assessment, and treatment planning. This comprehensive approach ensures that graduates are well-prepared to work effectively in healthcare environments.
          </p>
        </div>
      </div>
      <div className="bsc-therapy-info-details">
        <h2 className='text-black' >Career Scope</h2>
        <p>
          Graduates of the B.Sc. Therapy program have diverse career opportunities in the healthcare field. Potential career paths include:
        </p>
        <ul>
          <li>Working as a physiotherapist or occupational therapist in hospitals, clinics, or rehabilitation centers</li>
          <li>Providing therapy services in private practice or community health settings</li>
          <li>Specializing in areas such as sports therapy, geriatric therapy, or pediatric therapy</li>
          <li>Contributing to research and development in therapeutic techniques and practices</li>
          <li>Engaging in health education and public awareness programs</li>
        </ul>
        <h2 className='text-black' >Market Demand</h2>
        <p>
          The demand for therapy professionals is growing due to several factors:
        </p>
        <ul>
          <li>Increasing awareness of the benefits of therapy in improving health and wellness</li>
          <li>Growing aging population requiring rehabilitation and therapy services</li>
          <li>Expansion of healthcare services and facilities focusing on preventive and rehabilitative care</li>
          <li>Advancements in therapy techniques and technology creating new opportunities</li>
        </ul>
        <h2 className='text-black' >Why Choose B.Sc. Therapy with Seducare Consultancy?</h2>
        <p>
          Seducare Consultancy provides expert support for students pursuing a B.Sc. in Therapy. Here’s how we can help:
        </p>
        <ul>
          <li><strong>Personalized Counseling:</strong> Receive tailored advice on selecting the right therapy programs and institutions.</li>
          <li><strong>Application Assistance:</strong> Get help with application processes, including preparation of documents and personal statements.</li>
          <li><strong>Exam and Interview Coaching:</strong> Access resources and coaching to excel in entrance exams and interviews.</li>
          <li><strong>Scholarship Information:</strong> Learn about available scholarships and financial aid options to support your education.</li>
          <li><strong>Career Guidance:</strong> Benefit from ongoing career counseling to navigate your professional path effectively.</li>
        </ul>
        <h2  className='text-black' >Admission Details</h2>
        <p>
          To apply for a B.Sc. Therapy program, candidates generally need to:
        </p>
        <ul>
          <li>Complete higher secondary education with a focus on science subjects</li>
          <li>Pass relevant entrance exams or meet specific admission criteria set by the institution</li>
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

export default BscTherapyInfo;
