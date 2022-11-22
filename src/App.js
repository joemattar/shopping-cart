import React, { useState, useEffect } from "react";
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

  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let item of cart) {
      const itemInfo = getItemInfoFromDataHandler(item.id);
      totalPrice += item.quantity * itemInfo.price;
    }
    setCartTotal(totalPrice);
  }

  // Method that calls the addToCartHandler method from shop
  function addToCartFromShopHandler(event) {
    const targetID = Number(event.target.parentNode.getAttribute("id"));
    addToCartHandler(targetID);
  }

  // Method that calls the addToCartHandler method from cart
  function addToCartFromCartHandler(event) {
    const targetID = Number(event.target.parentNode.getAttribute("id"));
    addToCartHandler(targetID);
  }

  // Method that handles the addition of an item to cart given the item id
  function addToCartHandler(targetID) {
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

  // Method that calls the addToCartHandler method from cart
  function removeFromCartFromCartHandler(event) {
    const targetID = Number(event.target.parentNode.getAttribute("id"));
    removeFromCartHandler(targetID);
  }

  // Method that handles the removal of an item to cart given the item id
  function removeFromCartHandler(targetID) {
    // Decrease quantity
    let newCart = cart.map((item) => {
      if (item.id === targetID) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });

    // Cart cleanup / removal of items having quantity = 0
    newCart = newCart.filter((item) => {
      if (item.quantity === 0) {
        return false;
      }
      return true;
    });

    setCart(newCart);
    setCartItems(cartItems - 1);
  }

  function clearCartHandler() {
    setCart([]);
    setCartItems(0);
  }

  useEffect(() => {
    calculateTotalPrice();
  });

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
                cartTotal={cartTotal}
                cart={cart}
                getItemInfoFromDataHandler={getItemInfoFromDataHandler}
                addToCartFromCartHandler={addToCartFromCartHandler}
                removeFromCartFromCartHandler={removeFromCartFromCartHandler}
                clearCartHandler={clearCartHandler}
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
