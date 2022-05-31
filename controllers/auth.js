const User = require("../models/utils")
 const joi= require("@hapi/joi")
 const bcrypt= require("bcryptjs");
 const jwt= require("jsonwebtoken")
 require("dotenv").config()
const {registerSchema,loginSchema}= require("../validation/validation")



const registerUser = async (req, res) => {

    const {error}= registerSchema.validate(req.body)
   
    if(error){
         const {message}=error.details[0]
        return res.status(400).send(message)
    }
    const EmailExists= await User.findOne({email:req.body.email})
    console.log(EmailExists)
    //check if the user already exists
    if(EmailExists){
        return res.status(400).send("the user already exists")
    }
    
    const salt= await bcrypt.genSalt(10)
    const hashPassword= await bcrypt.hash(req.body.password, salt)
    req.body.password= hashPassword


    try {
        const user = await User.create(req.body)

        res.send(user._id)



    }
    catch (error) {
        console.log(error)
    }

}
const loginUser=  async (req, res)=>{
    const {error}= loginSchema.validate(req.body)
   
    if(error){
         const {message}=error.details[0]
        return res.status(400).send(message)
    }
    //check if the user exists
     const user= await User.findOne({email:req.body.email})

    //check if the user already exists
    if(!user){
        return res.status(400).send("Email is  not found!")
    }
    //check if the password matches
    const validPassword= await bcrypt.compare(req.body.password,user.password)
    if(!validPassword){
        return res.status(400).send("invalid PASSWORD")
    }
    //create and assign a token
    const token = jwt.sign({_id:user._id}, process.env.SECRET)
    
  res.header("authToken", token).send(token)
return token

  

}


module.exports = { registerUser, loginUser }