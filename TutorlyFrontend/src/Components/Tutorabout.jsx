import React, { useState } from 'react';

const Tutorabout = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // Add more state variables as needed for other form fields

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the form data to your backend or handle it as needed
    console.log('Form submitted:', { name, email, phoneNumber });
    // Clear form fields after submission if needed
    setName('');
    setEmail('');
    setPhoneNumber('');
    // Clear other form fields as needed
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl  font-semibold mb-4">Become a Tutor</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        {/* Add more form fields here as needed */}
        
        {/* Submit Button */}
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Tutorabout;
