
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  producerID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'producercollection'
  },
  status: {
    type: String,
    required: true
  }
});
  

  module.exports=productSchema