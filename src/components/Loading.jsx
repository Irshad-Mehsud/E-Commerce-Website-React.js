import React from "react";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-br from-gray-100 to-white">
      <div className="flex flex-col items-center space-y-6 animate-fade-in">
        {/* Glowing ring spinner */}
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-red-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full bg-white"></div>
        </div>

        {/* Glowing text */}
        <p className="text-xl font-semibold text-gray-800 animate-pulse tracking-wide drop-shadow-md">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Loading;
