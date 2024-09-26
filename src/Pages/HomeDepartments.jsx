import React, { useState } from 'react';
import './HomeDepartments.css'; // Import the updated CSS file

// Import images
import consultingImg from '../assets/Img/consultingHome.jpg';
import trainingImg from '../assets/Img/doctorTrainingHome.jpg';
import careerCounselingImg from '../assets/Img/CareerCounslingHome.jpg';
import examPreparationImg from '../assets/Img/doctorExamHome.jpg';
import workshopsImg from '../assets/Img/MedicalWorkShopHome.jpg';
import personalizedGuidanceImg from '../assets/Img/PersonalizeGuidanceHome.jpg';

const HomeDepartments = () => {
  const [activeTab, setActiveTab] = useState('facilities-tab-1');

  const handleButtonClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <section id="home-departments" className="home-departments ">
      {/* Section Title */}
      <div className="section-title">
        <h2 class="text-black" >Our Facilities</h2>
        <div className="underline"></div>
        <p className='mini-heading' >  Explore the range of facilities and services we offer to support your medical career development and academic excellence.</p>
      </div>
      {/* End Section Title */}

      {/* Options Buttons */}
      <div className="options-buttons">
        <button
          className={`btn btn-outline-dark ${activeTab === 'facilities-tab-1' ? 'active' : ''}`}
          onClick={() => handleButtonClick('facilities-tab-1')}
        >
          Consulting Services
        </button>
        <button
          className={`btn btn-outline-dark ${activeTab === 'facilities-tab-2' ? 'active' : ''}`}
          onClick={() => handleButtonClick('facilities-tab-2')}
        >
          Training Programs
        </button>
        <button
          className={`btn btn-outline-dark ${activeTab === 'facilities-tab-3' ? 'active' : ''}`}
          onClick={() => handleButtonClick('facilities-tab-3')}
        >
          Career Counseling
        </button>
        <button
          className={`btn btn-outline-dark ${activeTab === 'facilities-tab-4' ? 'active' : ''}`}
          onClick={() => handleButtonClick('facilities-tab-4')}
        >
          Exam Preparation
        </button>
        <button
          className={`btn btn-outline-dark ${activeTab === 'facilities-tab-5' ? 'active' : ''}`}
          onClick={() => handleButtonClick('facilities-tab-5')}
        >
          Medical Workshops
        </button>
        <button
          className={`btn btn-outline-dark ${activeTab === 'facilities-tab-6' ? 'active' : ''}`}
          onClick={() => handleButtonClick('facilities-tab-6')}
        >
          Personalized Guidance
        </button>
      </div>
      {/* End Options Buttons */}

      {/* Tab Content */}
      <div className="tab-content">
        {/* Consulting Services Tab */}
        <div className={`tab-pane fade ${activeTab === 'facilities-tab-1' ? 'show active' : ''}`} id="facilities-tab-1">
          <div className="card">
            <div className="card-header">
              <h3   >Consulting Services</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8">
                  <p className="fst-italic">Expert advice to navigate the medical field and achieve your professional goals.</p>
                  <p>Our consulting services provide personalized guidance on medical career paths, academic choices, and professional development. Benefit from our extensive experience and insights to make informed decisions and advance your career in healthcare.</p>
                  <p>We offer one-on-one sessions with experienced consultants, online consultations for your convenience, and access to a wealth of resources tailored to your needs. Whether you need help with career planning, exam strategies, or academic advice, we're here to support you every step of the way.</p>
                  <p>Our career counseling services are dedicated to guiding you through every stage of your medical career. Whether you're just starting out or looking to advance, our expert counselors provide personalized assessments to identify your strengths and interests. We offer in-depth career exploration to help you understand different medical specialties and opportunities. Our support extends to crafting impactful resumes and preparing for interviews, ensuring you stand out in a competitive field. Additionally, we host professional development workshops to enhance your skills and networking capabilities. With ongoing mentorship and tailored advice, we’re committed to helping you achieve your career goals and navigate any challenges you face in the medical profession.</p>
                </div>
                <div className="col-lg-4 text-center">
                  <img src={consultingImg} alt="Consulting Services" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Training Programs Tab */}
        <div className={`tab-pane fade ${activeTab === 'facilities-tab-2' ? 'show active' : ''}`} id="facilities-tab-2">
          <div className="card">
            <div className="card-header">
              <h3>Training Programs</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8">
                  <p className="fst-italic">Comprehensive training to enhance your medical skills and knowledge.</p>
                  <p>Our training programs cover various aspects of medical practice, including advanced techniques, patient care, and medical research. Join our programs to stay updated with the latest advancements and improve your expertise in the medical field.</p>
                  <p>We offer specialized workshops, hands-on training sessions, and interactive learning modules designed to cater to different levels of expertise. Enhance your skills with our expert-led programs and gain practical knowledge that can be applied directly to your medical practice.</p>
                  <p>Our career counseling services offer comprehensive support to help you make informed decisions about your medical career. From exploring various career paths to setting achievable goals, our experienced counselors provide personalized guidance tailored to your needs. We assist with resume building, interview preparation, and strategic career planning to ensure you are well-prepared for the professional world. Our career counseling sessions include valuable insights into job market trends and networking opportunities to help you build a successful career. Whether you need help with career transitions, specialized advice, or ongoing support, we are here to guide you every step of the way.</p>
                </div>
                <div className="col-lg-4 text-center">
                  <img src={trainingImg} alt="Training Programs" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Career Counseling Tab */}
        <div className={`tab-pane fade ${activeTab === 'facilities-tab-3' ? 'show active' : ''}`} id="facilities-tab-3">
          <div className="card">
            <div className="card-header">
              <h3>Career Counseling</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8">
                  <p className="fst-italic">Guidance to help you make informed decisions about your medical career.</p>
                  <p>Our career counseling services offer one-on-one sessions to help you explore career options, set professional goals, and develop a plan for achieving them. Gain valuable insights and support to navigate your medical career effectively.</p>
                  <p>We provide personalized career assessments, resume-building workshops, interview preparation, and networking opportunities. Our counselors are dedicated to helping you build a successful career in healthcare, with tailored advice and resources to guide you along the way.</p>
                  <p>Our career counseling services are designed to provide you with expert guidance to navigate your medical career effectively. We offer one-on-one counseling sessions to explore your career options, set realistic goals, and develop a personalized action plan. Our counselors provide valuable insights into career paths, job market trends, and professional development opportunities. With tailored advice on resume building, interview preparation, and networking strategies, we aim to empower you to make informed decisions and advance your career with confidence. Whether you're looking for career advice or strategic planning, our team is here to support your journey towards a successful and fulfilling career.</p>
                </div>
                <div className="col-lg-4 text-center">
                  <img src={careerCounselingImg} alt="Career Counseling" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Exam Preparation Tab */}
        <div className={`tab-pane fade ${activeTab === 'facilities-tab-4' ? 'show active' : ''}`} id="facilities-tab-4">
          <div className="card">
            <div className="card-header">
              <h3>Exam Preparation</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8">
                  <p className="fst-italic">Comprehensive resources and support for your medical exams.</p>
                  <p>Prepare effectively for your medical exams with our tailored resources and support. From study materials to practice tests, we provide everything you need to excel and achieve your desired results.</p>
                  <p>Our exam preparation services include mock exams, detailed study guides, expert tips, and interactive review sessions. Stay ahead of the competition and ensure you’re fully prepared for your exams with our comprehensive support.</p>
                  <p>Prepare for your medical exams with confidence using our comprehensive exam preparation services. We offer a range of resources designed to help you excel, including detailed study guides, practice tests, and expert tips. Our tailored support includes mock exams to simulate real test conditions, interactive review sessions to reinforce key concepts, and personalized strategies to enhance your study efficiency. Whether you're aiming for high scores or looking to improve your performance, our resources are crafted to address your specific needs and help you achieve your best results. With our support, you'll be well-equipped to tackle your exams and advance in your medical career.</p>
                </div>
                <div className="col-lg-4 text-center">
                  <img src={examPreparationImg} alt="Exam Preparation" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Medical Workshops Tab */}
        <div className={`tab-pane fade ${activeTab === 'facilities-tab-5' ? 'show active' : ''}`} id="facilities-tab-5">
          <div className="card">
            <div className="card-header">
              <h3>Medical Workshops</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8">
                  <p className="fst-italic">Interactive workshops to deepen your medical knowledge and skills.</p>
                  <p>Our medical workshops provide hands-on training and interactive sessions on various medical topics. Engage with experts, learn new techniques, and stay updated with the latest advancements in the medical field.</p>
                  <p>Participate in our workshops to gain practical experience, collaborate with peers, and enhance your understanding of complex medical concepts. Our workshops are designed to be engaging and informative, offering valuable insights and skills to support your professional development.</p>
                  <p>Dive into our engaging medical workshops designed to enhance your skills and knowledge in various medical fields. These interactive sessions provide hands-on training and insights from leading experts, covering the latest techniques and advancements. Participate in workshops that offer practical experience and collaborative learning opportunities, ensuring you stay updated and proficient in your field. Our workshops are tailored to address current challenges and emerging trends in medicine, making them an invaluable resource for both novice and experienced professionals. Join us to deepen your understanding, refine your skills, and connect with peers in a dynamic learning environment.</p>
                  
                  
                </div>
                <div className="col-lg-4 text-center">
                  <img src={workshopsImg} alt="Medical Workshops" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Personalized Guidance Tab */}
        <div className={`tab-pane fade ${activeTab === 'facilities-tab-6' ? 'show active' : ''}`} id="facilities-tab-6">
          <div className="card">
            <div className="card-header">
              <h3>Personalized Guidance</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8">
                  <p className="fst-italic">Tailored guidance to help you navigate your medical career journey.</p>
                  <p>Receive customized support and advice tailored to your unique career goals and aspirations. Our personalized guidance services are designed to provide you with the tools and resources you need to succeed in your medical career.</p>
                  <p>Whether you're seeking advice on career planning, academic choices, or professional development, our experienced consultants are here to assist you. Benefit from personalized recommendations, strategic planning, and ongoing support to achieve your career objectives.</p>
                  <p>Receive customized support tailored to your unique career aspirations with our personalized guidance services. Our expert consultants provide one-on-one sessions to help you navigate your medical career journey effectively. Whether you're seeking advice on career planning, academic choices, or professional development, our personalized approach ensures you get the guidance you need. Benefit from strategic planning, goal setting, and ongoing support designed to help you achieve your career objectives. With personalized recommendations and dedicated assistance, you’ll be equipped to make informed decisions and advance confidently in your medical career.</p>
                </div>
                <div className="col-lg-4 text-center">
                  <img src={personalizedGuidanceImg} alt="Personalized Guidance" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Tab Content */}
    </section>
  );
};

export default HomeDepartments;
