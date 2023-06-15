const db = require('../../model/server');
const ProducerModel=db.producertModel;

exports.addproducer = async (req, res) => {
  const { producername, address } = req.body;
  
  try {
    const data = new ProducerModel({
      producername,
      address
    });
    
    const savedProduct = await data.save();
     return res.json(savedProduct);
  } catch (err) {
    return res.status(500).json({ error: 'Error saving the product' });
  }
};
exports.getproducers = async (req, res) => {
    try {
      const producer= await ProducerModel.find({}).exec();
      return  res.json(producer);
    } catch (error) {
      return res.status(500).json({ error: 'Error seeind producers' });
    }
  };
