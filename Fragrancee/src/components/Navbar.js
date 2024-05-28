import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Navbar.css'; // Import custom styles for Navbar component

// Navbar component to display the navigation bar
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left"> {/* Container for the left side of the navbar */}
        <img src="/images/logo.webp" alt="Logo" className="navbar-logo" /> {/* Display the logo */}
        <h1 className="navbar-title">Fragrance Catalog</h1> {/* Display the site title */}
      </div>
      <div className="navbar-right"> {/* Container for the right side of the navbar */}
        <Link to="/" className="navbar-link">Home</Link> {/* Link to the homepage */}
      </div>
    </nav>
  );
};

export default Navbar; // Export Navbar component
