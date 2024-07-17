// src/Components/Banner.jsx
import React from 'react';

const Banner = () => {
  return (
    <div className="bg-pink-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lessons you’ll love. Guaranteed.
          </h2>
          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            "Education is not the filling of a pail, but the lighting of a fire."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
