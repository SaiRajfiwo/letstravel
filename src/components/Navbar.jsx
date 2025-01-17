import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function Navbar({ user, setUser, isLoggedIn, setIsLoggedIn, handleLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // React Router v6 hook for navigation

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const openLoginModal = () => {
    document.getElementById('login_modal').showModal();
  };

  const openSignupModal = () => {
    document.getElementById('signup_modal').showModal();
  };

  const handleOptionClick = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="bg-gray-100 text-black fixed font-sans top-50 w-full z-50 h-20 shadow-2xl">
        <div className="navbar flex mt-5 justify-center items-center">
          <div className="navbar-start flex-1 text-left ml-10">
            <div className="dropdown" ref={dropdownRef}>
              <button onClick={toggleMobileMenu} className="btn btn-ghost lg:hidden" tabIndex={0}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              </div>
                <Link to="/" className="btn btn-ghost text-4xl justify-center font-bold hover:scale-105 duration-300">
                  <span className="text-red-500 hover:text-black">L</span>
                  <span className="text-blue-500 hover:text-black">e</span>
                  <span className="text-green-500 hover:text-black">t</span>
                  <span className="text-yellow-500 hover:text-black">s</span>
                  <span className="text-purple-500 hover:text-black"> </span>
                  <span className="text-pink-500 hover:text-black">T</span>
                  <span className="text-indigo-500 hover:text-black">r</span>
                  <span className="text-teal-500 hover:text-black">a</span>
                  <span className="text-orange-500 hover:text-black">v</span>
                  <span className="text-cyan-500 hover:text-black">e</span>
                  <span className="text-lime-500 hover:text-black">l</span>
                  <span className="text-rose-500 hover:text-black">!</span>
                </Link>
              </div>
          <div className="navbar-center hidden lg:flex font-medium justify-center">
            <ul className="menu menu-horizontal px-1 flex justify-center  text-xl space-x-4">
              <li className="hover:scale-105 hover:text-red-600 duration-300">
                <Link to="/" onClick={handleOptionClick}>
                  Home
                </Link>
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <button className="hover:scale-105 hover:text-red-600 duration-300">Our Services ⮟</button>
                {isDropdownOpen && (
                  <ul className="absolute left-0 top-full p-5 bg-gray-700 text-base text-white rounded-lg shadow-lg z-10">
                    <li className="hover:scale-105 hover:text-yellow-300 duration-300">
                      <Link to="/hotels" onClick={handleOptionClick}>
                        Hotels
                      </Link>
                    </li>
                    <li className="hover:scale-105 hover:text-yellow-300 duration-300">
                      <Link to="/fuel-stations" onClick={handleOptionClick}>
                        Fuel Stations
                      </Link>
                    </li>
                    <li className="hover:scale-105 hover:text-yellow-300 duration-300">
                      <Link to="/service-shops" onClick={handleOptionClick}>
                        Service Shops
                      </Link>
                    </li>
                    <li className="hover:scale-105 hover:text-yellow-300 duration-300">
                      <Link to="/diy" onClick={handleOptionClick}>
                        DIYs
                      </Link>
                    </li>
                    <li className="hover:scale-105 hover:text-yellow-300 duration-300">
                      <Link to="/hospitals" onClick={handleOptionClick}>
                        Hospitals
                      </Link>
                    </li>
                    <li className="hover:scale-105 hover:text-yellow-300 duration-300">
                      <Link to="/restaurants" onClick={handleOptionClick}>
                        Restaurants
                      </Link>
                    </li>
                    <li className="hover:scale-105 hover:text-yellow-300 duration-300">
                      <Link to="/vehicle-info" onClick={handleOptionClick}>
                        Vehicle Info
                      </Link>
                    </li>
                    <li className="hover:scale-105 hover:text-yellow-300 duration-300">
                      <Link to="/weather" onClick={handleOptionClick}>
                        Weather Info
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:scale-105 hover:text-red-600 duration-300">
                <Link to="/about" onClick={handleOptionClick}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end flex justify-center items-center">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="btn mx-5 hover:scale-105 duration-300 bg-gradient-to-t from-sky-500 to-blue-300 hover:bg-blue-500 hover:text-orange-500 text-black font-semibold border-none"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={openLoginModal}
                  className="btn mx-4 hover:scale-105 text-lg rounded-lg  duration-300 bg-yellow-300 hover:bg-yellow-200 hover:text-red-600 text-black font-semibold border-none px-3">
                  Login
                </button>
                <button
                  onClick={openSignupModal}
                  className="btn mx-2 hover:scale-105 text-lg rounded-lg duration-300 bg-yellow-300 hover:bg-yellow-200 hover:text-red-600 text-black font-semibold border-none px-3">
                  Signup
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-200 p-4">
            <ul className="flex flex-col items-center space-y-2">
              <li>
                <Link to="/" onClick={handleOptionClick} className="hover:scale-105 duration-300">
                  Home
                </Link>
              </li>
              <li>
                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="hover:scale-105 duration-300"
                >
                  Our Services ⮟
                </button>
                {isDropdownOpen && (
                  <ul className="p-4 bg-gray-700 text-white rounded-lg shadow-lg z-10">
                    <li className="my-2 hover:scale-105 duration-300">
                      <Link to="/hotels" onClick={handleOptionClick}>
                        Hotels
                      </Link>
                    </li>
                    <li className="my-2 hover:scale-105 duration-300">
                      <Link to="/fuel-stations" onClick={handleOptionClick}>
                        Fuel Stations
                      </Link>
                    </li>
                    <li className="my-2 hover:scale-105 duration-300">
                      <Link to="/service-shops" onClick={handleOptionClick}>
                        Service Shops
                      </Link>
                    </li>
                    <li className="my-2 hover:scale-105 duration-300">
                      <Link to="/diy" onClick={handleOptionClick}>
                        DIYs
                      </Link>
                    </li>
                    <li className="my-2 hover:scale-105 duration-300">
                      <Link to="/hospitals" onClick={handleOptionClick}>
                        Hospitals
                      </Link>
                    </li>
                    <li className="my-2 hover:scale-105 duration-300">
                      <Link to="/restaurants" onClick={handleOptionClick}>
                        Restaurants
                      </Link>
                    </li>
                    <li className="my-2 hover:scale-105 duration-300">
                      <Link to="/vehicle-info" onClick={handleOptionClick}>
                        Vehicle Info
                      </Link>
                    </li>
                    <li className="my-2 hover:scale-105 duration-300">
                      <Link to="/weather" onClick={handleOptionClick}>
                        Weather Info
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/about" onClick={handleOptionClick} className="hover:scale-105 duration-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
      <Signup setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}

export default Navbar;
