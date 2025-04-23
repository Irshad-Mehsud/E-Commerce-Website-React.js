import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Discover the Latest Deals
        </h1>
        <p className="text-gray-600 mb-6">
          Shop top electronics, fashion, and more with exclusive offers
        </p>
        <button
          type="button"
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-500 transition"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
