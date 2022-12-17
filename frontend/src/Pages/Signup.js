import React from "react";
import RegSlider from "../Components/RegSlider";
import './Signup.css'
import { RegisterDetails } from "../Components/Widgets/RegisterDetails/RegisterDetails";
import { useState } from "react";
import { Otp } from "../Components/Widgets/RegisterDetails/Otp";
import { StepProgressBar } from "../Components/Widgets/StepProgressBar/StepProgressBar";
import { RegInfo } from "../Components/Widgets/RegisterDetails/RegInfo";


export default function Signup() {
  const [index, setIndex] = useState(1);
    const [otpSent,setOtpSent] = useState(false)
    const sendOtp = ()=>{
        setOtpSent(true);
        next();
    }
    const next = ()=>{
        setIndex(index+1)
    }
  return (
    <div className="Register-Page">
      <div className="first-p">
        <div className={ otpSent? "flex first-div-hidden": "flex first-div items-stretch" }>
            <RegisterDetails sendOTP={sendOtp} />
        </div>
        <div className={otpSent?"flex second-div": "flex second-div-hidden"}>
                <Otp/>
        </div>
      </div>
      <div className="second-p ">
        <StepProgressBar step = {index} />
        <RegInfo index={index}/>
      </div>
    </div>
  );
}
