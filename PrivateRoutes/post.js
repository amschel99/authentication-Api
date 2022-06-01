const auth= require('../verifyToken/verify')
const express=require("express")


const router=express.Router()

router.get("/",auth,(req, res)=>{
   
  
    res.json(req.user)
})
module.exports= router
