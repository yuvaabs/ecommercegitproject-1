const db = require('../../model/server');
const ProductModel=db.ProductModel;

seeproduct=async (req, res) => {
  try{
    const data=await ProductModel.find({status: { $eq:"pending" } },{__v:0})
    var pipeline=[
      {
        $match: {
          status: "approved"
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
        });
        
      
    }
    catch(err){
      
        res.send('An error occurred');
    }
    
  }
  module.exports=seeproduct;
  

  