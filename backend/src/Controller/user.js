const User = require("../Models/user");
const jwt = require('jsonwebtoken');


exports.userInfo = (req,res)=>{
        const {token} = req.params;
        const email = jwt.verify(token,process.env.JWT_SECRET);
        
        User.findOne({ email: email.email }).exec((error, user) => {
            if (error) {
              res.status(400).json({ message: "Error occurred While Logging in" });
              console.log(`First${error}`);
            }
            if (user) {
                const { _id, firstName, lastName, email, role, fullName } = user;
                console.log(user);
                res.status(200).json({
                  user
                });
            } else{
              return res 
              .status(400)
              .json({message:"User Not Registered"})
            }
          });  
}
// exports.userInfo = async (req,res)=>{
//     const { token } = req.params;
//     try {
//       if (token) {
//         // token verify
//         const secretKey = process.env.JWT_SECRET;
//         const isEmailVerified = await jwt.verify(token, secretKey);
//         if (isEmailVerified) {
//           const getUser = await authModel.findOne({
//             email: isEmailVerified.email,
//           });

//           const saveEmail = await authModel.findByIdAndUpdate(getUser._id, {
//             $set: {
//               isVerified: true,
//             },
//           });

//           if (saveEmail) {
//             return res
//               .status(200)
//               .json({ message: "Email Verification Success" });
//           }

//           //
//         } else {
//           return res.status(400).json({ message: "Link Expired" });
//         }
//       } else {
//         return res.status(400).json({ message: "Invalid URL" });
//       }
//     } catch (error) {
//       return res.status(400).json({ message: error.message });
//     }
//   };