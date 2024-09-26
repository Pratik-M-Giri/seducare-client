import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faHospital, faFlask, faTrophy } from '@fortawesome/free-solid-svg-icons';
import './HomeStatsPage.css';

const statsData = [
  { icon: faUserMd, count: 85, label: 'Doctors' },
  { icon: faHospital, count: 18, label: 'Departments' },
  { icon: faFlask, count: 12, label: 'Research Labs' },
  { icon: faTrophy, count: 150, label: 'Awards' },
];

const useCountUp = (endValue, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / endValue));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= endValue) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return count;
};

const HomeStatsPage = () => {
  return (
    <section id="stats" className="stats light-background">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stats-item">
            <div className="stats-icon">
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <span className="count">{useCountUp(stat.count, 5000)}</span>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeStatsPage;
