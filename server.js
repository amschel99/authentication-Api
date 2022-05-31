const express= require("express")
const app=express()
app.use(express.json())
require("dotenv").config()
const router= require("./routes/auth")
const privateRoute= require("./PrivateRoutes/post")
const mongoose= require("mongoose")
mongoose.connect(process.env.MONGO_URI,
 ()=>console.log("connected to the database"))

 //VALIDATION



app.use("/api/users", router)
app.use('/post',privateRoute)


app.listen(8000, ()=>{
    console.log("server running")
} )