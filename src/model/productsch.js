
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  productname: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  producerID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'producercollection'
  },
  status: {
    type: String,
    required: true
  }
},
{ 
  versionKey: false 
}
);
  

  module.exports=productSchema