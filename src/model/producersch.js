const mongoose = require('mongoose');
const { Schema } = mongoose;

const providerSchema = new Schema({
  producername: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
},
{ 
  versionKey: false 
}
);

  
  module.exports=providerSchema