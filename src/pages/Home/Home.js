import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to={"/shop"}>
        <button className="enter-store">VISIT OUR STORE</button>
      </Link>
    </div>
  );
}

export default Home;
