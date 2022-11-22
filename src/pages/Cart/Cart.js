import "./Cart.css";
import { Link } from "react-router-dom";
import shoppingCartImg from "../../assets/shopping-cart.svg";

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
      subDiv = <div className="cart-filled">FILLED</div>;
    }
    console.log(props.cart);
    return subDiv;
  }

  return <div className="cart">{displayCart()}</div>;
}

export default Cart;
