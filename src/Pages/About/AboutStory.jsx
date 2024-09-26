import React from 'react';
import myIdentityImage from '../../assets/Img/CropAbout.jpg'; // Image import at the top
import './AboutStory.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AboutStory = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center justify-content-center">
        {/* Content column */}
        <div className="col-md-6 text-center text-md-start">
          {/* <h1 className="fade-in text-center its-heading">Our Story</h1> */}
          <h1 className='text-center' >Our Story</h1>
          <p className="slide-in">
            Once upon a time, in the heart of India's bustling educational landscape, a vision was born. 
            A vision to transform the future of aspiring medical professionals. This vision gave birth to 
            S-Educare, a beacon of hope and guidance for those navigating the intricate world of medical 
            education.
          </p>
          <p className="slide-in">
            The founders of S-Educare were driven by a singular mission: to bridge the gap between dreams 
            and reality. They knew that the journey to becoming a medical professional was not just about 
            excelling in exams, but also about finding the right path amidst a sea of opportunities and 
            challenges. Thus, S-Educare emerged as a sanctuary where dreams could be nurtured and guided.
          </p>
          <p className="slide-in">
            From the very beginning, our team has been committed to providing a personalized approach to 
            medical consultancy and coaching. We believe that every student is unique, with individual 
            aspirations and potential. Our dedicated consultants and coaches work tirelessly to tailor their 
            guidance to each student’s needs, helping them navigate the complexities of medical admissions, 
            entrance exams, and academic success.
          </p>
          <p className="slide-in">
            Our story is one of relentless dedication and unwavering support. With a deep understanding of the 
            medical education system and strong relationships with top institutions, we ensure that our students 
            are not just prepared for exams but are also equipped with the skills and confidence to excel in 
            their chosen medical fields.
          </p>
          <p className="slide-in">
            As we look to the future, our mission remains clear: to empower the next generation of doctors 
            with the knowledge, skills, and resilience needed to make a difference in the world. At S-Educare, 
            every story of success is a testament to our commitment and passion for shaping the future of medical 
            education.
          </p>

        </div>
        
        {/* Image column */}
        <div className="col-md-6 text-center">
          <img src={myIdentityImage} alt="S-Educare Story" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default AboutStory;
