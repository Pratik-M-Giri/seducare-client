import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeFirstPage.css';
import backgroundImage from '../assets/Img/HeroImgBg.png';

const HomeFirstPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animation');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div
      className="home-first-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Link to="/services" className="enroll-button scroll-animation">
        Enroll Now
      </Link>
    </div>
  );
};

export default HomeFirstPage;
