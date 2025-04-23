import React from "react";

const ProductCard = ({ key, image , name , price , description , setItemCount , itemcount  }) => {

  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition">
      <img
        src={image}
        alt="Product"
        className="w-full h-52 object-contain p-4"
      />
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800">
          {name.slice(0, 15)}...
        </h3>
        <p>{description.slice(0,50)} ...</p>
        <p className="text-sm text-gray-600">${price}</p>
        <button className="mt-2 bg-red-500 text-white w-full px-4 py-2 rounded hover:bg-red-500" onClick={() => setItemCount(itemcount + 1 )}>
          Add to Cart
        </button>
      </div>
    </div>
  );

};

export default ProductCard;
