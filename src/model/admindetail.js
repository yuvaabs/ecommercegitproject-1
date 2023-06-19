const mongoose = require('mongoose');
const { Schema } = mongoose;

const admindetailSchema = new Schema({
  adminname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},
{ 
  versionKey: false 
}
);

  
  module.exports=admindetailSchema