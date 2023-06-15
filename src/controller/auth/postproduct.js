require('dotenv').config()
const db = require('../../model/server');
const ProductModel=db.ProductModel;
const ProducerModel=db.producertModel
const ObjectId=db.ObjectId
const jwt = require('jsonwebtoken')


exports.verify=async(req,res,next)=>{
  try{

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401).send("Token is empty")
  const producer=jwt.verify(token,process.env.SECRET_KEY)

  const producerlogin=ProducerModel.findOne({producername:producer.producername,password:producer.password}).exec()

  if(producerlogin){
    return next()
  }
  return res.send("failed to Login")

  }
  catch(err){
    return res.status(404).send("failed to authenticate")
  }


}

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




