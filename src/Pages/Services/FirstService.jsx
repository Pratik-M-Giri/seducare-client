import React from 'react';
import { Link } from 'react-router-dom';
import './FirstService.css';

// Import images
import image1 from '../../assets/Img/BhmsInfo.png';
import image2 from '../../assets/Img/Bams.jpg'; // Use different images if available
import image3 from '../../assets/Img/MbbsInfo.png';
import image4 from '../../assets/Img/BscTherapyInfo.png';
import image5 from '../../assets/Img/BscNursingInfo.png';
import image6 from '../../assets/Img/BscSurgeryInfo.png';

const services = [
  {
    id: 'bhms',
    image: image1,
    title: 'BHMS',
    description: 'Bachelor of Homeopathic Medicine and Surgery (BHMS) is a medical degree for homeopathic practitioners.',
    info: 'Admission Process: Apply online, attend an entrance exam, and complete the interview process.',
    path: '/BhmsInfo',
  },
  {
    id: 'bams',
    image: image2,
    title: 'BAMS',
    description: 'Bachelor of Ayurvedic Medicine and Surgery (BAMS) focuses on traditional Ayurvedic medicine practices.',
    info: 'Admission Process: Submit your application, take the entrance exam, and go through the counseling process.',
    path: '/bamsinfo',
  },
  {
    id: 'mbbs',
    image: image3,
    title: 'MBBS',
    description: 'Bachelor of Medicine, Bachelor of Surgery (MBBS) is a globally recognized medical degree for physicians.',
    info: 'Admission Process: Online application, entrance examination, and personal interview are required.',
    path: '/MbbsInfo',
  },
  {
    id: 'bsc-therapy',
    image: image4,
    title: 'BSc Therapy',
    description: 'Bachelor of Science in Therapy involves training in various therapeutic techniques and practices.',
    info: 'Admission Process: Complete your application, take an entrance test, and attend a counseling session.',
    path: '/BscTherapy',
  },
  {
    id: 'nursing',
    image: image5,
    title: 'Nursing',
    description: 'Nursing programs prepare students to provide healthcare services in various clinical settings.',
    info: 'Admission Process: Apply online, pass the entrance exam, and attend a personal interview.',
    path: '/NursingInfo'
  },
  {
    id: 'bsc-surgery',
    image: image6,
    title: 'BSc Surgery',
    description: 'Bachelor of Science in Surgery focuses on the principles and practices of surgical procedures.',
    info: 'Admission Process: Submit application, take an entrance test, and complete a counseling session.',
    path: '/BscSurgery',
  },
];

const FirstService = () => {
  return (
    <div className="service-container">
      {services.map((service) => (
        <div className="service-card" key={service.id}>
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-content">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <p className="service-info">{service.info}</p>
            <Link to={service.path} className="service-button">
              Admission Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FirstService;
