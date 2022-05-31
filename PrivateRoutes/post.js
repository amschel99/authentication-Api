const auth= require('../verifyToken/verify')
const express=require("express")


const router=express.Router()

router.get("/",auth,(req, res)=>{
   
  
    res.json({gangsterLevel:100})
})
module.exports= router
