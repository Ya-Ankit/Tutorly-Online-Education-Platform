import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import Signup from "./Signup";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex">
      {/* Left Side */}
      <div className="flex-grow bg-gray-100 flex justify-center items-center">
        <img src={Image} alt="" className="w-80" />
      </div>

      {/* Right Side */}
      <div className="flex-grow bg-white flex justify-center items-center">
        <div className="w-96">
          <div className="text-center mb-8">
             <h1 className=" text-5xl font-bold mb-10">Tutorly</h1>
            <h2 className="text-3xl font-bold">Welcome back!</h2>
            <p className="text-gray-600">Please enter your details</p>
          </div>
          <form className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-black px-4 py-2 outline-none focus:border-blue-500"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border-b border-black px-4 py-2 outline-none focus:border-blue-500"
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 bottom-2 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 bottom-2 cursor-pointer"
                />
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember-checkbox" />
                <label
                  htmlFor="remember-checkbox"
                  className="text-gray-600 cursor-pointer"
                >
                  Remember for 30 days
                </label>
              </div>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="space-y-2">
              <button
                type="button"
                className="w-full bg-black text-white py-2 rounded-md"
              >
                Log In
              </button>
              <button
                type="button"
                className="w-full bg-gray-200 flex items-center justify-center py-2 rounded-md space-x-2"
              >
                <img src={GoogleSvg} alt="" className="w-6 h-6" />
                Log In with Google
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 mt-8">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
            <Link to="/Signup">Signup</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
