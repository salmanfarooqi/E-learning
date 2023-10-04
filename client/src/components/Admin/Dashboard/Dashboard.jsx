import React from 'react'
import StudentCard from './studentCard/StudentCard'
import CourseCard from './coursesCard/CourseCard'
import './Dashboard.css'
import Teacher from './teachers/Teacher'
import Graph from './DashboardGraph/Graph'

function Dashboard() {
  return (
    <div>
        <div className="dashboard-wrapper">
        <StudentCard/>
        <CourseCard/>
        <Teacher/>
      

        </div>
        {/* <Graph/> */}

       
        
    </div>
  )
}

export default Dashboard