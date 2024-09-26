import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomeDoctorsPage.css'; // Import the CSS file for styling

// Import images
import tutor1 from '../assets/Img/doctor1.jpg';
import tutor2 from '../assets/Img/doctor1.jpg';
import tutor3 from '../assets/Img/doctor1.jpg';
import tutor4 from '../assets/Img/doctor1.jpg';

const HomeDoctorsPage = () => {
  const [activeSection, setActiveSection] = useState('faceToFace');

  const tutors = {
    faceToFace: [
      { name: 'Dr. Aarav Sharma', position: 'Senior Anatomy Tutor', img: tutor1 },
      { name: 'Dr. Kiran Desai', position: 'Pathology Tutor', img: tutor2 },
      { name: 'Dr. Neha Sinha', position: 'Biochemistry Tutor', img: tutor3 },
      { name: 'Dr. Neha Sinha', position: 'Biochemistry Tutor', img: tutor4 },
    ],
    onlineInteractive: [
      { name: 'Dr. Ananya Verma', position: 'Neuroscience Tutor', img: tutor1 },
      { name: 'Dr. Sameer Rao', position: 'Cardiology Tutor', img: tutor2 },
      { name: 'Dr. Sanya Mehta', position: 'Orthopedics Tutor', img: tutor3 },
      { name: 'Dr. Sanya Mehta', position: 'Orthopedics Tutor', img: tutor4 },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    AOS.refresh(); // Refresh AOS animations on section change
  };

  return (
    <section id="tutors" className="tutors-section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2 class="text-black" >Meet Our Faculty</h2>
        <p className='description' >
          At ADRPLEXUS, we take pride in offering top-notch educators who are both highly experienced
          and adept at adapting to the evolving trends in exams.
        </p>
      </div>
      {/* End Section Title */}

      {/* Buttons for Section Selection */}
      <div className="container button-group" data-aos="fade-up" data-aos-delay="100">
        <button
          className={`btn ${activeSection === 'faceToFace' ? 'active' : ''}`}
          onClick={() => handleSectionChange('faceToFace')}
        >
          Face to Face
        </button>
        <button
          className={`btn ${activeSection === 'onlineInteractive' ? 'active' : ''}`}
          onClick={() => handleSectionChange('onlineInteractive')}
        >
          Online Live Interactive
        </button>
      </div>

      {/* Tutor Cards */}
      <div className="container tutors-container" data-aos="fade-up" data-aos-delay="200">
        {tutors[activeSection].map((tutor, index) => (
          <div className="tutor-card " data-aos="zoom-in" data-aos-delay={`${index * 100}`} key={index}>
            <div className="pic">
              <img src={tutor.img} className="img-fluid" alt={tutor.name} />
            </div>
            <div className="tutor-info">
              <h4>{tutor.name}</h4>
              <span>{tutor.position}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Know More Button */}
      <div className="container know-more-container" data-aos="fade-up" data-aos-delay="300">
        <button className="btn know-more-btn">Know More</button>
      </div>
    </section>
  );
};

export default HomeDoctorsPage;
