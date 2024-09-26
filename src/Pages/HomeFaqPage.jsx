import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeFaqPage.css'; // Make sure to create and include styles in this file

const HomeFaqPage = () => {
  return (
    <section className="faq-section">
      <div className="container"> {/* This container now has margins applied */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 text-center">
            <div className="section-title">
              <h4 className="text-black">FAQ's</h4>
              <h2 className="text-black">Frequently Asked <span>Questions</span></h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="accordion-group" id="accordionExampleLeft">
              {faqData.slice(0, Math.ceil(faqData.length / 2)).map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`headingLeft${index}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseLeft${index}`}
                      aria-expanded="false"
                      aria-controls={`collapseLeft${index}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapseLeft${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`headingLeft${index}`}
                    data-bs-parent="#accordionExampleLeft"
                  >
                    <div className="accordion-body">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <div className="accordion-group" id="accordionExampleRight">
              {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`headingRight${index}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseRight${index}`}
                      aria-expanded="false"
                      aria-controls={`collapseRight${index}`}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapseRight${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`headingRight${index}`}
                    data-bs-parent="#accordionExampleRight"
                  >
                    <div className="accordion-body">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ data
const faqData = [
  // Doctor Consultancy Related Questions
  {
    question: "What should I consider when choosing a consultancy for doctor referrals?",
    answer: "When choosing a consultancy for doctor referrals, consider their track record, the variety of specialists they work with, and patient testimonials. Ensure they understand your specific needs and can provide tailored recommendations."
  },
  {
    question: "How can a consultancy help in finding the right specialist?",
    answer: "A consultancy can help by assessing your medical condition and matching you with specialists who have the relevant expertise. They streamline the process, ensuring you receive high-quality care suited to your needs."
  },
  {
    question: "What is the process of consulting through a consultancy service?",
    answer: "The process typically involves an initial consultation where your needs and medical history are assessed. The consultancy then matches you with appropriate specialists and helps schedule your appointments."
  },
  {
    question: "Are there any fees associated with using a consultancy service?",
    answer: "Yes, consultancy services may have associated fees. These can vary depending on the level of service and the specialists involved. Contact us for detailed information on our fees and payment options."
  },
  {
    question: "How can I get follow-up support after my consultation?",
    answer: "Follow-up support can be arranged by contacting our office or through our online patient portal. We provide ongoing assistance to ensure your needs are met and any further consultations are scheduled as necessary."
  },
  {
    question: "Can I request a second opinion through the consultancy?",
    answer: "Yes, you can request a second opinion. Our consultancy can facilitate this by arranging consultations with additional specialists to ensure you receive the most accurate and comprehensive advice."
  },
  // Coaching Classes Related Questions
  {
    question: "What types of coaching classes do you offer?",
    answer: "We offer a variety of coaching classes including academic tutoring, career coaching, and personal development. Each class is tailored to meet the individual needs of our students."
  },
  {
    question: "How do I enroll in a coaching class?",
    answer: "To enroll, you can visit our website and fill out the registration form, or contact our office directly. We’ll guide you through the process and help you choose the right class based on your goals."
  },
  {
    question: "What is the duration of each coaching class?",
    answer: "The duration of our coaching classes varies depending on the subject and level. Typically, classes are offered in blocks of 4 to 8 weeks, with options for one-on-one or group sessions."
  },
  {
    question: "Do you offer online coaching sessions?",
    answer: "Yes, we offer online coaching sessions for those who prefer or need remote learning options. These sessions are conducted via video conferencing tools and are designed to provide the same quality of instruction as in-person classes."
  },
  {
    question: "Are there any prerequisites for joining a coaching class?",
    answer: "Prerequisites vary by class. Some may require a basic level of knowledge or previous coursework, while others are open to all. Check the specific course details or contact us for more information."
  },
  {
    question: "What is the cost of your coaching classes?",
    answer: "The cost of coaching classes depends on the type of class and the duration. We offer various pricing options and sometimes have discounts or packages. Contact us for detailed pricing information."
  }
];

export default HomeFaqPage;
