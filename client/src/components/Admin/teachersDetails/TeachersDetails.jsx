import React from 'react'
import Sidebar from '../adminSidebar/Sidebar'
// import './TeachersDetails.css'
import './teachersDetails.css'
// import addcourse from '../AddCourse/addcourse.css'
import { Link } from 'react-router-dom'

const TeachersDetails = () => {
  return (
    <div className="TeachersDetails-wrapper">
        
    <Sidebar/>

    <Link to="/addteacher"><button>Add teacher</button></Link> 
 

    <div className="student-container">
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
                    <td>web development</td>
                    <td>john doe</td>
                    <td>10</td>
                    <td>10</td>
                    <td>add</td>
                    <td>edit</td>

                </tr>


                <tr>
                    <td>1</td>
                    <td>web development</td>
                    <td>john doe</td>
                    <td>10</td>
                    <td>10</td>
                    <td>add</td>
                    <td>edit</td>

                </tr>


                <tr>
                    <td>1</td>
                    <td>web development</td>
                    <td>john doe</td>
                    <td>10</td>
                    <td>10</td>
                    <td>add</td>
                    <td>edit</td>

                </tr>





                <tr>
                    <td>1</td>
                    <td>web developmen</td>
                    <td>john doe</td>
                    <td>10</td>
                    <td>10</td>
                    <td>add</td>
                    <td>edit</td>

                </tr>
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default TeachersDetails