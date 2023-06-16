const express = require('express');
const router = express.Router();
const userController = require('../controller/auth/usercontroller');
const {userverify}= require('../middleware/userverifymiddleware');



router.post('/adduser', userController.adduser);


router.post('/buyproduct', userverify,userController.buyproduct);

router.get('/seebuyedproduct', userController.buyedproduct);











module.exports = router;