exports.userverify=async(req,res,next)=>{
    try{
  
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401).send("Token is empty")
    const user=jwt.verify(token,process.env.SECRET_KEY)
  
    const userlogin=UdModel.findOne({username:user.producername,password:user.password}).exec()
  
    if(userlogin){
      return next()
    }
    return res.send("failed to Login")
  
    }
    catch(err){
      return res.status(404).send("failed to authenticate")
    }
  
  
  }
  