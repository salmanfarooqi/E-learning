import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className="sidebar-wraper">
         <div className="sidebar">
            <div className="admin-image">
                <img src='./images/user.png'></img>
            </div>
            <ul>
            <Link to="/admin"   style={{textDecoration:'none',color:"black"}}>  <li><img src='./images/cart.png'></img><h2>Dahboard</h2></li></Link>
              <Link to="/teachers"   style={{textDecoration:'none',color:"black"}}>  <li><img src='./images/cart.png'></img><h2>teachers</h2></li></Link>
               <Link to="/students" style={{textDecoration:'none',color:"black"}}><li><img src='./images/cart.png'></img><h2>students</h2></li></Link> 
              
                <Link to="/courses"   style={{textDecoration:'none',color:"black"}}>  <li><img src='./images/cart.png'></img><h2>courses</h2></li></Link>
               
            </ul>
         </div>
    </div>
  )
}

export default Sidebar