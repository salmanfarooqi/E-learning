import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carsoule from '../../components/carsoules/Carsoule'
import Courses from '../../components/Courses/Courses'
import Categries from '../../components/categries/Categries'
import Instructor from '../../components/Instructor/Instructor'
import Works from '../../components/works/Works'
import './Home.css'

const Home = () => {
  return (
    <div className="home-wrapper">
     
       <Carsoule/>
       <div className="container">

       <div className="categries-section">
        <div className="text"><h1 className='top-text'>Top course categries</h1></div>
        <div className="categries">
       <Categries/>
       <Categries/>
       <Categries/>
       <Categries/>
       <Categries/>
       <Categries/>
       <Categries/>
       <Categries/>
       <Categries/>
       <Categries/>
       </div>

       </div>
       <div className="courses-section">
       <div className="text"><h1 className='top-text'>our courses</h1></div>
       <div className="courses">
       <Courses/>
       {/* <Courses/>
       <Courses/>
       <Courses/>
       <Courses/> */}

       </div>

       

       </div>
      
 
    
       <Instructor/>

       </div>
       
    </div>
  )
}

export default Home;