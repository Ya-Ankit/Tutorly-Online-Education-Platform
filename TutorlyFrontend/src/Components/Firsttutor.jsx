import React from 'react';
import tutorImage from '../assets/Tutor.jpg';

const FirstTutor = () => {
  return (
    <div className="h-screen bg-gray-100 text-black flex justify-center items-center">
      {/* Left half */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-3/4 h-auto bg-white bg-opacity-75 rounded-lg p-8">
          <h2 className="text-6xl font-bold text-gray-800 mb-4">Online Tutors & Teachers For Private Lessons</h2>
          <p className="text-gray-800 mb-8">Get one-on-one guidance and personalized sessions to achieve your academic goals.</p>
          <div className="relative">
            <select className="block appearance-none w-full  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Math</option>
              <option>English</option>
              <option>Science</option>
              <option>Hindi</option>
              <option>Genral Knowledge</option>
              <option>HTML</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Art</option>
              {/* Add more options as needed */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              {/* Dropdown arrow icon */}
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 12L5 7h10z" />
              </svg>
            </div>
          </div>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 mt-4">Get Started</button>
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

export default FirstTutor;
