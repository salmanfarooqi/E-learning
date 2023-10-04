import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className="Header-wraper">

        <div className="nav-logo">
           <Link to="/Home" className='link'><h1>e learning</h1></Link> 
        </div>
        <div className="nav-links">
            <ul>
                <Link to="/Home" className='nav-li'><li>Home</li></Link>
                <Link to="/contact" className='nav-li'><li>Contact</li></Link>
                <Link to="/about" className='nav-li'><li>about</li></Link>
                <Link to="/signup" className='nav-li'><li>signup</li></Link>
               
                
            </ul>
        </div>
    </div>
  )
}

export default Header