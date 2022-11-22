import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./assets/data";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  document.title = "Shopping Cart";

  // Variable cartItems that contains the total number of items in the cart
  const [cartItems, setCartItems] = useState(0);
  // Variable cartTotal that contains the total price of all items in the cart
  const [cartTotal, setCartTotal] = useState(0);
  // Variable cart (array) containing item in cart (objects with id and quantity)
  const [cart, setCart] = useState([]);

  // Method to get an item from data based on id
  function getItemInfoFromDataHandler(id) {
    const dataKeys = Object.keys(data);
    let targetKey;
    for (let key of dataKeys) {
      if (Object.values(data[key]).indexOf(id) > -1) {
        targetKey = key;
      }
    }
    return data[targetKey];
  }

  // Method that returns true if an item is in the cart given an item id
  function isItemInCart(id) {
    let inCart = false;
    for (let item of cart) {
      if (item.id === id) {
        inCart = true;
      }
    }
    return inCart;
  }

  // Method that calls the addToCartHandler method from shop
  function addToCartFromShopHandler(event) {
    const targetID = Number(event.target.parentNode.getAttribute("id"));
    addToCartHandler(targetID);
  }

  // Method that calls the addToCartHandler method from cart
  function addToCartFromCartHandler(event) {
    // TO REVIEW
    // TO REVIEW
    // TO REVIEW
    const targetID = Number(event.target.parentNode.getAttribute("id"));
    addToCartHandler(targetID);
  }

  // Method that handles the addition of an item to cart given the item id
  function addToCartHandler(targetID) {
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

  // TO REVIEW
  // TO REVIEW
  // TO REVIEW
  function removeFromCartHandler() {
    setCartItems(cartItems - 1);
  }

  return (
    <div className="App">
      <BrowserRouter basename="/shopping-cart">
        <NavBar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop addToCartFromShopHandler={addToCartFromShopHandler} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                cart={cart}
                getItemInfoFromDataHandler={getItemInfoFromDataHandler}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
