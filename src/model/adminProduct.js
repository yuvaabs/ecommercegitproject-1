const mongoose = require('mongoose');
const { Schema } = mongoose;
const AdminSchema = new Schema({
  productname: {
    type:String,
    required: true} ,
  price: {
    type:Number,
    required: true} ,
  status:{
    type:String,
    required: true}},
    { 
      versionKey: false 
    }
);





module.exports = AdminSchema;