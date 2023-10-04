import React from 'react'
import './adminCourse.css'
import Sidebar from '../adminSidebar/Sidebar';
// import Sidebar from './componet'
import './adminCourse.css'
import { Link } from 'react-router-dom';
function AdminCourse() {
  return (
    <div className="admin-courses-wrapper">
         <Sidebar/>
         
        <div className="right-section">
       <Link to="/addcourse"><button>Add course</button></Link> 
       
        <table>
            <thead>
                <tr>
                <th>S.No</th>
                <th>course Name</th>
                <th>Course instructor</th>
                <th>No.Enrolled students</th>
                <th>No.Lessons</th>
                <th>add lecture</th>
                <th>edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>

                </tr>
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default AdminCourse;