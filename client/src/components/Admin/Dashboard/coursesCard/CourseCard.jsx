import React from 'react'
import './CourseCard.css'
import {FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CourseCard = () => {
  return (
   <div className="CourseCard-wrapper">

    <Link to="/courses">

    <div className="card">
        <div className="image-text">
        <FaUserAlt className='CourseCard-image'/>
        <h2>No of courses</h2>

        </div>

        <div className="no-student">
            <h2>9+</h2>
        </div>
        
    </div>
    </Link>

   </div>
  )
}

export default CourseCard  