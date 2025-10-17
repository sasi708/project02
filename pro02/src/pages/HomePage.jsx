import React, { useState } from "react";
import Header from "../components/Header";
import MenuPage from "../components/MenuPage";
import Footer from "../components/Footer";


const HomePage = ({ user, onLogout }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => setCart((prev) => [...prev, item]);
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
    // or you can refresh: window.location.reload();
  };

  return (
    <div>
      <Header
        cartCount={cart.length}
        user={user}
        onLogout={onLogout}
        onHomeClick={handleHomeClick}
      />
      <MenuPage user={user} cart={cart} onAddToCart={handleAddToCart} />
      <Footer />
     
      
    </div>
  );
};

export default HomePage;
