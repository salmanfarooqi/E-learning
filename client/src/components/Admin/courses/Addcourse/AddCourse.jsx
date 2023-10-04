import React, { useEffect, useState } from 'react'
import "./addCourse.css"
import axios from 'axios'

function AddCourse() {

    const [courseName, setCourseName] = useState('')
    const [courseAuthor, setCourseAuthor] = useState('')
    const [coursecontent, setCourseContent] = useState('')
    const [courseDescription, setCourseDescription] = useState('')
    const [courseCategry, setCourseCategry] = useState('')
    
 useEffect(()=>{


    let getData=async(req,res)


 },[])

    const postdata = (e) => {
        const name = "khan";
        console.log(name);
        let dataToPost={

            courseName:courseName,
            courseAuthor:courseAuthor,
            courseCategry:courseCategry,
            courseDescription:courseDescription,
           
            
        }

        axios.post("http://localhost:3001/addcourse", dataToPost, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log('Server Response:', response.data);
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    }



    return (
        <div className="addcourse-wrapper">
            <div className="addcourse-forms">
                <label>Enter course name</label>
                <input type='text' placeholder='enter name'
                    onChange={(e) => setCourseName(e.target.value)}></input>

                <label>enter course categry</label>
                <input type='text'

                    placeholder='enter categry'

                    value={courseCategry}
                    onChange={(e) => setCourseCategry(e.target.value)}



                ></input>

                <label>enter course description</label>
                <input type='text'
                    placeholder='enter duration'

                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}



                ></input>

                

                <label>select instructor</label>
                <select>
                    <option>select course instructor</option>
                    <option


                        value="john doe"
                        onChange={(e) => setCourseAuthor(e.target.value)}


                    >john doe</option>
                    <option


                        value="robin"
                        onChange={(e) => setCourseAuthor(e.target.value)}


                    >Robin</option>

                </select>
                <label>upload images</label>
                <input type='file' accept='image/*' className='upload-image'></input>

                <button onClick={postdata}>add course</button>

            </div>
        </div>
    )
}

export default AddCourse