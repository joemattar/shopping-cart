import "./NavBar.css";
import { Link } from "react-router-dom";
import autobots from "../../assets/autobots-logo.png";
import decepticon from "../../assets/decepticon-logo.svg";

function NavBar(props) {
  function displayNumberOfCartItems() {
    if (props.cartItems > 0) {
      return `(${props.cartItems})`;
    }
  }

  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <div className="logo">
          <img src={autobots} alt="Autobots Logo" />
          <div>TRANSFORMERS STORE</div>
          <img src={decepticon} alt="Decepticon Logo" />
        </div>
        <div className="links">
          <Link to={"/"}>HOME</Link>
          <Link to={"/shop"}>SHOP</Link>
          <Link to={"/cart"}>CART{displayNumberOfCartItems()}</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
