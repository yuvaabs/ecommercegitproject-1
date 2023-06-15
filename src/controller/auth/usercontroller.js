require('dotenv').config()
const db = require('../../model/server');
const AdminModel=db.AdminModel;
const ProductModel=db.ProductModel;
const UserModel=db.UserModel;
const UdModel=db.UdModel
const ObjectId=db.ObjectId;
const jwt = require('jsonwebtoken')


exports.adduser=async(req,res)=>{
  try{
    const {username,password,age,address}=req.body
    const data = new UdModel({
      username,
      password,
      age,
      address

    })
    const val=await data.save()
    
    console.log(val)
    const producerdetail={username:val.username,
    password:val.password}
    const accesstoken=jwt.sign(producerdetail, process.env.SECRET_KEY)
     return res.json({Inserted_Detail:val,
    Access_Token:accesstoken});


  }
  catch(err){
    return res.status(404).send("failed to add user")
  }
}
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
  