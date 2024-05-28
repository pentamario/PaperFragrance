import React from 'react'; // Import React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import components from react-router-dom for routing
import Header from './components/Header'; // Import Header component
import Dashboard from './components/Dashboard'; // Import Dashboard component
import ScentedPapers from './components/ScentedPapers'; // Import ScentedPapers component
import Footer from './components/Footer'; // Import Footer component
import './App.css'; // Import custom styles for App component

// Main App component
const App = () => {
  return (
    <Router> {/* Set up the Router for the application */}
      <div className="App">
        <Header /> {/* Render Header component */}
        <main> {/* Main content area */}
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* Route for the Dashboard component */}
            <Route path="/scented-papers" element={<ScentedPapers />} /> {/* Route for the ScentedPapers component */}
          </Routes>
        </main>
        <Footer /> {/* Render Footer component */}
      </div>
    </Router>
  );
};

export default App; // Export App component
