const express = require('express');
const router = express.Router();
const adminController = require('../controller/auth/adminController');
const {approveadmin}=require('../middleware/adminapprovemiddleware')

// Get all pending products


router.get('/products/approve',approveadmin, adminController.getPendingProducts);




router.post('/approveproduct',approveadmin, adminController.approve);
router.post('/addadmin',adminController.addadmin);
router.get('/seeadmin',approveadmin, adminController.getadmin);





module.exports = router;
