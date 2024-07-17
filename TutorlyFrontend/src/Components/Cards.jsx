import React from 'react';

const Cards = ({ tutor }) => {
    
  const { name, photo, rating, subject, bio, price, city } = tutor;

  const handleBookTrialSession = () => {
    // Handle booking a trial session
  };

  const handleSendMessage = () => {
    // Handle sending a message
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Tutor Photo */}
      <img src={photo} alt="Tutor" className="w-full h-64 object-cover" />

      {/* Tutor Details */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            {/* Tutor Name */}
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            {/* Tutor Rating */}
            <span className="text-sm text-gray-600"> Rating {rating}/5</span>
          </div>
          <div>
            {/* Subject */}
            <span className="text-sm text-gray-600">{subject}</span>
          </div>
        </div>
        
        {/* Bio */}
        <p className="text-gray-800 mb-4">{bio}</p>
        
        <div className="flex items-center justify-between">
          {/* Price */}
          <div>
            <span className="text-sm text-gray-600">Price per Lesson: Rs. {price}</span>
          </div>
          {/* City */}
          <div>
            <span className="text-sm text-gray-600">City: {city}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleBookTrialSession}>Book Trial Session</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md mt-2" onClick={handleSendMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;