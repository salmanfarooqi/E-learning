import express from 'express'
// import newCourse from '../models/addCourse.js';
import newinstructor from '../models/addTeacher.js';

// const app=express()

export const addInstructor = async(req, res) => {
     const {courseInstructor,aboutInstructor, Qualification}=req.body


     await newinstructor.create({

        courseInstructor,aboutInstructor, Qualification
    })
     console.log(req.body)

    //  res.json(name)
    }

    export const getinstructor=async(req,res)=>{

        const getInstructorData=await newinstructor.find({})

        res.status(200).json(getInstructorData)


    }


    

    



