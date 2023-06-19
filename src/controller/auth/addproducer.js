require('dotenv').config()
const db = require('../../model/server');
const ProducerModel=db.producertModel;
const jwt = require('jsonwebtoken')
const {encryptPassword,decryptPassword}=require('./encryptdcrypt')






exports.addproducer = async (req, res) => {

  try {
  const { producername,password, address } = req.body;

  console.log(password)
  const hashedPassword=encryptPassword(password)

    // Simulate password comparison
    console.log(hashedPassword)
      
  
  
    
    const data = new ProducerModel({
      producername:producername,
      password:hashedPassword,
      address:address
    });
    console.log(data)
    
    const savedProducer = await data.save();
    console.log(savedProducer)
  
    const producerdetail={producername:producername,
    password:hashedPassword}
    const accesstoken=jwt.sign(producerdetail, process.env.SECRET_KEY)
     return res.json({Inserted_Detail:savedProducer,
    Access_Token:accesstoken});
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Error saving the product' });
  }
};
exports.getproducers = async (req, res) => {
    try {
      const producer= await ProducerModel.find({}).exec();
      return  res.json(producer);
    } catch (error) {
      return res.status(500).json({ error: 'Error seeing producers' });
    }
  };
