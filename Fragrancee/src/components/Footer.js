import React from 'react'; // Import React
import './Footer.css'; // Import custom styles for Footer component

// Footer component to display footer content
const Footer = () => {
  return (
    <footer className="footer"> {/* Container for the footer section */}
      <p>Trusted by many:</p> {/* Footer message */}
      <ul>
        {/* List of trusted companies */}
        <li>Fragrance Haven</li>
        <li>Aroma Essence</li>
        <li>Perfume Paradise</li>
        <li>Scent Sanctuary</li>
        <li>Essence Emporium</li>
        <li>Perfume Pavilion</li>
      </ul>
    </footer>
  );
};

export default Footer; // Export Footer component
