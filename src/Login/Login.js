import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Login(){
    let [login,setlogin]=useState("");
    return(
        <>
        {login?(
        <nav>
            <Navbar/>
            <button onClick={()=>setlogin(false)}>logout</button>
        </nav>):(<><nav>
            <button onClick={()=>setlogin(true)}>login</button>
        </nav>
        </>)}
        <div class="login">
        <center>
            <h1>Login Page</h1>
        Email:<input type="username" id="username"></input><br></br>
        Password:<input type="password" id="password"></input><br></br>
        Conform Password:<input type="password" id="conform"></input>
        </center>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>
        </>
    );
};
export default Login;