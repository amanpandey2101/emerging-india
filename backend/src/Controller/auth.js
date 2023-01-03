const User = require("../Models/user");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      res.status(201).json({ message: "User Already Exist",
    code:0 });
      
    } else{
    const { firstName, lastName, email, password, contactNumber } = req.body;
    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      contactNumber,
      userName: Math.random().toString(),
    });
    _user.save((error, data) => {
      if (error) {
        console.log(error);
        res.status(400).json({ error });
        
      }
      if (data) {
        res.status(201).json({ message:"User Registered Successfully",code:1 });
        console.log(data);
      }
    });
  }
  });

};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error)
      res.status(400).json({ message: "Error occurred While Logging in" });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign(
          {
            _id: user._id,
            role: user.role,
            fullName: `${user.firstName} ${user.lastName}`,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            firstName,
            lastName,
            email,
            role,
            fullName,
          },
        });
      } else {
        return res
          .status(400)
          .json({ message: "Username or Password Incorrect" });
      }
    }
  });
};
