const joi= require("@hapi/joi")

const registerSchema=  joi.object(  {
    name:joi.string().min(6).required(),
    email:joi.string().min(6).required().email(),
    password:joi.string().min(6).required()
})

const loginSchema=  joi.object(  {
   
    email:joi.string().min(6).required().email(),
    password:joi.string().min(6).required()
})
module.exports={registerSchema, loginSchema}