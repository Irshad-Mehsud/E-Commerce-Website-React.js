import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../signup/config/firebase";

const ProductCard = ({ image, name, price, description, product }) => {
  const [itemCount, setItemCount] = useState(() => {
    return parseInt(localStorage.getItem("itemCount")) || 0;
  });
  const [cartItems, setCartItems] = useState([]);

  // Fetch total cart item count from Firebase on mount
  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cartItems"));
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });

        const count = items.length;
        setItemCount(count);
        localStorage.setItem("itemCount", count);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartCount();
  }, []);

  const AddDataToFirebase = async () => {
    try {
      await addDoc(collection(db, "cartItems"), {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
        addedAt: new Date().toISOString(),
      });
      console.log("Product added to Firebase successfully!");
    } catch (error) {
      console.error("Error adding product to Firebase:", error);
    }
  };

  const handleAddToCart = () => {
    const updatedCount = itemCount + 1;
    setItemCount(updatedCount);
    localStorage.setItem("itemCount", updatedCount);

    setCartItems((prev) => [...prev, product]);
    AddDataToFirebase();
  };

  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition">
      <img src={image} alt="Product" className="w-full h-52 object-contain p-4" />
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800">{name.slice(0, 15)}...</h3>
        <p className="text-sm text-gray-600">{description.slice(0, 50)}...</p>
        <p className="text-sm font-medium mt-2">${price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-3 bg-red-500 text-white w-full px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Add to Cart
        </button>
        
      </div>
    </div>
  );
};

export default ProductCard;
