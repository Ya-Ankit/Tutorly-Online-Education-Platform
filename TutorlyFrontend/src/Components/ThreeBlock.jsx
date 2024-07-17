// src/Components/ThreeBlock.jsx
import React from 'react';

const ThreeBlock = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">How Tutorly works:</h2>
        </div>
        <div className="flex justify-around">
          {/* First Block */}
          <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Find Tutor</h3>
            <p className="text-gray-600">Browse through our database of qualified tutors and find the perfect match for you.</p>
          </div>

          {/* Second Block */}
          <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Start Learning.</h3>
            <p className="text-gray-600">Schedule your lessons, meet your tutor, and start learning at your own pace.</p>
          </div>

          {/* Third Block */}
          <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Speak. Read. Write. Repeat.</h3>
            <p className="text-gray-600">Practice regularly and watch your language skills improve over time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeBlock;
