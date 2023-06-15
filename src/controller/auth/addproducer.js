require('dotenv').config()
const db = require('../../model/server');
const ProducerModel=db.producertModel;
const jwt = require('jsonwebtoken')

exports.addproducer = async (req, res) => {
  const { producername,password, address } = req.body;
  
  try {
    const data = new ProducerModel({
      producername,
      password,
      address
    });
    console.log(data)
    
    const savedProducer = await data.save();
    console.log(savedProducer)
    const producerdetail={producername:savedProducer.producername,
    password:savedProducer.password}
    const accesstoken=jwt.sign(producerdetail, process.env.SECRET_KEY)
     return res.json({Inserted_Detail:savedProducer,
    Access_Token:accesstoken});
  } catch (err) {
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
