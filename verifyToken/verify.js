const jwt= require("jsonwebtoken")
const auth= (req, res, next)=>{
const token= req.header('authToken')
if(!token){
    return res.status(401).send("access denied")
}
try{
const verified=jwt.verify(token, process.env.SECRET)

req.user=verified
next()

}
catch(error){
res.status(400).send("Invalid token")
}




}
module.exports= auth