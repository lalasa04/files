import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <>
        <nav>
            <img src="/images/download.png" className="logo" /><h2>RS HOSPITAL</h2> 
            <div className="body">
                <Link to="/Home">Home</Link>{"  "}
                <Link to="/About">About</Link>{"  "}
                <Link to="/Contact">Contact</Link>{"  "}
                <Link to="/Doctor">Doctor List</Link>{"  "}
                <Link to="/Login">Login</Link>{"  "}
                <Link to="/signup">Signup</Link>{"  "}
            </div>
        </nav>
        </>
    )
}
            
            