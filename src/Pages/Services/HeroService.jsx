import React, { useEffect, useRef } from 'react';
import './HeroService.css'; // Import the CSS file

const HeroService = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const element = heroRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="hero-service-container" ref={heroRef}>
      <div className="overlay">
        {/* Add content or heading here if needed */}
      </div>
    </div>
  );
}

export default HeroService;
