const db = require('../../model/server');
const ProductModel=db.ProductModel;
const ProducerModel=db.producertModel

seeproduct=async (req, res) => {
  try{
    const products = await ProductModel.find({status:{$nin:['approved','sold']}}).populate('producerID').exec();
    return res.send(products)

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

        //
        
      
    }
    catch(err){
      
      return res.send('An error occurred');
    }
    
  }
  module.exports=seeproduct;
  

  