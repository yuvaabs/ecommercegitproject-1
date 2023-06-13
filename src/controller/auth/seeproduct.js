const db = require('../../model/server');
const ProductModel=db.ProductModel;

seeproduct=async (req, res) => {
  try{
    const data=await ProductModel.find({ status: { $ne: 'sold' } },{__v:0})
    var pipeline=[{ $lookup:
      {
         from: "producercollections",
         localField: "producerID",
         foreignField: "_id",
         as: "Producer"
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
  

  