import React from 'react'
import Image from "../assets/images/illustration-grow-together.svg"
export default function Grow() {
  return (
    <div className='grow'>
        <div className="container">
        <div className="card">

             <div className="col">
                  <div className="text">
                    <h2>Grow Together</h2>
                    <p>Generate meaningful discussions with your audiance and build a strong, loyal community.Think of the insightful conversation you miss out on with a feedback from.</p>
                  </div>
             </div>
             <div className="col">
                <div className="image-container">
                     <img src={Image} alt='Image3'/>
                </div>
             </div>
        </div>
        </div>
    </div>
  )
}
