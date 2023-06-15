const mongoose = require('mongoose');
const { Schema } = mongoose;
const userdetailSchema = new Schema({
    username: {
      type:String,
      required: true} ,
      password: {
        type: String,
        required: true
      },
    age: {
      type:Number,
      required: true} ,
    address:{
      type:String,
      required: true} ,
      login_date:{type:Date,
      default:()=>Date.now()
    }
  },
  { 
    versionKey: false 
  });

  module.exports=userdetailSchema