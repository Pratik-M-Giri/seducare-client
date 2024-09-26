import React, { useEffect } from 'react';
import './AboutCompofirst.css'; // Update to use the CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutCompofirst = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <div className="about-compofirst" data-aos="fade-up">
    </div>
  );
}

export default AboutCompofirst;
