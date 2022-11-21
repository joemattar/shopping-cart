import "./NavBar.css";
import { Link } from "react-router-dom";
import autobots from "../../assets/autobots-logo.png";
import decepticon from "../../assets/decepticon-logo.svg";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={autobots} alt="Autobots Logo" />
        <div>TRANSFORMERS STORE</div>
        <img src={decepticon} alt="Decepticon Logo" />
      </div>
      <div className="links">
        <Link to={"/"}>HOME</Link>
        <Link to={"/shop"}>SHOP</Link>
        <Link to={"/cart"}>CART</Link>
      </div>
    </div>
  );
}

export default NavBar;
