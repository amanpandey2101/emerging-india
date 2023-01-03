const express  = require('express');
const { signup, signin } = require('../Controller/auth');
const User = require('../Models/user');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../Validator/auth');

const router = express.Router();


router.post("/validatesignup",validateSignupRequest,isRequestValidated,(req,res)=>{
    res.status(201).json({code:1,message:"Validated"})
});
router.post("/signup",signup)
router.post("/signin",validateSigninRequest,isRequestValidated,signin);


module.exports = router;