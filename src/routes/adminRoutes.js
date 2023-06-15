const express = require('express');
const router = express.Router();
const adminController = require('../controller/auth/adminController');

// Get all pending products
router.post('/admin_login', adminController.adminverfy);

router.get('/products/approve',adminController.approveadmin, adminController.getPendingProducts);




router.post('/approveproduct',adminController.approveadmin, adminController.approve);



module.exports = router;