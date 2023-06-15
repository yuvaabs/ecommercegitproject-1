const db = require('../../model/server');
const AdminModel=db.AdminModel;
const ProductModel=db.ProductModel;
const UserModel=db.UserModel;
const UdModel=db.UdModel
const ObjectId=db.ObjectId;


exports.adduser=async(req,res)=>{
  try{
    const {username,age,address}=req.body
    const data = new UdModel({
      username,
      age,
      address

    })
    const val=await data.save()
    return res.send(val)


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
    const products = await UserModel.find({}).populate('userid').select('-__v').exec();
    return res.send(products)
  }
  catch(err){
    return res.status(500).json({ error: 'Failed to buy product' });
  }

}
  