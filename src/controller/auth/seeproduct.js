const ProductModel=require('../../model/server')

seeproduct=async (req, res) => {
    await ProductModel.find({}).then((data) => {
        res.send(data);
      })
      .catch(() => {
        res.send('An error occurred');
      });
  }
  module.exports=seeproduct;