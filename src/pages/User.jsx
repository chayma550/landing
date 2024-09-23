import React from 'react'
import Image from "../assets/images/illustration-your-users.svg"
export default function User() {
  return (
    <div className='user'>
    <div className="container">
    <div className="card">

         <div className="col">
              <div className="text">
                <h2>Your Users</h2>
                <p>It takes no time at all to integrate Huddle with your app's authentication solution . This means, once signed in to your app, your users can star chatting immediately.</p>
              </div>
         </div>
         <div className="col">
            <div className="image-container">
                 <img src={Image} alt='Image2'/>
            </div>
         </div>
    </div>
    </div>
</div>
  )
}
