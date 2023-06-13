const db = require('../../model/server');
const AdminModel=db.AdminModel;
const ProductModel=db.ProductModel;
const UserModel=db.UserModel;


exports.buyproduct=async (req, res) => {

    try{
    const productname = req.body.productname;
    const user = req.body.user;
    
  
    
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
        user:user
      });
      
      const savedProduct = await data.save();
      res.json({ message: 'Product sold successfully' });
      
    }
    catch(err){
      
      
        res.status(500).json({ error: 'Failed to buy product' });
    
    }
  }
  