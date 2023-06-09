const express = require('express');
const router = express.Router();
const userController = require('../controller/auth/usercontroller');

// Get all pending products
router.get('/buyproduct/:productname', userController.buyproduct);










module.exports = router;