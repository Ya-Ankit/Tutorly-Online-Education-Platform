// src/Components/SlidePage.jsx
import React from 'react';
import student from '../assets/student.jpg';
import teacher from '../assets/teacher.jpg';

const SlidePage = () => {
  return (
    <div className="h-screen  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-full">
          {/* Find Tutor Card */}
          <div className="w-1/2 h-full p-4 transition-transform hover:scale-105 flex items-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="flex items-center justify-center h-full">
                {/* Image */}
                <img src={student} alt="Find Tutor" className="h-full w-auto object-cover" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Find Tutor</h3>
                <p className="text-gray-600 mb-4">
                  <ul className="list-disc pl-4">
                    <li>Discover Qualified Tutors</li>
                    <li>Personalized Learning Experience</li>
                    <li>Wide Range of Subjects</li>
                  </ul>
                </p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Find Tutor</button>
              </div>
            </div>
          </div>
          
          {/* Become a Tutor Card */}
          <div className="w-1/2 h-full p-4 transition-transform hover:scale-105 flex items-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="flex items-center justify-center h-full">
                {/* Image */}
                <img src={teacher} alt="Become a Tutor" className="h-full w-auto object-cover" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Become a Tutor</h3>
                <p className="text-gray-600 mb-4">
                  <ul className="list-disc pl-4">
                    <li>Find New Students</li>
                    <li>Grow Your Business</li>
                    <li>Get Paid Securely</li>
                  </ul>
                </p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Become a Tutor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePage;
