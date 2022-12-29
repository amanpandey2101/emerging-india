import React, { useState } from "react";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import axios from "axios";
import app from "../firebase_config";
import { StepProgressBar } from "./Widgets/StepProgressBar/StepProgressBar";
import "../Components/Widgets/StepProgressBar/StepProgressBar.css";

export default function Login2({
  sendOTP,
  setFname,
  setLname,
  setPassword,
  setPnumber,
  setEmail,
  firstName,
  lastName,
  contactNumber,
  email,
  password,
}) {
  const auth = getAuth(app);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading , setIsLoading] = useState(false);
  function submit ()  {
   
  };
  
  const onCaptchaVerify = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          onSignUpSubmit();
          
          
        },
      },
      auth
    );
  };
  
  const onSignUpSubmit =()=> {
    onCaptchaVerify();
    const phoneNumber = `+91${contactNumber}`;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("OTP Sent");
        sendOTP();
      })
      .catch((error) => {
        if (error) {
        }
      });
  }


  return (
    <div className="flex">
      <div className="mainbox">
        <input type="checkbox" id="abc" aria-hidden="true" />
        <div className="signup">
        <div
              id="sign-in-button"
              
            ></div>
          <form>
            <label
              className="text-sm subpixel-antialiased"
              htmlFor="abc"
              aria-hidden="true"
            >
              Sign up
            </label>
            <input
              type="text"
              name="firstname"
              onChange={(e) => {
                setFname(e.target.value);
              }}
              placeholder="First Name"
              require=""
            />
            <input
              type="text"
              name="lastname"
              onChange={(e) => {
                setLname(e.target.value);
              }}
              placeholder="Last Name"
              require=""
            />
            <input
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="E-mail"
              require=""
            />
            <input
              type="number"
              name="number"
              onChange={(e) => {
                setPnumber(e.target.value);
              }}
              placeholder="Mobile Number"
              require=""
            />
            <input
              type="Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              require=""
            />
            <input
              type="Password"
              name="cpassword"
              id="confirm-password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder="Confirm Password"
              require=""
            />
          </form>
          <button
            
            onClick={() => {
              const user = {
                firstName: firstName,
                lastName: lastName,
                contactNumber: contactNumber,
                email: email,
                password: password,
              };
              const api = axios.create({
                baseURL: `http://localhost:3000/api/validatesignup`,
              });
          
              if (password != confirmPassword) {
                alert(`Passwords Doesn't Match`);
              } else if (firstName == "") {
                alert("First Name Is Required");
              } else if (lastName == "") {
                alert("Last Name Is Required");
              } else if (email == "") {
                alert("Enter a Valid Email");
              } else if (contactNumber == "") {
                alert("Enter a Valid Contact Number");
              } else if (password == "") {
                alert(`Passwords Should Not Be Empty`);
              } else {
                api.post("", user).then((res) => {
                  console.log(res.data.error);
                  if (res.data.code == 0) {
                    alert(res.data.error);
                  } else {
                    console.log(res.data.code);
                    setIsLoading(true);
                    onSignUpSubmit();
                  }
                });
              }}}
            className="sign-in-button flex w-full gap-2 justify-center transition-all delay-150 text-blue-700 bg-blue-100 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <svg
              aria-hidden="true"
              class={
                isLoading
                  ? "mr-5 w-8 h-5  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  : "hidden"
              }
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <p className="">Register</p>
          </button>
        </div>
        <div className="login2">
          <label htmlFor="abc" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="E-mail" require="" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            require=""
          />
          <button 
          >Login</button>
        </div>
      </div>
    </div>
  );
}
