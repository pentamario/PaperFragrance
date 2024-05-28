import React, { useState, useEffect } from 'react'; // Import React and hooks
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import Navbar from './components/Navbar'; // Import Navbar component
import FilterMenu from './components/FilterMenu'; // Import FilterMenu component
import FragranceList from './components/FragranceList'; // Import FragranceList component
import Pagination from './components/Pagination'; // Import Pagination component
import Footer from './components/Footer'; // Import Footer component
import FragranceDetails from './components/FragranceDetails'; // Import FragranceDetails component
import './App.css'; // Import custom styles for App component

// Main App component
function App() {
  // State to hold the list of fragrances
  const [fragrances, setFragrances] = useState([]);
  // State to hold the selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState('all');
  // State to hold the current page number for pagination
  const [currentPage, setCurrentPage] = useState(1);
  // Constant for the number of fragrances to display per page
  const fragrancesPerPage = 4;

  // Effect to fetch fragrances data from the server when the component mounts
  useEffect(() => {
    fetch('/fragrances.json')
      .then(response => response.json())
      .then(data => setFragrances(data))
      .catch(error => console.error('Error fetching fragrances:', error));
  }, []);

  // Handle category change from the filter menu
  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Update the selected category
    setCurrentPage(1); // Reset to the first page when the category changes
  };

  // Filter fragrances based on the selected category
  const filteredFragrances =
    selectedCategory === 'all'
      ? fragrances
      : fragrances.filter((fragrance) => fragrance.category === selectedCategory);

  // Calculate indices for the current page's fragrances
  const indexOfLastFragrance = currentPage * fragrancesPerPage;
  const indexOfFirstFragrance = indexOfLastFragrance - fragrancesPerPage;
  // Get the fragrances for the current page
  const currentFragrances = filteredFragrances.slice(indexOfFirstFragrance, indexOfLastFragrance);

  // Handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Render Navbar component */}
        <div className="main-content">
          <Routes>
            {/* Route for the home page displaying the fragrance catalog */}
            <Route
              path="/"
              element={
                <>
                  <div className="content-wrapper">
                    {/* Render FilterMenu component */}
                    <FilterMenu selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
                    <div className="catalog-wrapper">
                      {/* Render FragranceList component */}
                      <FragranceList fragrances={currentFragrances} />
                    </div>
                  </div>
                  {/* Render Pagination component */}
                  <Pagination
                    fragrancesPerPage={fragrancesPerPage}
                    totalFragrances={filteredFragrances.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </>
              }
            />
            {/* Route for the fragrance details page */}
            <Route
              path="/fragrance/:id"
              element={<FragranceDetails fragrances={fragrances} />}
            />
          </Routes>
        </div>
        <Footer /> {/* Render Footer component */}
      </div>
    </Router>
  );
}

export default App; // Export App component
