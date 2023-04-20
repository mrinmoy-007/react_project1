
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
    return (
        <div className="container">
        <div className="header_section_top">
           <div className="row">
              <div className="col-sm-12">
                 <div className="custom_menu">
                    <ul>
                       <li><Link >Best Sellers</Link></li>
                       <li><Link >Gift Ideas</Link></li>
                       <li><Link >New Releases</Link></li>
                       <li><Link >Today's Deals</Link></li>
                       <li><Link >Customer Service</Link></li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
     </div>
    );
}