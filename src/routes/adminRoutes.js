const express = require('express');
const router = express.Router();
const adminController = require('../controller/auth/adminController');

// Get all pending products
router.get('/products/approve', adminController.getPendingProducts);




router.post('/approveproduct', adminController.approve);



module.exports = router;