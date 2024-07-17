import React from 'react';
import coverImage from '../assets/cover1.svg';
import profileImage from '../assets/person1.jpg';
import cameraIcon from '../assets/camera-icon.png';

const Profile = () => {
  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Cover Image */}
      <div className="relative z-0">
        <img src={coverImage} alt="Cover" className="w-full h-52 object-cover" />
        <button className="absolute right-4 bottom-4 bg-gray-100 rounded-full p-2">
          <img src={cameraIcon} alt="Change Cover" className="w-6 h-6" />
        </button>
      </div>

      {/* Profile Content */}
      <div className="flex flex-grow p-8">
        {/* Left Side - Profile Image and Data */}
        <div className="flex flex-col justify-center items-center w-96 mr-20 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... -mt-24 rounded-3xl z-20">
          {/* Profile Image */}
          <div className="relative ">
            <img src={profileImage} alt="Profile" className="w-48 h-52 rounded-3xl mb-4 border-4 border-gray-300" />
            <button className="absolute right-0 bottom-0 bg-gray-100 rounded-full p-2">
              <img src={cameraIcon} alt="Change Profile" className="w-6 h-6" />
            </button>
          </div>

          {/* Profile Data */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">John Doe</h2>
            <p className="text-gray-600 mb-2 text-lg font-semibold">Rating: 4.5/5</p>
            <p className="text-gray-600 mb-2 text-lg font-semibold">Role: Teacher</p>
          </div>
        </div>

        {/* Right Side - Profile Input Boxes and Buttons */}
        <div className="flex flex-col justify-center items-center w-1/2 border-2 border-gray-200 rounded-3xl -mt-24 z-20 bg-gray-100">
          <div className='mb-16'>
            <label htmlFor="name" className="text-gray-800 mb-2 font-semibold ml-10">Name: </label>
            <input type="text" id="name" placeholder="Joe Doe" className="border border-gray-400 p-2 rounded-md mb-4 w-58 mr-10" />
            <label htmlFor="phone" className="text-gray-800 mb-2 font-semibold">Phone Number: </label>
            <input type="tel" id="phone" placeholder="+91 89**564532" className="border border-gray-400 p-2 rounded-md mb-4 w-38" />            
          </div>
          <div className='mb-16'>
            <label htmlFor="email" className="text-gray-800 mb-2 font-semibold">Email: </label>
            <input type="email" id="email" placeholder="joedoe@gmail.com" className="border border-gray-400 p-2 rounded-md mb-4 w-58 mr-10" />
            <label htmlFor="city" className="text-gray-800 mb-2 font-semibold">City: </label>
            <input type="text" id="city" placeholder="New Delhi" className="border border-gray-400 p-2 rounded-md mb-4 w-38" />
          </div>
          {/* Buttons */}
          <div className="flex">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Edit Profile</button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
