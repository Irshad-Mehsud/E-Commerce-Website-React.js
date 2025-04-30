import React, { useEffect } from "react";

const ProgressMessage = ({ message, type, onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // clear message after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`w-full max-w-md mx-auto mb-4 p-4 rounded-lg text-center text-sm font-medium shadow-lg transform transition-all duration-300 ${
        type === "success"
          ? "bg-gradient-to-r from-green-400 to-green-600 text-white border border-green-500"
          : "bg-gradient-to-r from-red-400 to-red-600 text-white border border-red-500"
      }`}
    >
      <p className="font-semibold mb-2">{message}</p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1 rounded-full mt-2 relative overflow-hidden">
        <div
          className={`absolute left-0 top-0 h-full rounded-full ${
            type === "success" ? "bg-green-500" : "bg-red-500"
          } animate-progress`}
        />
      </div>
    </div>
  );
};

export default ProgressMessage;
