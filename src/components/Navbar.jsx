import React from 'react'
import Logo from "../assets/images/logo.svg"
import Community from '../pages/Community'
export default function Navbar() {
  return (
    <div className='header'>
        <div className="nav">
        <img src={Logo} alt='logo'/>
     <div className="link-button">
        <button className='btn'>Try It Free</button>
        </div> 
        </div>

       <Community/>
    </div>
  )
}
