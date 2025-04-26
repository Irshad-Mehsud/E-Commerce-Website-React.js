import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import CartPage from '../cartpage/CartPage';
import Layout from '../Layout/Layout'; // Import Layout (adjust path)

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/cart" element={<Layout><CartPage /></Layout>} />
        
        {/* Future routes can go here */}
        {/* <Route path="/products" element={<Layout><h1>Products</h1></Layout>} /> */}
        {/* <Route path="/products/:id" element={<Layout><h1>Product Details</h1></Layout>} /> */}
        {/* <Route path="/categories/:category" element={<Layout><h1>Category Products</h1></Layout>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
