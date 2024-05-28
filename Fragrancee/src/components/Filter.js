import React from 'react'; // Import React
import './Filter.css'; // Import custom styles for Filter component

// Filter component to filter items by category
const Filter = ({ category, setCategory }) => {
  // Handle the change event when a checkbox is clicked
  const handleFilterChange = (e) => {
    const value = e.target.value; // Get the value of the checkbox
    setCategory((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((cat) => cat !== value)
    ); // Add or remove the category based on whether the checkbox is checked or not
  };

  return (
    <div className="filter">
      <h2>Filter by category</h2> {/* Title for the filter section */}
      <label>
        <input
          type="checkbox"
          value="fruity"
          onChange={handleFilterChange}
          checked={category.includes('fruity')} // Check if 'fruity' is included in the selected categories
        />
        Fruity
      </label>
      <label>
        <input
          type="checkbox"
          value="floral"
          onChange={handleFilterChange}
          checked={category.includes('floral')} // Check if 'floral' is included in the selected categories
        />
        Floral
      </label>
      <label>
        <input
          type="checkbox"
          value="musk"
          onChange={handleFilterChange}
          checked={category.includes('musk')} // Check if 'musk' is included in the selected categories
        />
        Musk
      </label>
    </div>
  );
};

export default Filter; // Export Filter component
