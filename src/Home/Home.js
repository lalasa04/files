import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Home.css"
export default function Home(){
    return(
        <>
        <Navbar/>
        <center><h1>👋 Welcome to our website.</h1></center>
        <div className="intro">
        <h1>Introdunction:-</h1>
        <div className="matter">
            <div className="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOxCgKpQJMTsHM2zIvBb_P0nx4R4XtYllOQ&s"></img>
            </div>
            <h4>RS Hospital stands as a trusted center of healthcare, committed to delivering quality medical services with compassion, integrity, and excellence. We focus on providing patient-centered care by combining advanced medical technology with the expertise of experienced doctors, skilled nurses, and dedicated support staff. Our hospital offers a comprehensive range of healthcare services, including preventive care, accurate diagnosis, emergency services, and specialized treatments, all under one roof.<br></br>

At RS Hospital, we believe that every patient deserves personalized attention, comfort, and respect. Our facilities are designed to ensure a safe, clean, and welcoming environment where patients and their families feel supported throughout their treatment journey. We continuously strive to improve our services by adopting modern medical practices and maintaining high standards of safety and hygiene.<br></br>

With a strong commitment to affordability and accessibility, RS Hospital aims to serve the community by delivering reliable and ethical healthcare services. Our mission is not only to treat illness but also to promote overall health and well-being through trust, transparency, and compassionate care. We are proud to be a healthcare partner you can depend on for a healthier future.</h4>
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>
               </>
    )
}