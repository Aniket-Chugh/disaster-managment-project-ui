import React, { useState } from 'react';
import image from "../assets/imagethree.png";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [phonenum, setPhonenum] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [pass, setpass] = useState("");

  const handlePhoneChange = (e) => {
    setPhonenum(e.target.value);
    setErrorMessage('');
  };

  const handlepass = (e) => {
    setpass(e.target.value);
  };

  const submitLogin = () => {
    const isValidPhone = /^[0-9]{10}$/.test(phonenum);
    if (isValidPhone) {
      alert('Logged in successfully');
    } else {
      setErrorMessage('Please check your phone number again');
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-600 h-screen w-full relative overflow-hidden">
      {/* Left section - Title and description */}
      <div className="absolute top-12 left-8 lg:left-16 xl:left-24 w-full max-w-2xl mb-16">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide">
          Report A Disaster
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl mt-4 max-w-lg">
          Quickly report any disaster or emergency situation in your area and get immediate help.
        </p>
        <div className="mt-8">
          <Link to="/report">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg">
              Report Now
            </button>
          </Link>
        </div>
      </div>

      {/* Right section - Image (Hidden on small screens) */}
      <div className="hidden lg:flex absolute right-0 bottom-0 w-[50%] h-[80%] items-center justify-center z-0">
        <img src={image} alt="Accident Scene" className="object-cover w-[90%] h-[90%] ml-36 rounded-lg" />
      </div>

      {/* Form Section */}
      <div className="mt-[380px] ml-9 left-8 lg:left-16 bottom-20 flex flex-wrap gap-4 bg-white p-6 rounded-xl shadow-lg w-[90%] lg:w-[60%] max-w-3xl z-10">
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Phone Number</h2>
          <input
            type="text"
            value={phonenum}
            onChange={handlePhoneChange}
            placeholder="Enter your phone number"
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errorMessage && <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>}
        </div>

        <div className="flex-1 min-w-[250px]">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Password</h2>
          <input
            type="password"
            placeholder="Enter your password"
            value={pass}
            onChange={handlepass}
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex-1 flex-col items-end min-w-[200px]">
          <button
            onClick={submitLogin}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full font-semibold"
          >
            Log In
          </button>
          <div className='mt-5'>
            <h1>Don't have an account? <Link to="/signup" className='text-red-600'>Sign up</Link></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
