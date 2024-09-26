import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported
import './AboutTestimonial.css'; // Import your custom CSS

const AboutTestimonial = () => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-container">
        <h2 className="text-center mb-4 Test-heading ">What Our Parent Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex">
                {/* Testimonial 1 */}
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client 1" className="rounded-circle img-fluid" />
                  </div>
                  <div className="testimonial-content">
                    <p>"The coaching provided by this institute has been instrumental in my child's success. The medical faculty is knowledgeable and supportive."</p>
                    <small><strong>Dr. Priya Sharma</strong></small>
                  </div>
                </div>
                {/* Testimonial 2 */}
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Client 2" className="rounded-circle img-fluid" />
                  </div>
                  <div className="testimonial-content">
                    <p>"We have seen remarkable improvement in my daughter's academic performance thanks to the personalized coaching she received here."</p>
                    <small><strong>Mr. Rajesh Kumar</strong></small>
                  </div>
                </div>
                {/* Testimonial 3 */}
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client 3" className="rounded-circle img-fluid" />
                  </div>
                  <div className="testimonial-content">
                    <p>"The institute’s tailored approach to medical coaching has greatly benefited my son. The support from the tutors is exceptional."</p>
                    <small><strong>Mrs. Savita Gupta</strong></small>
                  </div>
                </div>
              </div>
            </div>
            {/* Additional Testimonial Slides */}
            <div className="carousel-item">
              <div className="d-flex">
                {/* Testimonial 4 */}
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Client 4" className="rounded-circle img-fluid" />
                  </div>
                  <div className="testimonial-content">
                    <p>"The guidance provided by the medical coaching institute has been top-notch. My child's preparation has improved significantly."</p>
                    <small><strong>Dr. Amit Singh</strong></small>
                  </div>
                </div>
                {/* Testimonial 5 */}
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img src="https://randomuser.me/api/portraits/women/69.jpg" alt="Client 5" className="rounded-circle img-fluid" />
                  </div>
                  <div className="testimonial-content">
                    <p>"Fantastic coaching with experienced instructors. The progress my daughter has made is truly impressive."</p>
                    <small><strong>Mrs. Sunita Verma</strong></small>
                  </div>
                </div>
                {/* Testimonial 6 */}
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img src="https://randomuser.me/api/portraits/men/47.jpg" alt="Client 6" className="rounded-circle img-fluid" />
                  </div>
                  <div className="testimonial-content">
                    <p>"We are thrilled with the results. The curriculum and teaching methods are highly effective and the support has been outstanding."</p>
                    <small><strong>Dr. Rahul Yadav</strong></small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonial;
