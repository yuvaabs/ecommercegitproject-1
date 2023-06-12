const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const productSchema=require('./productsch')
const adminSchema=require('./adminProduct')
const userSchema=require('./usermodel')
const producerSchema=require('./producersch')



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
  const producertModel = mongoose.model('producercollection', producerSchema);

  const ProductModel = mongoose.model('productcollection', productSchema);
  const AdminModel = mongoose.model('admincollection', adminSchema);
  const UserModel = mongoose.model('usercollection', userSchema);



  module.exports={ProductModel,producertModel,AdminModel,UserModel,ObjectId};
