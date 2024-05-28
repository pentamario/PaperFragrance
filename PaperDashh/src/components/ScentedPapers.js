import React from 'react'; // Import React
import { useLocation } from 'react-router-dom'; // Import useLocation hook from react-router-dom for accessing URL query parameters
import './ScentedPapers.css'; // Import custom styles for ScentedPapers component

// Array of scented paper products with their details
const scentedPapers = [
  { name: 'Summer Breeze', image: 'fragrance1.webp', id: 1 },
  { name: 'Rose Garden', image: 'fragrance2.webp', id: 2 },
  { name: 'Mystic Musk', image: 'fragrance3.webp', id: 3 },
  { name: 'Tropical Paradise', image: 'fragrance4.webp', id: 4 },
  { name: 'Lavender Fields', image: 'fragrance5.webp', id: 5 },
  { name: 'Ocean Mist', image: 'fragrance6.webp', id: 6 },
  { name: 'Blossom Delight', image: 'fragrance7.webp', id: 7 },
  { name: 'Midnight Musk', image: 'fragrance8.webp', id: 8 },
  { name: 'Citrus Zest', image: 'fragrance9.webp', id: 9 },
  { name: 'Petal Bliss', image: 'fragrance10.webp', id: 10 },
  { name: 'Earthy Musk', image: 'fragrance11.webp', id: 11 },
  { name: 'Berry Bliss', image: 'fragrance12.webp', id: 12 }
];

// Custom hook to get query parameters from URL
const useQuery = () => {
  return new URLSearchParams(useLocation().search); // Create URLSearchParams object from the URL's query string
};

const ScentedPapers = () => {
  const query = useQuery(); // Get query parameters
  const highlightId = query.get('highlight'); // Get the 'highlight' parameter from the query string

  return (
    <div className="scented-papers">
      <h2>Scented Papers</h2>
      <ul>
        {scentedPapers.map((paper) => (
          <li
            key={paper.id}
            className={`scented-paper-item ${highlightId == paper.id ? 'highlight' : ''}`} // Apply 'highlight' class if the paper ID matches the highlightId
          >
            <img src={`/images/${paper.image}`} alt={paper.name} /> {/* Display paper image */}
            <div className="paper-details">
              <h3>{paper.name}</h3> {/* Display paper name */}
              <div className="button-group">
                <a href={`http://localhost:3001/fragrance/${paper.id}`} className="view-button">
                  View Fragrance
                </a>
                <button className="price-button">$1.49</button> {/* Button showing the price */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScentedPapers; // Export ScentedPapers component
