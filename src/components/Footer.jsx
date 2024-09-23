import React from 'react'
import FooterLogo from "../assets/images/footer-logo.svg"
import location from "../assets/images/icon-location.svg"
import phone from "../assets/images/icon-phone.svg"
import email from "../assets/images/icon-email.svg"
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
    <div className='container'>
     <div className="col">
       <div className="footer-logo">
         <img src={FooterLogo} alt='footer'/>
       </div>
       <div className="footer-contact">

        <div className="location">
          <img src={location}
          alt='location'/>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
            nulla impedit commodi.</p>
        </div>

        <div className="phone">
           <img src={phone} alt='Phone'/>
           <p>Phone: +1-543-123-4567</p>
         </div>
         
         <div className="email">
           <img src={email} alt='email'/>
           <p>example@fylo.com</p>
         </div>

      </div>
       </div>
 
       <div class="col">
                 <div class="nav-bar">
                     <ul>
                         <li><a href="#">About Us</a></li>
                         <li><a href="#">Jobs</a></li>
                         <li><a href="#">Press</a></li>
                         <li><a href="#">Blog</a></li>
                     </ul>
                 </div>
             </div>
 
             <div class="col">
                 <div class="nav-bar">
                     <ul>
                         <li><a href="#">Contact Us</a></li>
                         <li><a href="#">Terms</a></li>
                         <li><a href="#">Privacy</a></li>
                     </ul>
                 </div>
                
    </div>
    <div class="col">
                 <div class="social-media">
                <i><BsInstagram/></i>  
                <i><BsTwitter/></i>  
                <i><FaFacebookF/></i>  
 
                 </div>
    </div>
    </div>
    </div>
  )
}
