
const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = {
    productname: String,
    price: Number,
    producerID:Schema.Types.ObjectId,
    status:String
  };
  

  module.exports=productSchema