import React from 'react';

const Level = () => {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      {/* Left half */}
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 ml-8">What's Your Topic Level</h2>
      </div>
      
      {/* Right half */}
      <div className="w-1/2 bg-white h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <label htmlFor="just-starting" className="mb-2 text-gray-800 border border-gray-800 rounded-md p-2 w-96">
            <input type="radio" id="just-starting" name="level" value="just-starting" className="mr-2" />
            I'm just starting
          </label>
          <label htmlFor="basics" className="mb-2 text-gray-800 border border-gray-800 rounded-md p-2 w-96">
            <input type="radio" id="basics" name="level" value="basics" className="mr-2" />
            I know the basics
          </label>
          <label htmlFor="good-level" className="mb-2 text-gray-800 border border-gray-800 rounded-md p-2 w-96">
            <input type="radio" id="good-level" name="level" value="good-level" className="mr-2" />
            I'm at a good level
          </label>
          <label htmlFor="professional-level" className="mb-2 text-gray-800 border border-gray-800 rounded-md p-2 w-96">
            <input type="radio" id="professional-level" name="level" value="professional-level" className="mr-2" />
            I'm at a professional level
          </label>
        </div>
        {/* Skip button */}
        <button className="absolute top-20 right-4 underline text-gray-800">Skip</button>
        {/* Continue button */}
        <button className="absolute bottom-36 right-48 w-96 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700">Continue</button>
      </div>
    </div>
  );
};

export default Level;
