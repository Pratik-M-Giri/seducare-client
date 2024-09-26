import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HomeContactPage.css'; // Ensure this path is correct

const HomeContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations in milliseconds
      once: true, // Whether animation should happen only once
      easing: 'ease-in-out', // Default easing for AOS animations
    });
  }, []);

  return (
    <div className="home-contact-background">
      <div className="background-image" data-aos="fade-up"></div>
      <section id="contact" className="contact section">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Contact Us</h2>
            <p>Reach out to us for any inquiries or assistance.</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Location</h3>
                  <p>
                    S-EDUCARE<br />
                    Bangalore City / Maharashtra Kopargaon Office / Mangalore Office
                  </p>
                </div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 7248909551</p>
                </div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-person flex-shrink-0"></i>
                <div>
                  <h3>Contact Person</h3>
                  <p>Dr. Shivam Deokar</p>
                </div>
              </div>
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="600">
                <i className="bi bi-briefcase flex-shrink-0"></i>
                <div>
                  <h3>College Details</h3>
                  <p>MBBS, BAMS, BHMS, BDS<br />STATE: We do admission work all over India</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContactPage;
