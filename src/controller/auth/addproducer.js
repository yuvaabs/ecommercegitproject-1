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
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: 'Error saving the product' });
  }
};
exports.getproducers = async (req, res) => {
    try {
      const producer= await ProducerModel.find({});
      res.json(producer);
    } catch (error) {
      res.status(500).json({ error: 'Error seeind producers' });
    }
  };
