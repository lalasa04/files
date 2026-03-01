import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import "./Landing.css";
import Footer from "../Footer/Footer";
 export default function Landing(){
    return(
        <>
        <div className="Back">
        <Navbar/>
        <center><h1>IT HelpDesk Portal </h1></center>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>
        </>
    )
}