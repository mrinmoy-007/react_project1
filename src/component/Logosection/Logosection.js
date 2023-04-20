import logo from "../../Image/logo.png"
import { Link } from "react-router-dom";
import "./Logosection.css";

export default function Logosection(){
    return(
        <div className="logo_section">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="logo"><Link ><img src={logo} /></Link></div>
                  </div>
               </div>
            </div>
         </div>
    );
}