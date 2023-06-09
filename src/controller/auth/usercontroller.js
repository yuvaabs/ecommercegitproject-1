const db = require('../../model/server');
const AdminModel=db.AdminModel;
const ProductModel=db.ProductModel;
const UserModel=db.UserModel;


exports.buyproduct=async (req, res) => {

    try{
    const productname = req.params.productname;
  
    
    await ProductModel.findOneAndUpdate(
        {productname:productname},
        { $set: { status: 'sold' } },
        { new: true }
      )
      const updatedProduct = await AdminModel.findOneAndUpdate({productname:productname},
        { $set: { status: 'sold' } },
        { new: true }
      );
      const createdAdminDocument = await UserModel.insertMany(updatedProduct);
      console.log('Document inserted into the destination collection:', createdAdminDocument);
    res.json({ message: 'Product sold successfully' });
    }
    catch(err){
      
      
        res.status(500).json({ error: 'Failed to buy product' });
    
    }
  }
  