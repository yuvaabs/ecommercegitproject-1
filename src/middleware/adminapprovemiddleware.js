require('dotenv').config()
const db = require('../model/server');
const AdminModel=db.AdminModel;
const ProductModel=db.ProductModel;
const AdmindetailModel=db.AdmindetailModel;
const ProducerModel=db.producertModel;
const jwt = require('jsonwebtoken')

exports.approveadmin=async (req,res,next)=>{
    try{
      const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401).send("Token is empty")
    const admin=jwt.verify(token,process.env.SECRET_KEY)
    console.log(admin)
    
  
    const adminlogin=await AdmindetailModel.findOne({_id:admin._id}).exec()

    if(adminlogin){
       
      return next()
    }
    return res.send("failed to login")
    }
    catch(err){
      console.log(err)
       return res.send("failed to authenticate")
    }
  }