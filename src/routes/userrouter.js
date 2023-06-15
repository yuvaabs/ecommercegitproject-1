const express = require('express');
const router = express.Router();
const userController = require('../controller/auth/usercontroller');


router.post('/adduser', userController.adduser);


router.post('/buyproduct', userController.userverify,userController.buyproduct);

router.get('/seebuyedproduct', userController.buyedproduct);











module.exports = router;