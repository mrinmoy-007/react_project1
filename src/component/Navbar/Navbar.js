
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
    return (
        <div class="container">
        <div class="header_section_top">
           <div class="row">
              <div class="col-sm-12">
                 <div class="custom_menu">
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