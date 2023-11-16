import Home from "./Home";
import About from "./About";
import Tourpage from "./tourpage";
import TourloginPage from "./Tourloginpage";
import Registerpage from "./registerpage";
import Router from "./Router";
import Mybookings from "./Mybookings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Header(){
    return(
        <div>
            
            <BrowserRouter>
            <Router/>
            <Routes>
                <Route exact path="/" element={<TourloginPage/>}/>
                <Route exact path="/TourloginPage" element={<TourloginPage/>}/>
                <Route exact path="/Home" element={<Home/>}/>
                <Route exact path="/About" element={<About/>}/>
                <Route exact path="/Tourpage" element={<Tourpage/>}/>
                <Route exact path="/Registerpage" element={<Registerpage/>}/>
                <Route exact path="/Mybookings" element={<Mybookings/>}/>
            </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Header;