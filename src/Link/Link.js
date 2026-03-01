import {BrowserRouter, Routes,Route} from "react-router-dom";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Doctor from "../Doctor/Doctor";
import Signup from "../Signup/Signup";
import Footer from "../Footer/Footer";
// import Appintegration from "../Appintegration/Appintegration";
function Link(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
             <Route path="/Login" element={<Login/>}/>
             <Route path="/Home" element={<Home/>}/>  
            <Route path="/Navbar" element={<Navbar/>}/>
             <Route path="/Contact" element={<Contact/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Doctor" element={<Doctor/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            {/*<Route path="/Appintegration" element={<Appintegration/>}/> */}
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Link;