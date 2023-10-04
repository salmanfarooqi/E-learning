import React from 'react'
import './Categries.css'
import { LiaEdit } from "react-icons/lia";

const Categries = () => {
  return (
    <div className="categries-wraper">
        {/* <h1 className='categries-top-text'>Course Categries</h1> */}
        <div className="categries-card">
            
            <LiaEdit className='image' />

            <div className="card-texts">
            <h1>Finance</h1>
            <h2>3 courses</h2>

            </div>
           
        </div>
    </div>
  )
}

export default Categries