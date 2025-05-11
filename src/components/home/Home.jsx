import React, { useState, useEffect } from 'react';
import SignUpForm from '../signup/SignUpForm';
import '../../index.css';
import LoginForm from '../login/LoginForm';
import NavbarWrapper from '../navbar/NavbarWrapper';
import HeroSection from '../herosection/HeroSection';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import ProductCard from '../FeaturedProducts/ProductCard';
import Footer from '../footer/Footer';
import CartPage from '../cartpage/CartPage';
import DesktopNavbar from '../navbar/DesktopNavbar';
import AddToCartContext from '../context/AddToCartContext';
import Loading from '../Loading';

const Home = () => {

  // useState hook to manage the form type (login or signup)
  const [type, setType] = useState("login");

  // Control visibility of the auth section
  const [showAuth, setShowAuth] = useState(false);

  // Store products from fakestore API
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Item count state
  const [itemCount, setItemCount] = useState(0);

  // Check and set itemCount in localStorage if not already set
  useEffect(() => {
    const storedItemCount = localStorage.getItem("itemCount");
    if (storedItemCount === null) {
      localStorage.setItem("itemCount", 0); // Set default itemCount if not found
    } else {
      setItemCount(parseInt(storedItemCount)); // Retrieve from localStorage
    }
  }, []);

  // Sync itemCount with localStorage
  useEffect(() => {
    localStorage.setItem("itemCount", itemCount);
  }, [itemCount]);

  // Fetch products from API
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setItemCount(data.length); // Set item count based on fetched products
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    setTimeout(() => setLoading(false), 1000);
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
      {/* {showAuth && (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
          {type === "login" ? (
            <LoginForm setType={setType} />
          ) : (
            <SignUpForm setType={setType} />
          )}
        </div>
      )} */}

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Section */}
      <FeaturedProducts>
        {loading && performance.navigation.type === 1 ? (
          <div><Loading /></div>
        ) : (
          <>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                image={product.image}
                name={product.title}
                description={product.description}
                price={product.price}
                setItemCount={setItemCount}
                itemcount={itemCount}
              />
            ))}
          </>
        )}
      </FeaturedProducts>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
