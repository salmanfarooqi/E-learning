import express from 'express'
import {addCourses, getcourses} from '../controller/Course.js';
// import signuController from '../controller/auth.js';
import { signupController } from '../controller/auth.js';
import { logincontroller } from '../controller/auth.js';
import { addInstructor, getinstructor } from '../controller/addTecher.js';

// const app=express()

const router=express.Router()

router.post("/addcourse",addCourses)
router.get("/",getcourses)
router.post("/signup",signupController)
router.post("/login",logincontroller)
router.get("/coursedetail",getinstructor)

export default router;