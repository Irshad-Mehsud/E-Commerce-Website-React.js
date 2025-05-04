import React, { useState } from 'react';
import AddToCartContext from './components/context/AddToCartContext';
import AppRoutes from './components/routes/AppRoutes';

const App = () => {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <AddToCartContext.Provider value={{ itemCount, setItemCount, cartItems, setCartItems }}>
      <AppRoutes />
    </AddToCartContext.Provider>
  );
};

export default App;
