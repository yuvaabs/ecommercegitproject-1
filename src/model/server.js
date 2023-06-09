const mongoose = require('mongoose');
const productSchema=require('./productsch')
require('dotenv').config();

const dburl=process.env.DB_URL;

mongoose
.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.log('DB connection error:', err);
  });

console.log("hi")
  const ProductModel = mongoose.model('productcollection', productSchema);

  module.exports=ProductModel;
//hi iam yuva
  //hi