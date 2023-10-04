import React from 'react'
import Header from './components/Header/Header'
import Carsoule from './components/carsoules/Carsoule'
import Categries from './components/categries/Categries'
// import Carsols from './components/carsoules/Carsoule'
import './components/categries/Categries.css'
import Courses from './components/Courses/Courses'
import './components/Courses/Course.css'
import Works from './components/works/Works'
import Instructor from './components/Instructor/Instructor'
import Footer from './components/Footer/Footer'
import CourseDetail from './components/teachers/CourseDetail'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/contact/Contact'
import Sidebar from './components/Admin/adminSidebar/Sidebar'
import Admin from './pages/Admin/Admin'
import StudentDetail from './components/Admin/studentsDetail/StudentDetail'
import TeachersDetails from './components/Admin/teachersDetails/TeachersDetails'
import AdminCourse from './components/Admin/courses/AdminCourse'
import AddCourse from './components/Admin/courses/Addcourse/AddCourse'
import SignUp from './pages/SignuUp/SignUp'
import Login from './pages/login/Login'
import Addteacher from './components/Admin/Dashboard/teachers/Addteacher'

function RouterComponent() {
  return (
    <div>
     
      <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path='Home' element={<Home/>}/>
        
        <Route path='' element={<Home/>}/>
        <Route path='contact' element={<Contact/>} /> 
        <Route path='coursedetail' element={<CourseDetail/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='login' element={<Login/>} />


        {/* admin routes  */}

        <Route path='admin' element={<Admin/>} />
        <Route path="/students" element={<StudentDetail/>} />
        <Route path="/teachers" element={<TeachersDetails/>} />
        <Route path='/courses' element={<AdminCourse/>} />
        <Route path='/addcourse' element={<AddCourse/>} />
        <Route path='/addteacher' element={<Addteacher/>} />

      </Routes>
      </BrowserRouter>

      

{/* <Footer/> */}
       
        
    </div>
  )
}

export default RouterComponent