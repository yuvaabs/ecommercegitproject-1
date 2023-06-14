
const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = {
    productname: {
      type:String,
      required: true} ,
    price: {
      type:Number,
      required: true} ,
    producerID:{
      type: mongoose.Schema.Types.ObjectId,
      required: true
  },
    status:{
      type:String,
      required: true} 
  };
  

  module.exports=productSchema