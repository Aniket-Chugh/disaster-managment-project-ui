import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleAccountClick = () => setOpen(!open);

  return (
    <>
      <nav className="bg-gray-900 text-white py-3 px-6 flex items-center justify-between shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-6">
          <Link to="/">
            <h1 className="text-2xl font-bold">DisasterMS</h1>
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-6 text-sm">
            <li className="hover:text-blue-400 transition cursor-pointer">Home</li>
            <li className="hover:text-blue-400 transition cursor-pointer">One-time Report</li>

            {/* Volunteer Hub Dropdown */}
            <div className="relative">
              <button onClick={toggleMenu} className="flex items-center gap-1">
                <span className="hover:text-blue-400 transition">Volunteer Hub 🤝</span>
                <FaChevronDown className={`h-3 w-3 transform ${openMenu ? "rotate-180" : ""}`} />
              </button>

              {openMenu && (
                <div className="absolute bg-gray-900 w-36 p-2 mt-2 rounded-md shadow-lg">
                  <ul>
                    <li className="hover:bg-gray-500 p-1 rounded-md cursor-pointer">Join as Volunteer</li>
                    <li className="hover:bg-gray-500 p-1 rounded-md cursor-pointer">Manage Tasks</li>
                    <li className="hover:bg-gray-500 p-1 rounded-md cursor-pointer">Emergency Assistance</li>
                  </ul>
                </div>
              )}
            </div>
            <li className="hover:text-blue-400 transition cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex bg-gray-600 px-4 py-2 rounded-full items-center">
          <input
            type="text"
            placeholder="Find urgent help"
            className="bg-transparent outline-none text-white placeholder-gray-200 px-2"
          />
          <Link to="/ngosearch">
            <button className="text-white hover:text-blue-100">🔍</button>
          </Link>
        </div>

        {/* Account and Report Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/report">
            <button className="text-sm px-4 py-2 rounded-full border border-white hover:bg-white hover:text-blue-600 transition">
              Report
            </button>
          </Link>
<div rounded-full border border-white>

          <button onClick={handleAccountClick} className="rounded-full border border-white">
            <MdOutlineAccountCircle className="text-white" />
          </button>
</div>

          {open && (
            <div className="absolute bg-gray-900 w-33 p-2 mt-40 rounded-md shadow-lg ">
              <ul>
                <li className="hover:bg-gray-500 p-1 rounded-md cursor-pointer">Open Dashboard</li>
                <li className="hover:bg-gray-500 p-1 rounded-md cursor-pointer">Manage Tasks</li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 p-4">
          <ul className="flex flex-col gap-4 text-sm">
            <li className="hover:text-blue-400 transition cursor-pointer">Home</li>
            <li className="hover:text-blue-400 transition cursor-pointer">One-time Report</li>

            {/* Mobile Dropdown */}
            <div className="relative">
              <button onClick={toggleMenu} className="flex items-center gap-1">
                <span className="hover:text-blue-400 transition">Volunteer Hub 🤝</span>
                <FaChevronDown className={`h-3 w-3 transform ${openMenu ? "rotate-180" : ""}`} />
              </button>

              {openMenu && (
                <div className="absolute bg-gray-900 w-36 p-2 mt-2 rounded-md shadow-lg">
                  <ul>
                    <li className="hover:bg-gray-500 p-1 rounded-md cursor-pointer">Join as Volunteer</li>
                    <li className="hover:bg-gray-500 p-1 rounded-md cursor-pointer">Manage Tasks</li>
                    <li className="hover:bg-gray-500 p-1 rounded-md cursor-pointer">Emergency Assistance</li>
                  </ul>
                </div>
              )}
            </div>
            <li className="hover:text-blue-400 transition cursor-pointer">Support</li>

            {/* Mobile Search Bar */}
            <div className="flex bg-gray-600 px-4 py-2 rounded-full items-center mt-2">
              <input
                type="text"
                placeholder="Find urgent help"
                className="bg-transparent outline-none text-white placeholder-gray-200 px-2"
              />
              <Link to="/ngosearch">
                <button className="text-white hover:text-blue-100">🔍</button>
              </Link>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
