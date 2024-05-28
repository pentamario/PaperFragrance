import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import './FragranceList.css'; // Import custom styles for FragranceList component

// FragranceList component to display a list of fragrances
function FragranceList({ fragrances }) {
  return (
    <div className="fragrance-list">
      {/* Iterate over the fragrances array and render each fragrance */}
      {fragrances.map((fragrance) => (
        <div key={fragrance.id} className="fragrance-card">
          {/* Link to the FragranceDetails page for the specific fragrance */}
          <Link to={`/fragrance/${fragrance.id}`}>
            <img src={fragrance.image} alt={fragrance.name} className="fragrance-image" /> {/* Display fragrance image */}
          </Link>
          <h2>{fragrance.name}</h2> {/* Display fragrance name */}
          <p>{fragrance.description}</p> {/* Display fragrance description */}
          <p><strong>Category:</strong> {fragrance.category}</p> {/* Display fragrance category */}
          <p><strong>Price:</strong> ${fragrance.price}</p> {/* Display fragrance price */}
          {/* Link to the FragranceDetails page with a button */}
          <Link to={`/fragrance/${fragrance.id}`}>
            <button className="details-button">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

// Prop types for type checking
FragranceList.propTypes = {
  fragrances: PropTypes.array.isRequired, // fragrances prop should be an array and is required
};

export default FragranceList; // Export FragranceList component
