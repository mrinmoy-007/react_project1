
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Home from "./component/Home/Home";
import Catagory from "./component/Catagory/Catagory";
import About from "./component/About/About"


function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
           <Route path="/" element ={<Home/>} />
           <Route path="/about" element ={<About/>} />
           <Route path="/catagory" element ={<Catagory/>} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;
