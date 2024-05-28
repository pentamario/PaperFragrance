import React from 'react'; // Import React
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import { useParams, Link } from 'react-router-dom'; // Import useParams and Link from react-router-dom
import './FragranceDetails.css'; // Import custom styles for FragranceDetails component

// FragranceDetails component to display details of a specific fragrance
const FragranceDetails = ({ fragrances }) => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const fragrance = fragrances.find((item) => item.id === parseInt(id)); // Find the fragrance with the matching id

  // If the fragrance is not found, display a message
  if (!fragrance) {
    return <div>Fragrance not found</div>;
  }

  return (
    <div className="fragrance-details">
      <div className="fragrance-image-section">
        <img src={fragrance.image} alt={fragrance.name} className="fragrance-image" /> {/* Display the fragrance image */}
      </div>
      <div className="fragrance-info-section">
        <h1>{fragrance.name}</h1> {/* Display the fragrance name */}
        <p><strong>Category:</strong> {fragrance.category}</p> {/* Display the fragrance category */}
        <p><strong>Price:</strong> ${fragrance.price}</p> {/* Display the fragrance price */}
        <p>{fragrance.description}</p> {/* Display the fragrance description */}
        <h2>Reviews</h2>
        <ul className="reviews-list">
          {/* Iterate over reviews and display each one */}
          {fragrance.reviews.map((review, index) => (
            <li key={index} className="review-item">
              <div className="reviewer-name">{review.reviewer}</div> {/* Display reviewer's name */}
              <div className="review-rating">{review.rating}/10</div> {/* Display review rating */}
              <div className="review-text">{review.text}</div> {/* Display review text */}
            </li>
          ))}
        </ul>
        <Link to={`http://localhost:3000/scented-papers?highlight=${id}`}>
          <button className="scented-paper-button">Scented Paper</button> {/* Link to the scented papers page with highlight parameter */}
        </Link>
      </div>
    </div>
  );
};

// Prop types for type checking
FragranceDetails.propTypes = {
  fragrances: PropTypes.array.isRequired, // fragrances prop should be an array and is required
};

export default FragranceDetails; // Export FragranceDetails component
