const mongoose = require('mongoose');
const { Schema } = mongoose;
const userdetailSchema = {
    username: {
      type:String,
      required: true} ,
    age: {
      type:Number,
      required: true} ,
    address:{
      type:String,
      required: true} ,
      login_date:{type:Date,
      default:()=>Date.now()
    }
  };

  module.exports=userdetailSchema