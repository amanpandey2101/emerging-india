const {check,validationResult} = require('express-validator');


exports.validateSignupRequest = [
    check('firstName').notEmpty().withMessage('First Name Is Required'),
    check('lastName').notEmpty().withMessage('Last Name Is Required'),
    check('email').isEmail().withMessage('Valid Email is Required'),
    check('password').isLength({min:6}).withMessage('Password Must Contailn Min. 6 Chars'),
    check('contactNumber').isMobilePhone().withMessage('Enter a valid Phone Number')
];

exports.validateSigninRequest = [
    check('email').isEmail()
    .withMessage(" Vaild Email is required"),
    check('password').isLength({min:6})
    .withMessage("password is required"),
];


exports.isRequestValidated = (req,res,next)=>{
    const error = validationResult(req);
    if(error.array().length > 0){
        return res.status(201).json({code:"0",error:error.array()[0].msg})
    } else next();
}