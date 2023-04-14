
import { Link } from "react-router-dom";
import Navbar from "./component/Navbar/Home";

export default function Navbar(){
    return (
      <div className="Navbar">
          <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/catagory" >Catagoty</Link></li>
              <li><Link to="/about" >about</Link></li>
          </ul>
      </div>
    );
}