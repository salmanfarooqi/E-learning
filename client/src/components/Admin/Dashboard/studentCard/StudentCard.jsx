import React from 'react'
import './studentcard.css'
import {FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const StudentCard = () => {
  return (
   <div className="studentcard-wrapper">
<Link to="/students">
    <div className="card">
        <div className="image-text">
        <FaUserAlt className='studentcard-image'/>
        <h2>No of student</h2>

        </div>

        <div className="no-student">
            <h2>9+</h2>
        </div>
        
    </div>
    </Link>

   </div>
  )
}

export default StudentCard  