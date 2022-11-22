import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  document.title = "Shopping Cart";

  const [cartItems, setCartItems] = useState(0);

  function addToCartHandler() {
    setCartItems(cartItems + 1);
  }

  return (
    <div className="App">
      <BrowserRouter basename="/shopping-cart">
        <NavBar cartItems={cartItems} />
        <Routes>
          {/* NEED TO FIX /shopping-cart ADDRESS ON NPM START */}
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop addToCartHandler={addToCartHandler} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
