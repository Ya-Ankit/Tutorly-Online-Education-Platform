// src/Components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
     

      {/* Main content */}
      <div className="max-w-7xl h-100 px-8 py-12 bg-white rounded-lg shadow-lg">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Tutorly</h2>
        <div className="flex flex-col md:flex-row justify-between mr-5">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At Tutorly, we believe in making education accessible to all. 
              Our mission is to connect students with qualified tutors who can provide personalized learning experiences, 
              helping them reach their full potential.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Empowerment</li>
              <li>Diversity</li>
              <li>Excellence</li>
              <li>Innovation</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Team</h3>
            <p className="text-gray-600 mb-6">
              We are a group of college students passionate about education and technology, 
              dedicated to creating Tutorly to make learning accessible and enjoyable for everyone.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Aryan Yadav</li>
              <li>Ankit Yadav</li>
              <li>Poorva Sahu</li>
              <li>Akash Verma</li>
            </ul>
          </div>
        </div>
                {/* SVG wave-like shape */}
            <div className=" w-full h-8">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                    className="fill-current text-gray-400"
                ></path>
                </svg>
            </div>
      </div>
    </div>
  );
};

export default About;
