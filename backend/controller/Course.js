import express from 'express'
import newCourse from '../models/addCourse.js';

// const app=express()

export const addCourses = async(req, res) => {
     const {courseName,courseAuthor,courseCategry,courseDescription}=req.body


     await newCourse.create({

        courseName,courseAuthor,courseCategry,courseContent,courseDescription
    })
     console.log(req.body)

    //  res.json(name)
    }

    export const getcourses=async(req,res)=>{

        const getCoursesData=await newCourse.find({})

        res.status(200).json(getCoursesData)


    }


    

    



