const express = require('express');
const router = express.Router();

const product=require('../controller/auth/postproduct')
const {verify}=require('../middleware/producermiddleware')



//router.get('/postproduct',product.postProduct);

router.post('/verify_and_addproduct',verify,product.postProduct);

module.exports=router;