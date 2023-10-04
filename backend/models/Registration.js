import mongoose from "mongoose";

let signupSchema=new mongoose.Schema({


    name:{

        type:String,
    },
    email:{

        type:String,
    },
    password:{
        type:String,
    },

})

let newUser=mongoose.model("user",signupSchema)

export default newUser;