import React from 'react'
import Sidebar from '../../components/Admin/adminSidebar/Sidebar'
// import Courses from '../../components/Admin/courses/Courses'
import './admin.css'
import AdminCourse from '../../components/Admin/courses/AdminCourse'
import Dashboard from '../../components/Admin/Dashboard/Dashboard'

const Admin = () => {
  return (
    
       <div className="admin-wrapper">

        <Sidebar/>
      
        <Dashboard/>

       </div>
        
  )
}

export default Admin