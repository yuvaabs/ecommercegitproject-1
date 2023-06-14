const express = require('express');
const router = express.Router();
const userController = require('../controller/auth/usercontroller');


router.post('/adduser', userController.adduser);


router.post('/buyproduct', userController.buyproduct);










module.exports = router;