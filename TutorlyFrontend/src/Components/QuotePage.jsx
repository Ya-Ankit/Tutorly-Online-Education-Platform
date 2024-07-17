// src/Components/QuotePage.jsx
import React from 'react';
import tutorImage from '../assets/Firefly.png';

const QuotePage = () => {
  return (
    <div className="h-screen bg-grey-100 text-white flex justify-center items-center">
      {/* Left half */}
      <div className="w-1/2 flex justify-center items-center">
        <div className=" w-3/4 h-auto bg-white bg-opacity-75 rounded-lg p-8">
          <h2 className="text-6xl font-bold text-gray-800 mb-4">Unlock Your Potential With Personalized Tutoring</h2>
          <p className="text-gray-800 mb-8">Get one-on-one guidance and personalized sessions to achieve your academic goals.</p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700">Get Started</button>
        </div>
      </div>
      
      {/* Right half */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-3/4 h-3/4 rounded-3xl overflow-hidden">
          <img src={tutorImage} alt="Tutor" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
