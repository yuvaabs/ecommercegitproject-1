require('dotenv').config()
const db = require('../model/server');
const AdminModel=db.AdminModel;
const ProductModel=db.ProductModel;
const AdmindetailModel=db.AdmindetailModel;
const ProducerModel=db.producertModel;
const UdModel=db.UdModel;
const jwt = require('jsonwebtoken')
exports.userverify=async(req,res,next)=>{
    try{
  
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401).send("Token is empty")
    const user=jwt.verify(token,process.env.SECRET_KEY)
  
    const userlogin=UdModel.findOne({username:user.username,password:user.password}).exec()
  
    if(userlogin){
        
      return next()
    }
    return res.send("failed to Login")
  
    }
    catch(err){
      return res.status(404).send("failed to authenticate")
    }
  
  
  }
  