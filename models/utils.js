const mongoose= require("mongoose")
const userSchema= mongoose.Schema(

    {

        name:{
            type:String,
            required:true,
            max:255,
            min:[6, "must be atleast 6 characters wrong"]
        },
        email:{
            type:String,
            required:true,
            max:255,
            min:[6, "must be atleast 6 characters long"]
        },
        password:{
            type:String,
            required:true,
            max:1000,
            min:[8, "password must be atleast 8 characters long"]
        },
        date:{
           
            type:Date,
            required:true,
            default:Date.now()
        }
    }
)

module.exports= mongoose.model("User", userSchema)