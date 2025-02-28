import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    otp: '',
    password: '',
  });
  const [step, setStep] = useState(1); // Step 1: Phone Number -> Step 2: OTP -> Step 3: Name & Password

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // Simulate sending OTP
    console.log('OTP sent to:', formData.phone);
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Simulate OTP verification
    console.log('OTP verified:', formData.otp);
    setStep(3);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('User signed up with data:', formData);
  };

  return (
    <div>


        <Navbar></Navbar>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-600">
      <div className="w-full max-w-md p-6 bg-white shadow-2xl rounded-2xl">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>

          {step === 1 && (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="123-456-7890"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition-all duration-200">
                Send OTP
              </button>
              <div>
                <Link to={"/"} className='mt-5'>
                Back to homePage
                </Link>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP</label>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter OTP"
                  required
                  />
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition-all duration-200">
                Verify OTP
              </button>
              <Link to={"/"} className='mt-5'>
                Back to homePage
                </Link>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleSignUpSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="••••••••"
                  required
                  />
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition-all duration-200">
                Sign Up
              </button>
              <Link to={"/"} className='mt-5'>
                Back to homePage
                </Link>
            </form>
          )}
        </div>
      </div>
    </div>
          </div>
  );
}
