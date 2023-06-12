const express = require('express');
const router = express.Router();
const userController = require('../controller/auth/usercontroller');

// Get all pending products
router.post('/buyproduct', userController.buyproduct);










module.exports = router;