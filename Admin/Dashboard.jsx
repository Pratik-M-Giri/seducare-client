import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Items per page

  const { logout } = useAuth(); // Get logout function from AuthContext
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axios.get('http://localhost:5000/api/admission/forms')
      .then(response => {
        console.log('API Response:', response.data);
        setData(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('API Error:', err);
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  // Calculate paginated data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle previous and next pagination
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleLogout = () => {
    logout(); // Call logout function
    navigate('/login'); // Redirect to login page
  };

  // Handle navigation to appointmentData
  const handleGoToAppointments = () => {
    navigate('/appointmentData');
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-center mt-5 text-danger">Error: {error}</div>;

  return (
    <div className="container mt-5">
      <div className=" top-btns d-flex justify-content-between">
        <button
          className="btn btn-info btn-custom mt-5"
          onClick={handleGoToAppointments}
        >
          Go to Appointments
        </button>

        <button 
          className="btn btn-danger btn-custom mt-5"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <h1 className="text-center mb-4">Admission Form Data</h1>
      <div className="table-responsive">
        <table className="table custom-table table-bordered table-hover table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Address</th>
              <th scope="col">Current School</th>
              <th scope="col">Grade</th>
              <th scope="col">Interested In</th>
              <th scope="col">Additional Info</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? currentItems.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{indexOfFirstItem + index + 1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{new Date(item.dob).toLocaleDateString()}</td>
                <td>{item.address}</td>
                <td>{item.currentSchool}</td>
                <td>{item.grade}</td>
                <td>{item.interestedIn}</td>
                <td>{item.additionalInfo}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="10" className="text-center">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
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
  );
};

export default Dashboard;
