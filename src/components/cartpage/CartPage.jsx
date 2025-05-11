import React, { useState, useEffect, useMemo } from "react";
import { MdDelete } from "react-icons/md";
import { db, collection, getDocs, deleteDoc, doc } from "../signup/config/firebase"; // Import Firestore functions
import Footer from "../footer/Footer";
import Loading from "../Loading"; // Import Loading component

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
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
    fetchCartItems(); // Fetch cart items when the component mounts
    setTimeout(() => setLoading(false), 1000);
  }, []); // Empty array ensures it runs only once

  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = async (id) => {
    console.log("handleDelete called with id:", id, "type:", typeof id);
    try {
      const itemDocRef = doc(db, "cartItems", String(id));
      console.log("Deleting document at path:", itemDocRef.path);
      await deleteDoc(itemDocRef);
      setCartItems((prev) => prev.filter((item) => item.docId !== id)); // Fix: use docId here
    } catch (error) {
      console.error("Failed to delete item:", error);
      alert("Failed to delete item. Please try again.");
    }
  };

  const totalPrice = useMemo(() => {
  return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
}, [cartItems]);

  if (loading) {
    return <div><Loading/></div>; // Show loading text while data is being fetched
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 p-4 bg-gray-100 min-h-screen">
        {/* Profile Section */}
        <div className="col-span-1 md:col-span-3 bg-white p-2 rounded-lg shadow-md">
          <div className="flex items-center space-x-4 py-2 px-4 justify-center flex-col">
            <h2 className="text-4xl font-semibold mb-2">Shopping Cart</h2>
            <p className="mb-2 font-medium">Your Shopping Cart</p>
            <hr className="w-full border-gray-300 mb-4" />
          </div>

          <div className="AllItems grid grid-cols-12 gap-4 bg-white p-4">
            {/* Left Section (Cart Items) */}
            <div className="col-span-12 md:col-span-8 bg-white p-2 rounded-lg shadow-md h-fit">
              <h2 className="text-lg font-semibold">All Cart Items</h2>

              <div className="grid grid-cols-1 gap-3 mt-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm h-20"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14"
                    />
                    <div className="flex flex-col ml-4 flex-grow">
                      <h2 className="text-sm font-semibold">
                        {item.name.slice(0, 6)}...
                      </h2>
                      <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDecrement(item.docId)}
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item.docId)}
                        className="bg-gray-200 px-2 py-1 rounded-md"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleDelete(item.docId)}
                        className="bg-red-500 text-white px-2 py-2 rounded-md flex items-center justify-center"
                      >
                        <MdDelete className="text-lg" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section (Summary) */}
            <div className="col-span-12 md:col-span-4 bg-white p-4 rounded-lg shadow-md h-[300px] overflow-auto">
              <h2 className="text-lg font-semibold">Summary</h2>
              <div className="mt-4 flex flex-col space-y-2">
                <div>
                  <p className="text-gray-600 flex justify-between">
                    Total Items <span>{cartItems.length}</span>
                  </p>
                  <p className="text-gray-600 flex justify-between">
                    Shipping <span>$20</span>
                  </p>
                  <p className="text-gray-600 flex justify-between">
                    Subtotal <span>${totalPrice.toFixed(2)}</span>
                  </p>
                </div>

                <div className="flex justify-between items-center pt-12">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
