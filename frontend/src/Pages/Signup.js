import React from "react";
import RegSlider from "../Components/RegSlider";
import "./Signup.css";
import RegisterDetails from "../Components/Widgets/RegisterDetails/RegisterDetails";
import { useState } from "react";
import { Otp } from "../Components/Widgets/RegisterDetails/Otp";
import { StepProgressBar } from "../Components/Widgets/StepProgressBar/StepProgressBar";
import { RegInfo } from "../Components/Widgets/RegisterDetails/RegInfo";
import axios from "axios";

export default function Signup() {
  const [index, setIndex] = useState(1);
  const [vCode, setVCode] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [pNumber, setPnumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  
  const sendOtp = () => {
    setOtpSent(true);
    next();
  };

  const user = {
    firstName: "11121",
    lastName: "121",
    contactNumber: "9507046486",
    email: "anan7272@gmail.com",
    password: "12345678",
  };
  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // const api = axios.create({
  //   baseURL: `http://localhost:3000/api/signup`,
  // });
  // api.post("", user).then((res) => console.log(res));
  const next = () => {
    setIndex(index + 1);
  };
  return (
    <div className="Register-Page">
      <div className="first-p">
        <div
          className={
            otpSent ? "flex first-div-hidden" : "flex first-div items-stretch"
          }
        >
          <RegisterDetails
            sendOTP={sendOtp}
            setFname={setFname}
            setLname={setLname}
            setPnumber={setPnumber}
            setEmail={setEmail}
            setPassword={setPassword}
            password={password}
            firstName={fName}
            lastName={lName}
            contactNumber={pNumber}
            email={email}
          />
        </div>
        <div className={otpSent ? "flex second-div" : "flex second-div-hidden"}>
          <Otp
            setOTP={setVCode}
            otp={vCode}
            fName={fName}
            lName={lName}
            pNumber={pNumber}
            email={email}
            password={password}
          />
        </div>
      </div>
      <div className="second-p ">
        <StepProgressBar step={index} />
        <RegInfo index={index} />
      </div>
    </div>
  );
}
