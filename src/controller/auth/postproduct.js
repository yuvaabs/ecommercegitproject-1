const ProductModel=require('../../model/server')

postproduct=(req, res) => {
    const { productname, price } = req.body;
    const data = new ProductModel({
      productname: productname,
      price: price,
      status:'pending'
    });
    
    data.save().then((value) => {
        res.send(value);
      })
      .catch(() => {
        res.send('An error occurred');
      });
  }
  module.exports=postproduct