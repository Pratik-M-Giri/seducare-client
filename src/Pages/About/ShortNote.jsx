import React from 'react';
import './ShortNote.css';

const ShortNote = () => {
  return (
    <div className="short-note-container">
      <h2 className="semi-heading">Who We Are ?</h2>
      <p className='first-Note' > Seducare Medical Consultancy and Coaching is a leading service provider specializing in medical admissions and career guidance.</p>
      <p>
        We offer expert consultancy for securing admissions to top medical colleges across India, including MBBS, BAMS, BHMS, and BDS programs. Our dedicated team provides personalized coaching, application assistance, and exam preparation strategies to ensure students achieve their academic and professional goals. With a focus on excellence and comprehensive support, Seducare is your trusted partner in navigating the medical education landscape.
      </p>
      <button className="call-our-story-btn"> Our Story</button>
    </div>
  );
};

export default ShortNote;
