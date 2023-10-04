import React from 'react'
// import './CourseCard.css'
import './teacher.css'
import {FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Teacher = () => {
  return (
    <div className="teachercard-wrapper">
      <Link to="/teachers">

    <div className="card">
        <div className="image-text">
        <FaUserAlt className='teachercard-image'/>
        <h2>No of teachers</h2>

        </div>

        <div className="no-student">
            <h2>9+</h2>
        </div>
        
    </div>
    </Link>

   </div>
  )
}

export default Teacher