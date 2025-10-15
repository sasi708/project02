// src/pages/HomePage.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import MenuPage from "../components/MenuPage";
import Footer  from "../components/Footer";

const HomePage = ({ user, onLogout }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div>
      <Header cartCount={cart.length} user={user} onLogout={onLogout} />
      <MenuPage
        user={user}
        cart={cart}
        onAddToCart={handleAddToCart}
        onLogout={onLogout}
      />
        <Footer />
    </div>
  );
};

export default HomePage;
