const express = require('express');
const router = express.Router();

const product=require('../controller/auth/postproduct')


//router.get('/postproduct',product.postProduct);

router.post('/verify_and_addproduct',product.verify,product.postProduct);

module.exports=router;