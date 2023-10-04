import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-wraper">
       <div className="contact-carsoule">
            <h1>contact us</h1>
          
        </div>
        <h1 className='conversation-text'>lets start conversation</h1>
        <div className="bottom-section">
           
        <div className="left-section">
            <div className="heading-text">
                <h1>contact info</h1>
               
            </div> 
             <div className="left-section-content">
                <div className="single-content">
                <img src='./images/address.png' className='contact-image'></img><h1>sardheri charsadha</h1>

                </div>
                <div className="single-content">
                <img src='./images/email.png' className='contact-image'></img><h1>salman@gmail.com</h1>

                </div>
                <div className="single-content">
                <img src='./images/call.png' className='contact-image'></img><h1>03433499933</h1>

                </div>
                <div className="single-content">
                <img src='./images/insta.png' className='contact-image'></img><h1>salmaninsta1222</h1>

                </div>
              
            </div>
        </div>
        <div class="contact-form">
    <div class="input-row">
        <label>
            First Name:
            <input type="text" class="line-input" placeholder="First Name" />
        </label>
        <label>
            Last Name:
            <input type="text" class="line-input" placeholder="Last Name" />
        </label>
    </div>
    <div class="input-row">
        <label>
            Email:
            <input type="email" class="line-input" placeholder="Email" />
        </label>
        <label>
            Mobile Number:
            <input type="tel" class="line-input" placeholder="Mobile Number" />
        </label>
    </div>
    <div class="input-row">
        <label>
            Message:
            <textarea class="line-input" placeholder="Write your message here..."></textarea>
        </label>
    </div>
    <button className='sent-button'>Sent</button>
</div>
</div>


        </div>
        

        
  )
}

export default Contact