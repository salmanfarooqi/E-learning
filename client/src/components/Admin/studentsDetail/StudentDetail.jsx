import React from 'react'
import Sidebar from '../adminSidebar/Sidebar'
import './studentDetail.css'

const StudentDetail = () => {
  return (
    <div className="studentDetail-wrapper">
        
    <Sidebar/>
 

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

export default StudentDetail