



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth from your AuthContext
import AOS from 'aos';
import './AppointmentData.css'
import 'aos/dist/aos.css'; // Import AOS styles
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AppointmentData = () => {
  const { isAuthenticated, logout } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Items per page

  const navigate = useNavigate(); // Initialize useNavigate

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login page
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Only animate once
    });

    // Fetch appointments from the backend
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/appointments'); // Adjust the URL based on your API endpoint
        if (response.ok) {
          const data = await response.json();
          setAppointments(data);
          setLoading(false);
        } else {
          toast.error('Failed to load appointment data.');
          setLoading(false);
        }
      } catch (error) {
        toast.error('There was an error fetching the data.');
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appointments.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(appointments.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(appointments.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleLogout = () => {
    logout(); // Call logout function
    navigate('/login'); // Redirect to login page
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-danger">Error: {error}</div>;

  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="d-flex justify-content-between mb-4 LogoutBTN  ">
          <button
            className="btn btn-danger mt-5"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="btn btn-info mt-5"
            onClick={() => navigate('/admin-dashboard')} // Adjust navigation as needed
          >
            Go to Dashboard
          </button>
        </div>
        <div className="section-title" data-aos="fade-up">
          <h2 className="text-black">Appointment Data</h2>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {currentItems.length > 0 ? (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date & Time</th>
                  <th>Course</th>
                  <th>Consultant</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{appointment.name}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.phone}</td>
                    <td>{new Date(appointment.date).toLocaleString()}</td>
                    <td>{appointment.course}</td>
                    <td>{appointment.consultant}</td>
                    <td>{appointment.message || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No appointments available.</p>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <button
            className="btn btn-primary"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <nav>
            <ul className="pagination">
              {pageNumbers.map(number => (
                <li
                  key={number}
                  className={`page-item ${number === currentPage ? 'active' : ''}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(number)}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default AppointmentData;
