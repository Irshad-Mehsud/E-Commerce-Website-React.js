import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import hooks
import AddToCartContext from "../context/AddToCartContext"; // Import context
import { useContext } from "react"; // Import useContext hook
import { db } from "../signup/config/firebase"; // Assuming you have Firebase set up
import { collection, getDocs } from "firebase/firestore"; // Firebase Firestore functions

const DesktopNavbar = () => {
  const location = useLocation(); // 📍 Where are we?
  const navigate = useNavigate(); // 🚀 Navigate between pages
  
  // Access itemCount from context
  const { itemCount } = useContext(AddToCartContext);
  
  // State for cart items
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items from Firestore
  const fetchCartItems = async () => {
    try {
      const cartRef = collection(db, "cartItems"); // Reference to Firestore cart collection
      const querySnapshot = await getDocs(cartRef); // Fetch all documents in the collection

      const cartItemsData = [];
      querySnapshot.forEach((doc) => {
        cartItemsData.push({ docId: doc.id, ...doc.data() });
      });
      
      setCartItems(cartItemsData); // Set the state with fetched cart items
      setLoading(false); // Set loading state to false after data is fetched
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []); // Empty dependency array, fetch once when component is mounted

  const handleCartClick = () => {
    if (location.pathname === "/cart") {
      navigate("/"); // If on CartPage, go Home
    } else {
      navigate("/cart"); // Else, go to CartPage
    }
  };

  return (
    <nav className="bg-white shadow-md hidden md:block w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to={"/"}>
          <div className="text-xl font-bold text-gray-800">Ahmad's Store</div>
        </Link>

        {/* Center: Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link to={"/"} className="text-gray-600 hover:text-blue-600">
            Home
          </Link>

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
                  onClick={() => {
                    if (item === "All") {
                      navigate("/");
                    } else if (item === "Electronics") {
                      navigate("/electronics");
                    } else if (item === "Jewelery") {
                      navigate("/jewelery");
                    }
                  }}
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
            {/* Show cartItems.length in a small badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length} {/* This will show the correct number of items */}
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
  );
};

export default DesktopNavbar;
