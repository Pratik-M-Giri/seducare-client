import React, { useEffect, useRef, useState } from 'react';
import aboutImage from '../assets/img/MyAbout.png'; // Ensure path is correct
import './HomeAboutPage.css';
import { Link } from 'react-router-dom';

const HomeAboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <div className="about-container">
      <img
        src={aboutImage}
        className={`aboutimage ${isVisible ? 'fade-in-image' : ''}`}
        alt="About Us"
        ref={imageRef}
      />
      <div className="button-container">
        <Link to='/about'
          className={`know-more-btn   ${isVisible ? 'fade-in' : ''}`}
          ref={buttonRef}
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default HomeAboutPage;
