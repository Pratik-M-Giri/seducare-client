import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './BgContact.css'; // Import your CSS

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      easing: 'ease-out', // Easing function for animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <div className="bg-contact" data-aos="fade-up">
        <div>
          {/* <h1>Your Heading Here</h1> */}
        </div>
      </div>
      {/* Other components */}
    </div>
  );
}

export default App;
