import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation
import './Header.css'; // Import custom styles for Header component

// Header component to display the navigation header
const Header = () => {
  return (
    <header className="header">
      {/* Link to the homepage */}
      <Link to="/" className="header-title">
        <img src="/images/paperdashlogo.svg" alt="PaperDash Logo" className="header-logo" /> {/* Logo image */}
        PaperDash
      </Link>
      <nav>
        <ul>
          {/* Navigation link to the Scented Papers page */}
          <li><Link to="/scented-papers">Scented Papers</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; // Export Header component
