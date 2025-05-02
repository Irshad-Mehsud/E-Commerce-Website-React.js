import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1a1a1a] to-red-600 text-gray-200 pt-10 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">

        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">ShopMate</h2>
          <p className="text-sm mt-2">
            Your one-stop shop for fashion, tech, and lifestyle.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/" className="hover:text-white transition">Shop</Link></li>
            <li><Link to="/" className="hover:text-white transition">About</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">192 Market Street</p>
          <p className="text-sm">D.I.Khan, IK - 804 </p>
          <p className="text-sm">ahmad@shop.com</p>
          <p className="text-sm">+92 3059915792</p>
        </div>

        {/* Newsletter and Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-3">Subscribe</h3>
          <form className="flex flex-col sm:flex-row sm:items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-4 rounded transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
      <p className="font-semibold text-sm">
        &copy; {new Date().getFullYear()} ShopMate. All rights reserved.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
