exports.verify=async(req,res,next)=>{
    try{
  
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401).send("Token is empty")
    const producer=jwt.verify(token,process.env.SECRET_KEY)
  
    const producerlogin=ProducerModel.findOne({producername:producer.producername,password:producer.password}).exec()
  
    if(producerlogin){
      return next()
    }
    return res.send("failed to Login")
  
    }
    catch(err){
      return res.status(404).send("failed to authenticate")
    }
  
  
  }