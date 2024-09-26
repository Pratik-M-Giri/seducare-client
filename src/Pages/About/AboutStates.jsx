import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import './AboutStates.css';

const AboutStates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="about-states-container" ref={ref}>
      <div className="about-states-content">
        <h2 className="about-states-heading">Results That Speak For Themselves</h2>
        <div className="about-states-stats">
          <div className="stat-item">
            <p className="stat-number">
              {isVisible ? <CountUp end={95} duration={3} suffix="%" /> : '95%'}
            </p>
            <p className="stat-description">Facility culture fit for candidates demonstrated</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">
              {isVisible ? <CountUp end={100} duration={3} suffix="%" /> : '100%'}
            </p>
            <p className="stat-description">Realistic expectations given to providers by seducare</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">
              {isVisible ? <CountUp end={96.3} duration={3} suffix="%" /> : '96.3%'}
            </p>
            <p className="stat-description">Of provider issues resolved in a timely manner</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">
              {isVisible ? <CountUp end={100} duration={3} suffix="%" /> : '100%'}
            </p>
            <p className="stat-description">Of providers feel they are treated well by seducare Medical Staffing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStates;
