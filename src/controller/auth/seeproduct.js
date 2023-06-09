const db = require('../../model/server');
const ProductModel=db.ProductModel;

seeproduct=async (req, res) => {
  try{
    const data=await ProductModel.find({ status: { $ne: 'sold' } })
        res.send(data);
      
    }
    catch(err){
      
        res.send('An error occurred');
    }
     
  }
  module.exports=seeproduct;