import React from "react";

const FeaturedProducts = ({ children }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Featured Products
        </h2>
        <div
          id="card-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
