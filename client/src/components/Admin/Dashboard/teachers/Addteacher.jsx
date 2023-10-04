import React, { useEffect, useState } from 'react'
// import "../addCourse.css"
import axios from 'axios'

function Addteacher() {

    const [courseInstructor, setcourseInstructor] = useState('')
    const [Qualification, setQualification] = useState('')

    const [aboutInstructor, setaboutInstructor] = useState('')

    // const [course]


    const postdata = (e) => {
        const name = "khan";
        console.log(name);
        let dataToPost = {

            courseInstructor: courseInstructor,
            Qualification: Qualification,

            aboutInstructor: aboutInstructor,


        }

        axios.post("http://localhost:3001/addteacher", dataToPost, {
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
                <label>Enter instructor name</label>
                <input type='text' placeholder='enter name'
                    onChange={(e) => setcourseInstructor(e.target.value)}></input>









                <label>enter instructor Qualification</label>
                <input type='text'
                    placeholder='about instuctor'

                    value={Qualification}
                    onChange={(e) => setQualification(e.target.value)}



                ></input>

                <label>upload images</label>
                <input type='file' accept='image/*' className='upload-image'></input>

                <label>about instructor</label>

                <textarea


                    value={aboutInstructor}
                    onChange={(e) => setaboutInstructor(e.target.value)}




                ></textarea>





                <button onClick={postdata}>add teacher</button>

            </div>
        </div>
    )
}

export default Addteacher