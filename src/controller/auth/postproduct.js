const db = require('../../model/server');
const ProductModel=db.ProductModel;

const postProduct = async (req, res) => {
  const { productname, price } = req.body;
  
  try {
    const data = new ProductModel({
      productname,
      price,
      status: 'pending'
    });
    
    const savedProduct = await data.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: 'Error saving the product' });
  }
};

module.exports = postProduct;
