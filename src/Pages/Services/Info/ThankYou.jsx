import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ThankYou.css'; // Ensure you have a CSS file for styling

const ThankYou = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Function to render the JSON data as a horizontal table
  const renderHorizontalTable = (data) => {
    if (!data) return null;

    // Convert the data to an array of [key, value] pairs
    const entries = Object.entries(data);

    return (
      <table className="data-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{JSON.stringify(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="thank-you-container">
      <h2 className="thank-you-heading">Thank You!</h2>
      <p className="thank-you-message">Your form has been submitted successfully.</p>

      <button 
        className="collapse-button" 
        onClick={toggleCollapse}
      >
        {isCollapsed ? 'Show Submitted Data' : 'Hide Submitted Data'}
      </button>

      {!isCollapsed && (
        <div className="form-data-container">
          <h3>Submitted Data:</h3>
          {renderHorizontalTable(formData)}
        </div>
      )}
    </div>
  );
};

export default ThankYou;
