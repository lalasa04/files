import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Contact.css"
export default function Contact(){
    return(
        <>
        <Navbar/>
        <section className="contact">
            <center><h1>Contact Information</h1></center>
            <strong><h2>📍 Address: Rampally X Road, East Gandhi Nagar, Nagaram, Secunderabad, Telangana 500083, India (based on online listings for RS Hospital contact)</h2><br></br>
            <p>📞 Phone: +91-90000-08658, +91-90000-086341</p><br></br>
            <p>✉️ Email: rshospital06@gmail.com</p><br></br>
            <p>📱 WhatsApp / Enquiries: Available (same phone numbers)</p><br></br>
            <p>🌐 Website: Official RS Hospital site – rshospital.com</p></strong>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>
        </>
    )
}