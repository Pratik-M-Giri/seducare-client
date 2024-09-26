import React from 'react';
import './HomeServicesPage.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faPills, faHospitalUser, faDna, faWheelchair, faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css'; // Import AOS CSS for animations
import AOS from 'aos';
import {Link} from 'react-router-dom';
const coursesData = [
  { icon: faHeartbeat, title: 'BAMS (Bachelor of Ayurveda Medicine and Surgery)', description: 'A comprehensive course covering Ayurveda principles, treatments, and practices. Students will gain expertise in traditional medicine and holistic health.', delay: 100 },
  { icon: faPills, title: 'BHMS (Bachelor of Homeopathic Medicine and Surgery)', description: 'Focused on Homeopathic treatments and theories, this course prepares students to diagnose and treat various conditions using homeopathic remedies.', delay: 200 },
  { icon: faHospitalUser, title: 'MBBS (Bachelor of Medicine and Bachelor of Surgery)', description: 'A foundational medical course that provides in-depth knowledge in medical sciences, clinical skills, and patient care to become a qualified medical doctor.', delay: 300 },
  { icon: faDna, title: 'BSc Therapy', description: 'An undergraduate program in therapy covering various therapeutic techniques and practices. It includes physical therapy, occupational therapy, and rehabilitation.', delay: 400 },
  { icon: faWheelchair, title: 'Nursing', description: 'A course designed to prepare students for a career in nursing. It includes clinical training, patient care, and medical knowledge necessary for a nursing professional.', delay: 500 },
  { icon: faNotesMedical, title: 'BSc Surgery', description: 'This course focuses on the principles and practices of surgery. Students will learn surgical techniques, procedures, and the medical knowledge required for surgical practice.', delay: 600 },
];

const HomeServicesPage = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <section id="services" className="services">
      <div className="container section-title" data-aos="fade-up">
        <h2 data-aos="fade-down" data-aos-delay="100" className='text-black' >Our Courses</h2>
        <p>Explore our diverse range of courses designed to prepare you for a successful career in the medical and therapeutic fields.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={course.delay}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <FontAwesomeIcon icon={course.icon} />
                </div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                {/* <a href="#services" className="btn-enroll">Enroll Now</a> Button link */}
<Link to="/services" type="button"  class=" btn-enroll text-black btn btn-warning">Enroll Now</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServicesPage;
