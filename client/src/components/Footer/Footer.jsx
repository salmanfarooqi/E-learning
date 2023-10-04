import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="footer-wrapper">

        <div className="addres-section">
            <h1>Contact</h1>
            <ul>
                <li>Home</li>
                <li>addres:B-17 islamabad</li>
                <li>contact:034333444</li>
                <li>Emaial:salmanfarooqi@gmail.com</li>
              
            </ul>
        </div>
        <div className="categroy-section">
        <h1>Categry</h1>
            <ul>
                <li>web development</li>
                <li>Data science</li>
                <li>script writing</li>
                <li>Artificial inteligence</li>
              
            </ul>
        </div>
        <div className="quickLinks-section">
        <h1>Quick links</h1>
            <ul>
                <li>Home</li>
                <li>about</li>
                <li>contac</li>
                <li>signup</li>
              
            </ul>
        </div>
        <div className="subscribe-section">
        <h1>Subscribe</h1>
          some text is here
        </div>
    </div>
  )
}

export default Footer