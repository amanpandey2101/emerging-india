const express = require('express');
const { userInfo } = require('../Controller/user');
const router = express.Router();


router.get("/user/:token",userInfo);



module.exports = router;