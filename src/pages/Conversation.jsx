import React from 'react'
import Image from "../assets/images/illustration-flowing-conversation.svg"
export default function Conversation() {
  return (
    <div className='conversation'>
    <div className="container">
    <div className="card">
        
         <div className="col">
            <div className="image-container">
                 <img src={Image} alt='Image4'/>
            </div>
         </div>

         <div className="col">
              <div className="text">
                <h2>Flowing Conversations</h2>
                <p>Your wouldn't paginate a conversation in real life , so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
              </div>
         </div>
         
    </div>
    </div>
</div>
  )
}
