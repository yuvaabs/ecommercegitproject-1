const AdminSchema = {
  productname: {
    type:String,
    required: true} ,
  price: {
    type:Number,
    required: true} ,
  status:{
    type:String,
    required: true} 
};





module.exports = AdminSchema;