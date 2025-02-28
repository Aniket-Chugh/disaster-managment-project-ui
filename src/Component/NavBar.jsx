import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openmenu, setOpenmenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setOpenmenu(!openmenu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 text-white py-3 px-6 flex items-center justify-between shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold tracking-wide">DisasterMS</h1>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex gap-6 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-400 cursor-pointer transition">One-time Report</li>

            {/* Dropdown Menu */}
            <div className="relative">
              <button onClick={toggleMenu} className="flex items-center gap-1">
                <span className="hover:text-blue-400 cursor-pointer transition">Volunteer Hub 🤝</span>
                <FaChevronDown
                  strokeWidth={2.5}
                  className={`h-3 w-3 transition-transform ${openmenu ? "rotate-180" : ""}`}
                />
              </button>

              {openmenu && (
                <div className="absolute bg-gray-900 w-[150px] p-2 mt-2 rounded-md shadow-lg">
                  <ul>
                    <li className="hover:bg-gray-500 hover:rounded-md p-1 cursor-pointer">Join as Volunteer</li>
                    <li className="hover:bg-gray-500 hover:rounded-md p-1 cursor-pointer">Manage Tasks</li>
                    <li className="hover:bg-gray-500 hover:rounded-md p-1 cursor-pointer">Emergency Assistance</li>
                  </ul>
                </div>
              )}
            </div>

            <li className="hover:text-blue-400 cursor-pointer transition">Support</li>
          </ul>
        </div>

        {/* Center - Search Bar */}
        <div className="hidden md:flex bg-gray-600 px-4 py-2 rounded-full items-center shadow-inner">
          <input
            type="text"
            placeholder="Find urgent help"
            className="bg-transparent outline-none text-white placeholder-gray-200 px-2"
          />
          <Link to="/ngosearch">
            <button className="text-white hover:text-blue-100 transition">🔍</button>
          </Link>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-blue-600 transition">
            Report
          </button>
          <button className="text-sm px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:text-white transition">
            Login
          </button>
        </div>
      </nav>

      {/* Mobile Menu Section */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-gray-900 p-4">
          <ul className="flex flex-col gap-4 text-sm">
            <li className="text-white hover:text-blue-400 cursor-pointer transition">Home</li>
            <li className="text-white hover:text-blue-400 cursor-pointer transition">One-time Report</li>

            {/* Mobile Dropdown */}
            <div className="relative">
              <button onClick={toggleMenu} className="flex items-center gap-1 text-white">
                <span className="text-white hover:text-blue-400 cursor-pointer transition">Volunteer Hub 🤝</span>
                <FaChevronDown
                  strokeWidth={2.5}
                  className={`h-3 w-3 transition-transform ${openmenu ? "rotate-180" : ""}`}
                />
              </button>

              {openmenu && (
                <div className="absolute bg-gray-900 w-[150px] p-2 mt-2 rounded-md shadow-lg">
                  <ul>
                    <li className="text-white hover:bg-gray-500 hover:rounded-md p-1 cursor-pointer">Join as Volunteer</li>
                    <li className="text-white hover:bg-gray-500 hover:rounded-md p-1 cursor-pointer">Manage Tasks</li>
                    <li className="text-white hover:bg-gray-500 hover:rounded-md p-1 cursor-pointer">Emergency Assistance</li>
                  </ul>
                </div>
              )}
            </div>

            <li className="text-white hover:text-blue-400 cursor-pointer transition">Support</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
