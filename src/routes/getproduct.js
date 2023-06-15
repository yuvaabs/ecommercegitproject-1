const express = require('express');
const router = express.Router();
const adminController = require('../controller/auth/adminController');

const seeproduct=require('../controller/auth/seeproduct')

router.get('/getproduct',adminController.approveadmin,seeproduct);

module.exports=router;