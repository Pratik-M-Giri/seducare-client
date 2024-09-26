import React, { useEffect } from 'react';
import './AboutMission.css';
import missionVisionImage from '../../assets/Img/MissionVision.png';

const AboutMission = () => {

  // Scroll event to add 'visible' class
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.container');
      const image = document.querySelector('.image-container');
      const textContent = document.querySelector('.text-content');
      const mission = document.querySelector('.mission');
      const vision = document.querySelector('.vision');
      
      const position = container.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      // Add 'visible' class when the component is in view
      if (position < screenPosition) {
        image.classList.add('visible');
        textContent.classList.add('visible');
        mission.classList.add('visible');
        vision.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="grey-background">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6">
            <div className="image-container">
              <img
                src={missionVisionImage}
                alt="Mission and Vision"
                className="section-image"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <div className="text-content">
              <div className="mission-vision">
                <div className="mission">
                  <h1 className='mission-heading' >Our Mission</h1>
                  <p>
                    At Seducare, our mission is to provide unparalleled medical consultancy and coaching to aspiring doctors. 
                    We are dedicated to helping students navigate their medical career paths with expert guidance and support. 
                    Our goal is to empower future doctors with the knowledge and skills they need to excel in their fields and 
                    achieve their professional dreams.
                  </p>
                </div>
                <div className="vision">
                  <h1 className='mission-heading' >Our Vision</h1>
                  <p>
                    Seducare envisions becoming the foremost provider of medical education and consultancy in the industry. 
                    We strive to foster a learning environment where students can reach their full potential and make a 
                    meaningful impact in the healthcare sector. Our vision is to be a catalyst for excellence in medical 
                    education, offering innovative solutions and top-notch support to help students succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMission;
