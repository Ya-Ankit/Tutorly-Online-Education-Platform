import React, { useState } from 'react';

const Time = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
    setIsOpen(false);
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      {/* Left half */}
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 ml-8">What Time are You Available?</h2>
      </div>
      
      {/* Right half */}
      <div className="w-1/2 bg-white h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center relative">
          {/* Time input */}
          <input type="time" className="mb-2 text-gray-800 border border-gray-800 rounded-md p-2 w-96" />

          {/* Days input */}
          <div className="relative">
            <input
              type="text"
              className="mb-2 text-gray-800 border border-gray-800 rounded-md p-2 w-96 cursor-pointer"
              value={selectedDay}
              placeholder="Select Day"
              onClick={toggleDropdown}
              readOnly
            />
            <div className={`absolute w-96 max-h-20 border border-gray-300 rounded-md bg-white shadow-lg overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
              <ul>
                <li onClick={() => handleSelectDay('Monday')} className="cursor-pointer py-2 px-4 hover:bg-gray-100">Monday</li>
                <li onClick={() => handleSelectDay('Tuesday')} className="cursor-pointer py-2 px-4 hover:bg-gray-100">Tuesday</li>
                <li onClick={() => handleSelectDay('Wednesday')} className="cursor-pointer py-2 px-4 hover:bg-gray-100">Wednesday</li>
                <li onClick={() => handleSelectDay('Thursday')} className="cursor-pointer py-2 px-4 hover:bg-gray-100">Thursday</li>
                <li onClick={() => handleSelectDay('Friday')} className="cursor-pointer py-2 px-4 hover:bg-gray-100">Friday</li>
                <li onClick={() => handleSelectDay('Saturday')} className="cursor-pointer py-2 px-4 hover:bg-gray-100">Saturday</li>
                <li onClick={() => handleSelectDay('Sunday')} className="cursor-pointer py-2 px-4 hover:bg-gray-100">Sunday</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Skip button */}
        <button className="absolute top-20 right-4 underline text-gray-800">Skip</button>
        {/* Continue button */}
        <button className="absolute bottom-32 right-42 w-96 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700">Continue</button>
      </div>
    </div>
  );
};

export default Time;
