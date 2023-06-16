exports.approveadmin=async (req,res,next)=>{
    try{
      const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401).send("Token is empty")
    const admin=jwt.verify(token,process.env.SECRET_KEY)
    console.log(admin)
    console.log(post)
  
  
    if(post.adminname==admin.adminname && post.password==admin.password){
        req.body=admin;
      return next()
    }
    return res.send("failed to login")
    }
    catch(err){
       return res.send("failed to authenticate")
    }
  }