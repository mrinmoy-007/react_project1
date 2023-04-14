
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Home from "./component/Home/Home";


function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
           <Route path="/" element ={<Home/>} />
           <Route path="/about" element ={<h1>hello about</h1>} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;
