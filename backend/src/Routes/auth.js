const express  = require('express');
const { signup, signin } = require('../Controller/auth');
const User = require('../Models/user');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../Validator/auth');

const router = express.Router();

router.post("/signup",validateSignupRequest,isRequestValidated,signup
)
router.post("/signin",validateSigninRequest,isRequestValidated,signin);


module.exports = router;