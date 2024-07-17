// src/Components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center space-x-2">
          {/* You can replace the text with your logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* Your logo SVG or image */}
          </svg>
          <span className="text-white font-bold text-lg">Tutorly</span>
        </Link>
        <div className="space-x-4">
          <Link to="/Findtutor" className="text-white hover:text-gray-200">Find Tutor</Link>
          <Link to="/Becometutor" className="text-white hover:text-gray-200">Become a Tutor</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About</Link>
        </div>
      </div>
      <div>
        <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
