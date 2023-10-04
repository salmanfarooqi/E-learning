import React, { useState } from 'react'
import './Course.css'
import { useEffect } from 'react'
import axios from 'axios'

const Courses = () => {
    const [courseData,setCourseData]=useState([])
    const getdata=async()=>{

        const response= await axios.get("http://localhost:3001/")
        console.log("data is",response.data)
        setCourseData(response.data)
    // alert(response.data)
    
    }
    
    useEffect(()=>{
    
        getdata()
    })
  return (
    <div className="courses-wraper">

        {courseData.map((item)=>(
        <div className="course-card">
        <div className="course-image">
            <img src='./images/course-1.jpg'></img>
        </div>
        <div className="course-detail">
        <div className="course-author">
            <img src='./images/cat-2.jpg' ></img>
            <h1>{item.courseAuthor} </h1>
        </div>
        <div className="course-name">
            <h1>{item.courseName}</h1>
        </div>
        

       
       
        <div className="lessons-clases">
            <h2>6 Lessons</h2>
            <h2> 3.5hours</h2>
            <h2>50$</h2>
                <h2>Reviews</h2>
           
              
            </div>
            </div>
            </div>
            ))}
        
    </div>
  )
}

export default Courses