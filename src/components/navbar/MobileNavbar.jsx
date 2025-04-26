import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Correct your path if needed
import { useLocation, useNavigate } from "react-router-dom"; // Import hooks

const MobileNavbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const location = useLocation();   // 📍 Get current path
  const navigate = useNavigate();   // 🚀 Navigate between pages

  // Toggle Cart
  const handleCartClick = () => {
    if (location.pathname === "/cart") {
      navigate("/");    // If already on CartPage, go to Home
    } else {
      navigate("/cart"); // Otherwise, go to CartPage
    }
  };

  return (
    <>
      {/* Mobile Top Navbar */}
      <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between md:hidden w-screen">
        
        {/* Sidebar Button (Hamburger Icon) */}
        <button
          className="text-gray-700 focus:outline-none"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Search + Cart + Avatar */}
        <div className="flex items-center space-x-6">

          {/* Search Input */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="border px-2 py-1 rounded-md text-sm"
            />
          </div>

          {/* 🛒 Cart Icon with Toggle */}
          <button onClick={handleCartClick} className="relative text-xl">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* Avatar */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWm44z7UhkyxOjpzxzIwxM-lccdJD5J5sKw&s"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </nav>

      {/* Sidebar - Render only if showSideBar is true */}
      {showSideBar && <Sidebar onClose={() => setShowSideBar(false)} />}
    </>
  );
};

export default MobileNavbar;
