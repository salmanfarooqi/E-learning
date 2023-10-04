import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
// import bodyParser
import cookieParser from 'cookie-parser'
import router from './Router/Course.js'
import { Mongoose } from 'mongoose'
const app=express()

// database connection

mongoose.connect("mongodb+srv://Elearningadmin:elearning1122@atlascluster.p7f1cqy.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{

    console.log("database is connected")
}).catch((Error)=>{
    console.log("err",Error)
})
app.use(express.json());
app.use(cors())
app.use(cookieParser())

app.use(express.urlencoded({extended:false}))
app.use(router)
// app.use(JSON())

// app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3001)
