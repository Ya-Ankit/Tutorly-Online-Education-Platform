import React from 'react';
import { useState } from 'react';

const TutorCards = () => {

    const [price, setPrice] = useState(0);

    const handlePriceChange = (e) => {
        setPrice(parseInt(e.target.value));
    };

  return (
    <div className="flex justify-center items-center  mt-8 ml-15 mr-15">
      <div className="w-screen bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 flex flex-wrap">
          <div className="w-full md:w-1/4 px-3 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              I want to learn
            </label>
            <select id="subject" className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Math</option>
              <option>English</option>
              <option>Science</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="w-full md:w-1/4 px-3 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price Per Lesson (Rs)
            </label>
            <input id="price" type="range" min="0" max="1000" value={price} onChange={handlePriceChange} className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            <p className="text-gray-700 font-bold mt-2">Price: {price}</p>
             </div>
          <div className="w-full md:w-1/4 px-3 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              City
            </label>
            <select id="city" className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Kolkata</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="w-full md:w-1/4 px-3 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
              I'm available
            </label>
            <select id="time" className="appearance-none block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="w-full px-3 mb-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-50 ">Find Tutors</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCards;
