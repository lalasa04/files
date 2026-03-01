import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Signup() {
  const [user, setUser] = useState({
    name: "", email: "", password: "", dept: "", empId: ""
  });

  const handleSignup = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup Successful");
  };

  return (
    <>
    <Navbar/>
    
    <div className="box">
      <center><h2>Employee Signup</h2>
      Name:-<input placeholder="Name" onChange={e => setUser({...user, name:e.target.value})}/>{"  "}<br></br>
      Email:-<input placeholder="Email" onChange={e => setUser({...user, email:e.target.value})}/>{"  "}<br></br>
      Password:-<input placeholder="Password" type="password" onChange={e => setUser({...user, password:e.target.value})}/>{"  "}<br></br>
      Department:-<input placeholder="Department" onChange={e => setUser({...user, dept:e.target.value})}/>{"  "}<br></br>
      Employee ID:-<input placeholder="Employee ID" onChange={e => setUser({...user, empId:e.target.value})}/>{"  "}<br></br>
      <button onClick={handleSignup}>Register</button>{"  "}<br></br></center>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Footer/>
    </>
  );
}

export default Signup;
