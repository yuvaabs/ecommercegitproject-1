const express = require('express');
const router = express.Router();
const admin = require('../middleware/adminapprovemiddleware');

const seeproduct=require('../controller/auth/seeproduct')

router.get('/getproduct',admin.approveadmin,seeproduct);

module.exports=router;

