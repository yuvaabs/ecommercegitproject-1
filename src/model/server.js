const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const productSchema=require('./productsch')
const adminSchema=require('./adminProduct')
const userSchema=require('./buyedproduct')
const providerSchema=require('./producersch')
const userdetailSchema=require('./userdetail')


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
  const producertModel = mongoose.model('producercollection', providerSchema);

  const ProductModel = mongoose.model('productcollection', productSchema);
  const AdminModel = mongoose.model('admincollection', adminSchema);
  const UserModel = mongoose.model('usercollection', userSchema);
  const UdModel = mongoose.model('users', userdetailSchema);




  module.exports={ProductModel,producertModel,AdminModel,UserModel,UdModel,ObjectId};
