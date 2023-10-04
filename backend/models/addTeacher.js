import mongoose from 'mongoose'


const newinstructorSchema=new mongoose.Schema({

    courseInstructor:{

        type:String,
    },

    Qualification:{
        type:String,
    },
  



   

    aboutInstructor:{

        type:String,
    },

  

})

const newinstructor=mongoose.model("newinstructor",newinstructorSchema)
export default newinstructor;