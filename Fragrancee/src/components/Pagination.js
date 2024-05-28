import React from 'react'; // Import React
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import './Pagination.css'; // Import custom styles for Pagination component

// Pagination component to display pagination controls
const Pagination = ({ fragrancesPerPage, totalFragrances, paginate, currentPage }) => {
  const pageNumbers = []; // Array to hold the page numbers

  // Calculate the total number of pages and add them to the pageNumbers array
  for (let i = 1; i <= Math.ceil(totalFragrances / fragrancesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination"> {/* Container for the pagination controls */}
      <ul className="pagination-list"> {/* List to hold the page number buttons */}
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}> {/* Add 'active' class to the current page */}
            <button onClick={() => paginate(number)} className="page-link">
              {number} {/* Display the page number */}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Prop types for type checking
Pagination.propTypes = {
  fragrancesPerPage: PropTypes.number.isRequired, // Number of fragrances to display per page
  totalFragrances: PropTypes.number.isRequired, // Total number of fragrances
  paginate: PropTypes.func.isRequired, // Function to handle pagination
  currentPage: PropTypes.number.isRequired, // Current active page number
};

export default Pagination; // Export Pagination component
