
import Navbar from "../Navbar/Navbar";
import Logosection  from "../Logosection/Logosection";
import Header from "../Header/Header";


export default function Home(){
    return (
        <div className="banner_bg_main">
            <Navbar/>
            <Logosection/>
            <Header />
            <h1>hello from home</h1>
        </div>
    );

}

