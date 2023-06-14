const db = require('../../model/server');
const ProductModel=db.ProductModel;
const ProducerModel=db.producertModel

seeproduct=async (req, res) => {
  try{
    const products = await ProductModel.find({}).populate('producerID').select('-__v').exec();
    res.send(products)

  /*  var pipeline=[
      {
        $match: {
          status: "pending"
        }
      },
      { $lookup:
      {
         from: "producercollections",
         localField: "producerID",
         foreignField: "_id",
         as: "Producerdetail"
      }
  }]
        const val=ProductModel.aggregate(pipeline).then(result => {
          res.send(result);
        })
        .catch(error => {
          console.error(error);
        });*/
        
      
    }
    catch(err){
      
        res.send('An error occurred');
    }
    
  }
  module.exports=seeproduct;
  

  