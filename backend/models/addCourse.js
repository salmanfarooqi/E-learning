import mongoose from 'mongoose'


const newcourseSchema=new mongoose.Schema({

    courseName:{

        type:String,
    },

    courseAuthor:{
        type:String,
    },
    courseCategry:{

        type:String,
    },
    courseDescription:{

        type:String,
    }
})

const newCourse=mongoose.model("newCourse",newcourseSchema)
export default newCourse;