import React from "react";
import { Link } from "react-router-dom";

export const RegInfo = ({ index, response, resCode, pNumber }) => {
  switch (index) {
    case 1:
      return (
        <div className=" stage-1">
          {/* First Step DIV */}
          <ol>
            <li>Enter Required Details In Fields and Click On Send OTP</li>
            <li>Enter OTP Recieved on Your Mobile Phone</li>
            <li></li>
            <li>
              <b>*Don't Enter Duplicate Email</b>
            </li>
          </ol>
        </div>
      );
      break;
    case 2:
      return (
        <div className="flex flex-row mt-9 justify-center">
          <svg
            viewBox="0 0 24 24"
            className="flex justify-center align-center mt-1 mx-3 text-green-600 w-4 h-4 "
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <label htmlFor="phone">{`OTP Successfully Sent on ${pNumber}`}</label>
        </div>
      );
      break;
    case 3:
      return (
        <div class="">
          <div class="p-6  md:mx-auto">
            <svg
              viewBox="0 0 24 24"
              class="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div class="text-center">
              <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Account Created
              </h3>
              <p class="text-gray-600 my-2">
                Thank For Choosing Us. Have A Great Day!
              </p>
              <p> Have a great day! </p>
              <div class="py-10 text-center">
                <Link
                  to="/signin"
                  class=" transition-all delay-100 px-12 bg-indigo-600 hover:bg-indigo-500 hover:rounded-2xl text-white font-semibold py-3"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
      break;
  }
};
