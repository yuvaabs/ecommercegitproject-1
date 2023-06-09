require('dotenv').config()
const db = require('../../model/server');
const AdminModel=db.AdminModel;
const ProductModel=db.ProductModel;
const UserModel=db.UserModel;
const UdModel=db.UdModel
const ObjectId=db.ObjectId;
const jwt = require('jsonwebtoken')
const {encryptPassword,decryptPassword}=require('./encryptdcrypt')



exports.adduser=async(req,res)=>{
  try{
    const {username,password,age,address}=req.body
    const hashedPassword=encryptPassword(password)
    const data = new UdModel({
      username:username,
      password:hashedPassword,
      age:age,
      address:address

    })
    const val=await data.save()
    
    console.log(val)
    const producerdetail={_id:val._id,
    role:"user"}
    const accesstoken=jwt.sign(producerdetail, process.env.SECRET_KEY)
     return res.json({Inserted_Detail:val,
    Access_Token:accesstoken});


  }
  catch(err){
    return res.status(404).send("failed to add user")
  }
}


exports.buyproduct=async (req, res) => {

    try{
    const productname = req.body.productname;
    const userid = req.body.userid;
    
  
    
    await ProductModel.findOneAndUpdate(
        {productname:productname},
        { $set: { status: 'sold' } },
        { new: true }
      )
      const userProduct = await AdminModel.findOneAndUpdate({productname:productname},
        { $set: { status: 'sold' } },
        { new: true }
      );
      const data = new UserModel({
        productname:userProduct.productname,
        price:userProduct.price,
        status: 'sold',
        userid:new ObjectId(userid)
      });
      
      const savedProduct = await data.save();
      return res.json({ message: 'Product sold successfully' });
      
    }
    catch(err){
      
      
      return res.status(500).json({ error: 'Failed to buy product' });
    
    }
  }
exports.buyedproduct=async (req,res)=>{
    
  try{
    const products = await UserModel.find({}).populate('userid').exec();
    return res.send(products)
  }
  catch(err){
    return res.status(500).json({ error: 'Failed to buy product' });
  }

}
  