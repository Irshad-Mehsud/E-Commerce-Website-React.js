import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import hooks

const DesktopNavbar = () => {
  const location = useLocation();   // 📍 Where are we?
  const navigate = useNavigate();   // 🚀 Navigate between pages

  const handleCartClick = () => {
    if (location.pathname === "/cart") {
      navigate("/");    // If on CartPage, go Home
    } else {
      navigate("/cart"); // Else, go to CartPage
    }
  };

  return (
    <>
      <nav className="bg-white shadow-md hidden md:block w-full">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Left: Logo */}
          <Link to={"/"} > <div className="text-xl font-bold text-gray-800">Ahmad's Store</div></Link>

          {/* Center: Navigation Links */}
          <div className="flex items-center space-x-6">
            {/* <a href="#" className="text-gray-600 hover:text-blue-600">
              Home
            </a> */}

            <Link to={"/"} className="text-gray-600 hover:text-blue-600">Home</Link>

            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 focus:outline-none">
                Categories ⌄
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 rounded-md w-48 z-10">
                {[
                  "All",
                  "Electronics",
                  "Jewelery",
                  "Men's Clothing",
                  "Women's Clothing",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    id={item.toLowerCase().replace(/\s/g, "")}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <a href="#" className="text-gray-600 hover:text-blue-600">
              Deals
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Right: Search, Cart, Avatar */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="border px-2 py-1 rounded-md text-sm"
            />

            {/* 🛒 Cart Icon with Toggle */}
            <button
              onClick={handleCartClick}
              className="relative text-xl"
            >
              🛒
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Avatar */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWm44z7UhkyxOjpzxzIwxM-lccdJD5J5sKw&s"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
