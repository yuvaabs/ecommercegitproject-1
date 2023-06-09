const express = require('express');
const router = express.Router();

const seeproduct=require('../controller/auth/seeproduct')

router.get('/getproduct',seeproduct);

module.exports=router;