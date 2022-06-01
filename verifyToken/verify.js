const jwt= require("jsonwebtoken")
const auth= (req, res, next)=>{
    const authHeader= req.headers.authorization
     if (!authHeader || !authHeader.startsWith('Bearer ')) {
res.status(401).send("access denied")
  }
const token=authHeader.split(' ')[1]

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