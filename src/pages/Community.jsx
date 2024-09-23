import React from 'react'
import Image from "../assets/images/illustration-mockups.svg"
export default function Community() {
  return (
    <div className='community'>
        <div className="container">
            <div className="col">
                 <div className="text">
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p> Try It Free Build The Community Your Fans Will Love Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. Get Started For Free Grow Together Generate meaningful discussions with your audience and build a strong</p>
                 </div>
                 <div className="get-started">
                    <button className='btn'>Get Started For free</button>
                 </div>
            </div>
            <div className="col">
                <div className="image-container">
                    <img src={Image} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}
