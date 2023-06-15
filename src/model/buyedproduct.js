const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    productname: {
      type:String,
      required: true} ,
    price: {
      type:Number} ,
    status:{
      type:String} ,
    userid:{
      type: Schema.Types.ObjectId,
    required: true,
    ref: 'users'
    },
      date:{type:Date,
      default:()=>Date.now()
    }
  },
  { 
    versionKey: false 
  }
  );

  module.exports=userSchema