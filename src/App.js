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
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([]);

  function isItemInCart(id) {
    let found = false;
    for (let item of cart) {
      if (item.id === id) {
        found = true;
      }
    }
    return found;
  }

  function addToCartHandler(event) {
    const targetID = Number(event.target.parentNode.getAttribute("id"));
    console.log(targetID);
    let newCart;
    if (isItemInCart(targetID) === true) {
      newCart = cart.map((item) => {
        if (item.id === targetID) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
    } else if (isItemInCart(targetID) === false) {
      newCart = [
        ...cart,
        {
          id: targetID,
          quantity: 1,
        },
      ];
    }
    setCart(newCart);
    setCartItems(cartItems + 1);
  }

  function removeFromCartHandler() {
    setCartItems(cartItems - 1);
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
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} cart={cart} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
