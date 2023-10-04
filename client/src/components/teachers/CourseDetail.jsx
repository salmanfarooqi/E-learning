import React, { useEffect, useState } from 'react';
import './courseDetail.css';
import { FaUserCheck } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { MdOutlineLibraryBooks, MdVideoSettings } from 'react-icons/md';
import { BsGraphUpArrow } from 'react-icons/bs';
import axios from 'axios';

const CourseDetail = () => {
    const [descriptionSelection, setDescriptionSelection] = useState('courseDescription');
    const [courseData,setCourseData]=useState('')


    useEffect(()=>{

        let getData=async()=>{

            let response=await axios.get("http://localhost:3001/coursedetail")

            setCourseData(response.data)

        
        }


        getData()


    },[])

    console.log("res",courseData)

    return (
        <>
            <div className="courseDetail-wrapper">
                <div className="courseDetail-card">

                    {courseData.map((item)=>(

                        console.log(first)



                    ))}
                    <div className="Description">
                        <img src='./images/cat-2.jpg' className='top-image' alt="Course Thumbnail" />
                        <div className="course-name">
                            <h1>web development with html and css</h1>
                        </div>
                        <div className="detail">
                            <img src='./images/cat-1.jpg' className='author-image' alt="Author Thumbnail" />
                            <h1>Author Name</h1>
                            <h2>enrolled students 2k</h2>
                            <h2>4.6 Reviews</h2>
                        </div>
                    </div>

                    <div className="details-button">
                        <button onClick={() => setDescriptionSelection('courseDescription')}>Description</button>
                        <button onClick={() => setDescriptionSelection('authorDescription')}>Author</button>
                        <button onClick={() => setDescriptionSelection('reviewsDescription')}>Reviews</button>
                    </div>

                    {descriptionSelection === 'courseDescription' && (
                        <div className="course-description">
                            <div className="descriptions">
                                <h1>Description</h1>
                                <h2>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium hic eligendi ullam magni,
                                    <br /> incidunt a delectus aspernatur corrupti? Quod sint incid?<br /> incidunt a delectus 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                                    <br /> incidunt a delectus aspernatur corrupti? Quod sint incid?<br /> incidunt a delectus asper
                                </h2>
                            </div>
                            <div className="course-content">
                                <h1>course content</h1>
                                <h2>
                                <h2>
                     introduction to html<br/>
                  html structure<br/>
                heading tag<br/>
                paragraph tag<br/>
                image tag<br/>
          </h2>
                                </h2>
                            </div>
                        </div>
                    )}


{/* // author description */}
{descriptionSelection === 'authorDescription' && (
  <div className="course-description">

    <div className="author-detail">
      <img src='./images/cat-2.jpg' className='author-image'></img>
      <h2>4.6 Rating</h2>
      <h1>john doe</h1>
      <h2>phd computer science</h2>
    </div>
      <div className="descriptions">
          <h1>about instructor</h1>
          <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium hic eligendi ullam magni,
              <br /> incidunt a delectus aspernatur corrupti? Quod sint incid?<br /> incidunt a delectus 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
              <br /> incidunt a delectus aspernatur corrupti? Quod sint incid?<br /> incidunt a delectus asper
          </h2>
      </div>
      
  </div>
)}


{descriptionSelection === 'ReviewsDescription' && (
  <div className="course-description">
      <div className="descriptions">
          <h1>Description</h1>
          <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium hic eligendi ullam magni,
              <br /> incidunt a delectus aspernatur corrupti? Quod sint incid?<br /> incidunt a delectus 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
              <br /> incidunt a delectus aspernatur corrupti? Quod sint incid?<br /> incidunt a delectus asper
          </h2>
      </div>
    
  </div>
                    )}
                </div>

                <div className="pricing">
                    <h1 className='course-price'>$400</h1>
                    <div className="instructor">
                        <div className='left-sections'>
                            <FaUserCheck className='icon' />
                            <h1>Instructor</h1>
                        </div>
                        <h1>afaq hussain</h1>
                    </div>

                    <div className="instructor">
                        <div className='left-section'>
                            <FiClock className='icon' />
                            <h1>Duration</h1>
                        </div>
                        <h1>8 hours</h1>
                    </div>

                    <div className="instructor">
                        <div className='left-section'>
                            <MdVideoSettings className='icon' />
                            <h1>lectures</h1>
                        </div>
                        <h1>29</h1>
                    </div>

                    <div className="instructor">
                        <div className='left-section'>
                            <BsGraphUpArrow className='icon' />
                            <h1>level</h1>
                        </div>
                        <h1>intermediate</h1>
                    </div>

                    <div className="instructor">
                        <div className='left-section'>
                            <MdOutlineLibraryBooks className='icon' />
                            <h1>Language</h1>
                        </div>
                        <h1>English</h1>
                    </div>

                    <button>Enroll now</button>
                </div>
            </div>
            {console.log("descr",descriptionSelection)}
        </>
    )
}

export default CourseDetail;
