import React from 'react'; // Import React
import './Footer.css'; // Import custom styles for Footer component

// Footer component to display footer content
const Footer = () => {
  return (
    <footer className="footer">
      <hr className="footer-separator" /> {/* Horizontal separator line */}
      <p>Trusted by Many</p> {/* Footer message */}
      <div className="companies">
        {/* List of companies */}
        <span>rollCraft</span>
        <span>PapyrusCo</span>
        <span>PaperMates</span>
        <span>SheetMasters</span>
        <span>QuillInk</span>
        <span>FiberFold</span>
        <span>ScrollWorks</span>
        <span>LeafyPages</span>
      </div>
    </footer>
  );
};

export default Footer; // Export Footer component
