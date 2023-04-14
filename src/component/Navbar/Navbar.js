
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
    return (
      <div className="nav">
          <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/catagory" >Catagoty</Link></li>
              <li><Link to="/about" >about</Link></li>
          </ul>
      </div>
    );
}