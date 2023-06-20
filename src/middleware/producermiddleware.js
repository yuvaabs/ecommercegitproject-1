require('dotenv').config()
const db = require('../model/server');
const AdminModel=db.AdminModel;
const ProductModel=db.ProductModel;
const AdmindetailModel=db.AdmindetailModel;
const ProducerModel=db.producertModel;
const jwt = require('jsonwebtoken')
exports.verify=async(req,res,next)=>{
    try{
  
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401).send("Token is empty")
    const producer=jwt.verify(token,process.env.SECRET_KEY)
  
    const producerlogin= await ProducerModel.findOne({_id:producer._id}).exec()
  
    if(producerlogin){
        
      return next()
    }
    return res.send("failed to Login")
  
    }
    catch(err){
      console.log(err)
      return res.status(404).send("failed to authenticate")
    }
  
  
  }