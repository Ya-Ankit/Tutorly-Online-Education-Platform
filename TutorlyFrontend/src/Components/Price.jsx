import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Price = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      {/* Left half */}
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 ml-8">Price Per Hour Lesson</h2>
      </div>
      
      {/* Right half */}
      <div className="w-1/2 bg-white h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-96">
          {/* Price range input */}
          <InputRange
            maxValue={2000}
            minValue={0}
            value={priceRange}
            onChange={handlePriceChange}
          />
          {/* Selected price display */}
          <div className="mb-4">
            <label className="text-gray-800 ml-5">Selected Price:</label>
            <div className="border border-gray-800 rounded-md p-2 ml-4 mt-2">{`Rs. ${priceRange.min} - Rs. ${priceRange.max}`}</div>
          </div>
        </div>
        {/* Skip button */}
        <button className="absolute top-20 right-4 underline text-gray-800">Skip</button>
        {/* Continue button */}
        <button className="absolute bottom-36 right-48 w-96 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700">Continue</button>
      </div>
    </div>
  );
};

export default Price;
