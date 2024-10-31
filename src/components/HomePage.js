import React from "react";
import './HomePage.css'
import DogPaw from './images/dog-paw-2.png'



const HomePage= () => {
    
return(
   <div>
    <header className="header">
        <nav className="navbar">
   <h1 class="heading">SDAASH PET
        </h1>
   <ul className="nav-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#Testimionials">Testimonials</a></li>
    <li><a href="#contact">Contact</a></li>
   </ul>
        </nav>
        <div className="hero">
            <h2>Comfort, Care, & Rides for Your Pet’s Every Need!</h2>
            <p>Trusted pet cab services for safe travel across Mumbai, any time of day</p>
            <a 
    href="https://wa.me/+919867561516" 
    className="cta-button" 
    target="_blank" 
    rel="noopener noreferrer">
    Book a Ride on WhatsApp
</a>
        </div>
    </header>
   </div>
)
}
 export default HomePage