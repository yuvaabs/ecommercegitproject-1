const userSchema = {
    productname: {
      type:String,
      required: true} ,
    price: {
      type:Number,
      required: true} ,
    status:{
      type:String,
      required: true} ,
    user:{
      type:String,
      required: true
    },
      date:{type:Date,
      default:()=>Date.now()
    }
  };

  module.exports=userSchema