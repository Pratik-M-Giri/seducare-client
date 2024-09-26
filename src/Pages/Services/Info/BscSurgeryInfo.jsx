import React from 'react';
import { Link } from 'react-router-dom';
import bscSurgeryImage from '../../../assets/Img/BscSurgeryInfo.png'; // Update the path to your image
import './BscSurgeryInfo.css';

const BscSurgeryInfo = () => {
  return (
    <div className="bsc-surgery-info-container">
      <div className="bsc-surgery-info-row">
        <img 
          src={bscSurgeryImage} 
          alt="B.Sc. Surgery" 
          className="bsc-surgery-info-image" 
        />
        <div className="bsc-surgery-info-description">
          <h1 className='text-black' >What is B.Sc. Surgery?</h1>
          <p>
            B.Sc. Surgery is an undergraduate program focused on the principles and practices of surgical procedures and techniques. This specialized course is designed to equip students with comprehensive knowledge and practical skills in various surgical disciplines, including general surgery, orthopedic surgery, and more. The program combines theoretical education with hands-on clinical experience to prepare students for careers in surgical fields.
          </p>
          <p>
            The curriculum covers essential topics such as surgical anatomy, surgical techniques, patient care, and post-operative management. Students also gain practical experience through clinical rotations and surgical labs, which are crucial for developing proficiency in surgical procedures and patient handling.
          </p>
        </div>
      </div>
      <div className="bsc-surgery-info-details">
        <h2 className='text-black' >Career Scope</h2>
        <p>
          Graduates of the B.Sc. Surgery program can explore various career opportunities, including:
        </p>
        <ul>
          <li>Assisting in surgical procedures in hospitals and surgical centers</li>
          <li>Specializing in specific areas of surgery through further education and training</li>
          <li>Working in surgical research to develop new techniques and treatments</li>
          <li>Contributing to surgical education and training as faculty members</li>
          <li>Engaging in surgical management and administrative roles in healthcare settings</li>
        </ul>
        <h2 className='text-black' >Market Demand</h2>
        <p>
          The demand for professionals trained in surgical techniques remains high due to:
        </p>
        <ul>
          <li>Advancements in surgical technology and techniques driving the need for skilled practitioners</li>
          <li>Increasing number of surgical procedures performed globally</li>
          <li>Growth in healthcare infrastructure and surgical centers</li>
          <li>Rising focus on specialized surgical care and minimally invasive procedures</li>
        </ul>
        <h2 className='text-black' >Why Choose B.Sc. Surgery with Seducare Consultancy?</h2>
        <p>
          Seducare Consultancy provides expert support for students aiming to pursue a B.Sc. in Surgery. Here’s why you should choose our services:
        </p>
        <ul>
          <li><strong>Personalized Guidance:</strong> Receive tailored advice on choosing the best programs and institutions for surgical studies.</li>
          <li><strong>Application Assistance:</strong> Help with preparing and submitting applications, including writing personal statements and obtaining recommendations.</li>
          <li><strong>Exam Preparation:</strong> Access resources and coaching for entrance exams and interviews to enhance your readiness.</li>
          <li><strong>Scholarship Information:</strong> Guidance on available scholarships and financial aid to support your education.</li>
          <li><strong>Career Counseling:</strong> Continuous support and advice on career planning and professional development in the surgical field.</li>
        </ul>
        <h2 className='text-black' >Admission Details</h2>
        <p>
          To apply for a B.Sc. Surgery program, candidates typically need to:
        </p>
        <ul>
          <li>Complete higher secondary education with a focus on science subjects</li>
          <li>Pass relevant entrance exams or meet specific admission requirements set by the institutions</li>
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

export default BscSurgeryInfo;
