const express = require('express');
const { requireSignin, userMiddleware } = require('../Common-Middlewares');
const { logFir } = require('../Controller/fir');
const router = express.Router();


router.post("/fir/log",requireSignin,userMiddleware,logFir);



module.exports = router;z