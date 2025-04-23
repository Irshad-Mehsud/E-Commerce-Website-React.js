import React from "react";
const LoginForm = ({ setType }) => {
  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-md p-8 mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-1">Login</h2>
      <p className="text-sm text-center text-gray-500 mb-6">
        Welcome back! Please log in.
      </p>

      {/* Form Start */}
      <form>
        {/* Email Input */}
        <div className="mb-4">
          <input
            id="login-email"
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <input
            id="login-password"
            type="password"
            placeholder="Password"
            className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 placeholder-gray-500"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          id="loginBtn"
          className="w-full bg-blue-600 text-white font-medium py-2 rounded mt-2 hover:bg-blue-700"
        >
          Login
        </button>

        {/* Remember Me */}
        <div className="flex items-center mt-4 justify-between">
          <label className="flex items-center text-sm text-gray-700">
            <input type="checkbox" className="accent-blue-600 mr-2" />
            Remember me
          </label>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-2 text-xs text-gray-500 uppercase">
          Or continue with
        </span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Social Buttons */}
      <div className="flex justify-between space-x-2">
        <button className="flex-1 border border-gray-300 rounded py-2 text-sm hover:bg-gray-50 text-blue-600 font-medium">
          Google
        </button>
        <button className="flex-1 border border-gray-300 rounded py-2 text-sm hover:bg-gray-50 text-blue-600 font-medium">
          Linkedin
        </button>
        <button className="flex-1 border border-gray-300 rounded py-2 text-sm hover:bg-gray-50 text-blue-600 font-medium">
          SSO
        </button>
      </div>

      {/* No account? */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Don’t have an account?{" "}
        <button
          type="button"
          className="text-blue-600 hover:underline"
          onClick={() => setType("signup")}
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
