require('dotenv').config()
const db = require('../../model/server');
const ProductModel=db.ProductModel;
const ProducerModel=db.producertModel
const ObjectId=db.ObjectId
const jwt = require('jsonwebtoken')



exports.postProduct = async (req, res) => {
  const { productname, price,producerID } = req.body;
  
  try {

    const data = new ProductModel({
      productname:productname,
      price:price,
      producerID:new ObjectId(producerID),
      status: 'pending'
    });
    
    const savedProduct = await data.save();
    return res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: 'Error saving the product' });
    return console.log(err)
  }
};

    



