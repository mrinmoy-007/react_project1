
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import "./App.css";

import Home from "./component/Home/Home";
import Catagory from "./component/Catagory/Catagory";
import About from "./component/About/About"
import Fashion from "./component/Fashion/Fashion"


function App() {
  return (
    

       <Router>
         <Routes>
           <Route path="/" element ={<Home/>} />
           <Route path="/about" element ={<About/>} />
           <Route path="/catagory" element ={<Catagory/>} />
           <Route path="/fashion" element ={<Fashion/>} />
         </Routes>
       </Router>

    
  );
}

export default App;
