const User = require("../Models/user");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      res.status(201).json({ message: "User Already Exist", code: 0 });
    } else {
      const { firstName, lastName, email, password, contactNumber } = req.body;
      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        contactNumber,
        userName: Math.random().toString(),
        profileCompleted:0
      });
      _user.save((error, data) => {
        if (error) {
          console.log(error);
          res
            .status(201)
            .json({ message: "Please Contact Administrator", code: 0 });
        }
        if (data) {
          res
            .status(201)
            .json({ message: "User Registered Successfully", code: 1 });
          console.log(data);
        }
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) {
      res.status(400).json({ message: "Error occurred While Logging in" });
      console.log(`First${error}`);
    }
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign(
          {
            _id: user._id,
            role: user.role,
            email: user.email,
            fullName: `${user.firstName} ${user.lastName}`,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        const { _id, firstName, lastName, email, role, fullName } = user;
        console.log(user);
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
        console.log("Incorrect Credentials");
        return res
          .status(400)
          .json({ message: "Incorrect Credentials" });
      }
    } else{
      return res 
      .status(400)
      .json({message:"User Not Registered"})
    }
  });
};



