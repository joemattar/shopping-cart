import "./Cart.css";
import { Link } from "react-router-dom";
import shoppingCartImg from "../../assets/shopping-cart.svg";
import CartItem from "../../components/CartItem/CartItem";

// Declare Cart component to display an empty or filled cart page
function Cart(props) {
  function displayCart() {
    let subDiv;
    if (props.cartItems === 0) {
      subDiv = (
        <div className="cart-empty">
          <div className="cart-empty-text">
            <img src={shoppingCartImg} alt="Shopping Cart Logo" />
            <div>YOUR CART IS EMPTY</div>
          </div>
          <Link to={"/shop"}>
            <button className="enter-store">ADD ITEMS</button>
          </Link>
        </div>
      );
    } else if (props.cartItems > 0) {
      subDiv = (
        <div className="cart-filled">
          <div className="cart-filled-title">SHOPPING CART</div>
          <div className="cart-filled-items">{displayCartItems()}</div>
          <div className="cart-filled-total">
            <div className="cart-filled-total-text">TOTAL</div>
            <div className="cart-filled-total-amount">{`${props.cartTotal} CAD`}</div>
          </div>
          <button
            className="enter-store checkout"
            onClick={props.clearCartHandler}
          >
            CLEAR CART
          </button>
          <button className="enter-store checkout">GO TO CHECKOUT</button>
        </div>
      );
    }
    console.log(props.cart);
    return subDiv;
  }

  function displayCartItems() {
    let cartItemsList = [];
    for (let item of props.cart) {
      const itemInfo = props.getItemInfoFromDataHandler(item.id);
      const newCartItem = (
        <CartItem
          key={item.id}
          id={item.id}
          urlImage={itemInfo.urlImage}
          name={itemInfo.name}
          quantity={item.quantity}
          price={itemInfo.price}
          subtotal={item.quantity * itemInfo.price}
          addToCartFromCartHandler={props.addToCartFromCartHandler}
          removeFromCartFromCartHandler={props.removeFromCartFromCartHandler}
        />
      );
      cartItemsList.push(newCartItem);
    }

    return cartItemsList;
  }

  return <div className="cart">{displayCart()}</div>;
}

export default Cart;
