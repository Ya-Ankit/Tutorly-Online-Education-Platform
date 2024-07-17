// src/Components/Testimonial.jsx
import React, { useState } from 'react';

// Import images
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';

const Testimonial = () => {
  // Testimonial data
  const testimonials = [
    {
      name: 'Rohit Sharma',
      bio: 'English Learner on Tutorly.',
      image: person1,
    },
    {
      name: 'Steve Smith',
      bio: 'English Learner on Tutorly',
      image: person2,
    },
    {
      name: 'Ben Stokes',
      bio: 'Science Learner on Tutorly',
      image: person3,
    },
  ];

  // State to track current testimonial index
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Function to handle clicking left icon
  const handleLeftClick = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Function to handle clicking right icon
  const handleRightClick = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Find the right tutor for you.</h2>
          <p className="mt-2 text-lg text-gray-600">Choose from our pool of experienced tutors.</p>
        </div>

        {/* Testimonial content */}
        <div className="relative flex flex-col items-center">
          {/* Left icon */}
          <div className="absolute text-3xl font-extrabold left-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleLeftClick}>
            {/* Add left arrow icon here */}
            &lt;
          </div>

          {/* Testimonial image and text */}
          <div className="flex items-center justify-center w-full">
            <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className=" w-96 h-96 object-cover rounded-lg mr-4 ml-10" />
            <div className="w-1/2">
                <h3 className="text-xl font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h3>
                <p className="text-gray-600 w-60 overflow-hidden overflow-ellipsis" style={{ maxHeight: '100px' }}>
                    {testimonials[currentTestimonial].bio}
                </p>
                </div>

          </div>

          {/* Right icon */}
          <div className="absolute text-3xl font-extrabold right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleRightClick}>
            {/* Add right arrow icon here */}
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
