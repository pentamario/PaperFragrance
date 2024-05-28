import React from 'react'; // Import React
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import './FilterMenu.css'; // Import custom styles for FilterMenu component

// FilterMenu component to filter items by category
const FilterMenu = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['all', 'fruity', 'floral', 'musk']; // Array of category options

  // Handle the change event when a new category is selected
  const handleChange = (event) => {
    onCategoryChange(event.target.value); // Call onCategoryChange with the selected category
  };

  return (
    <div className="filter-menu">
      <h3>Filter by category</h3> {/* Title for the filter menu */}
      <select 
        value={selectedCategory} // The currently selected category
        onChange={handleChange} // Function to handle category change
        className="category-dropdown"
      >
        {categories.map((category) => (
          <option key={category} value={category}> {/* Option for each category */}
            {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalize first letter */}
          </option>
        ))}
      </select>
    </div>
  );
};

// Prop types for type checking
FilterMenu.propTypes = {
  selectedCategory: PropTypes.string.isRequired, // Selected category must be a string
  onCategoryChange: PropTypes.func.isRequired, // onCategoryChange must be a function
};

export default FilterMenu; // Export FilterMenu component
