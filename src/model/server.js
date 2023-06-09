const mongoose = require('mongoose');
const productSchema=require('./productsch')
const adminSchema=require('./adminProduct')
const userSchema=require('./usermodel')


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
  const AdminModel = mongoose.model('admincollection', adminSchema);
  const UserModel = mongoose.model('usercollection', userSchema);



  module.exports={ProductModel,AdminModel,UserModel};
