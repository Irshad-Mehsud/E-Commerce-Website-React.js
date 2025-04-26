import React, { useState } from 'react';

const Sidebar = ({ onClose }) => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-64 bg-white shadow-lg z-50 max-h-screen overflow-y-auto transition-transform duration-300 transform translate-x-0 md:hidden rounded-r-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="text-lg font-semibold">Ahmad's Store</div>
        <button onClick={onClose} className="text-gray-600 hover:text-red-500">
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
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Links */}
      <div className="p-4 space-y-2">
        <div className="hover:bg-gray-100 rounded-md transition px-3 py-2 cursor-pointer">
          Home
        </div>
        <div className="hover:bg-gray-100 rounded-md transition px-3 py-2 cursor-pointer">
          Deals
        </div>
        <div className="hover:bg-gray-100 rounded-md transition px-3 py-2 cursor-pointer">
          Contact
        </div>

        {/* Categories Dropdown */}
        <div className="relative">
          <div
            className="hover:bg-gray-100 rounded-md transition px-3 py-2 cursor-pointer flex justify-between items-center"
            onClick={() => setShowCategories(!showCategories)}
          >
            Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-2 transform transition-transform ${
                showCategories ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Dropdown Menu */}
          {showCategories && (
            <div className="bg-white shadow-md mt-2 rounded-md w-full z-10">
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                All
              </div>
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                Electronics
              </div>
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                Jewelery
              </div>
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                Men's Clothing
              </div>
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                Women's Clothing
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
