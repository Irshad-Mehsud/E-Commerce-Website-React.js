import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Ensure path is correct
import CartPage from "../cartpage/CartPage"; // Import CartPage component

const MobileNavbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between md:hidden w-screen">
        <button
          id="sidebarToggle"
          className="text-gray-700 focus:outline-none"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          {/* Hamburger Icon */}
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

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="border px-2 py-1 rounded-md text-sm"
            />
          </div>

          <button
            className="relative text-xl"
            onClick={() => setShowCart(!showCart)}
          >
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWm44z7UhkyxOjpzxzIwxM-lccdJD5J5sKw&s"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </nav>

      {/* Sidebar - Render only if showSideBar is true */}
      {showSideBar && <Sidebar onClose={() => setShowSideBar(false)} />}

      {/* CartPage - Render only if showCart is true */}
      {showCart && <CartPage />}
    </>
  );
};

export default MobileNavbar;
