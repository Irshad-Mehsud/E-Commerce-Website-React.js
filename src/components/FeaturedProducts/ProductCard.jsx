import React, { useContext } from "react";
import AddToCartContext from "../context/AddToCartContext";
import { addDoc, collection } from "firebase/firestore"; // Only Firestore methods
import { db } from "../signup/config/firebase"; // ✅ Import Firestore config properly

const ProductCard = ({ image, name, price, description, product }) => {
  const { itemCount, setItemCount, cartItems, setCartItems } = useContext(AddToCartContext);

  const AddDattaToFirebase = async () => {
    try {
      await addDoc(collection(db, "cartItems"), {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
        addedAt: new Date().toISOString()
      });
      console.log("Product added to Firebase successfully!");
    } catch (error) {
      console.error("Error adding product to Firebase:", error);
    }
  };

  const handleAddToCart = () => {
    setItemCount(itemCount + 1);
    setCartItems([...cartItems, product]);
    AddDattaToFirebase(); // ✅ Add to Firebase after cart update
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
