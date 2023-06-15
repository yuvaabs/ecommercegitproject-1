const express = require('express');
const router = express.Router();
const producer = require('../controller/auth/addproducer');

// Get all pending products
router.post('/addproducer', producer.addproducer);

router.get('/seeproducer', producer.getproducers);







module.exports = router;

