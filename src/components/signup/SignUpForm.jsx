import React from "react";
import "../../index.css"; // 👈 this includes Tailwind

const SignUpForm = ({ setType }) => {
  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-md p-8 mx-auto mt-16">
      <h2 className="text-3xl font-semibold text-center mb-1">Sign up</h2>
      <p className="text-sm text-center text-gray-500 mb-6">
        Sign up to continue
      </p>

      {/* Form Start */}
      <form>
        {/* Name Input */}
        <div className="mb-4">
          <input
            id="input-name"
            type="text"
            placeholder="Name"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <input
            id="input-email"
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <input
            id="input-password"
            type="password"
            placeholder="Password"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500"
          />
        </div>

        {/* Image URL Input */}
        <div className="mb-4">
          <input
            id="input-image-url"
            type="url"
            placeholder="Image URL (optional)"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500"
          />
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          id="signUpBtn"
          className="w-full bg-blue-600 text-white font-medium py-2 rounded mt-2 hover:bg-blue-700"
        >
          Sign up
        </button>

        {/* Remember Me */}
        <div className="flex items-center mt-4">
          <input id="remember-me" type="checkbox" className="accent-blue-600" />
          <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
            Remember me
          </label>
        </div>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-2 text-xs text-gray-500 uppercase">
          Access Quickly
        </span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Social Buttons */}
      <div className="flex justify-between space-x-2">
        <button
          id="googleVerificationbtn"
          className="verifywithgooglebtn flex-1 border border-gray-300 rounded py-2 text-sm hover:bg-gray-50 text-blue-600 font-medium"
        >
          Google
        </button>
        <button className="flex-1 border border-gray-300 rounded py-2 text-sm hover:bg-gray-50 text-blue-600 font-medium">
          Linkedin
        </button>
        <button className="flex-1 border border-gray-300 rounded py-2 text-sm hover:bg-gray-50 text-blue-600 font-medium">
          SSO
        </button>
      </div>

      {/* Already have an account */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <button
          type="button"
          className="text-blue-600 hover:underline"
          onClick={() => setType("login")}
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignUpForm;
