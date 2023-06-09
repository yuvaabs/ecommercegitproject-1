const express = require('express');
const router = express.Router();

const postproduct=require('../controller/auth/postproduct')

router.post('/postproduct',postproduct);

module.exports=router;