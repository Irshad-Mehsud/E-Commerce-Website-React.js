import React, { useState, useEffect } from 'react';
import SignUpForm from '../signup/SignUpForm';
import '../../index.css';
import LoginForm from '../login/LoginForm';
import NavbarWrapper from '../navbar/NavbarWrapper';
import HeroSection from '../herosection/HeroSection';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import ProductCard from '../FeaturedProducts/ProductCard';
import CartPage from '../cartpage/CartPage';
import DesktopNavbar from '../navbar/DesktopNavbar';

const Home = () => {

  // useState hook to manage the form type (login or signup)
  const [type, setType] = useState("login");

  // Control visibility of the auth section
  const [showAuth, setShowAuth] = useState(false);

  // Store products from fakestore API
  const [products, setProducts] = useState([]);

  const [itemcount ,setItemCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);
  

  // Show login/signup form when user clicks anywhere
  const handleClickAnywhere = () => {
    setShowAuth(true);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickAnywhere);

    return () => {
      document.removeEventListener('click', handleClickAnywhere);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      {/* <NavbarWrapper /> */}

      {/* Login/Signup Section shown on any click */}
      {showAuth && (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
          {type === "login" ? (
            <LoginForm setType={setType} />
          ) : (
            <SignUpForm setType={setType} />
          )}
        </div>
      )}

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Section */}
      <FeaturedProducts>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.title}
            description={product.description}
            price={product.price}
            setItemCount={setItemCount}
            itemcount={itemcount}
          />
        ))}
      </FeaturedProducts>
    </>
  );
};

export default Home;
