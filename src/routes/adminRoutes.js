const express = require('express');
const router = express.Router();
const adminController = require('../controller/auth/adminController');
const {approveadmin}=require('../middleware/adminapprovemiddleware')

// Get all pending products
router.post('/admin_login', adminController.adminverfy);

router.get('/products/approve',approveadmin, adminController.getPendingProducts);




router.post('/approveproduct',approveadmin, adminController.approve);



module.exports = router;
