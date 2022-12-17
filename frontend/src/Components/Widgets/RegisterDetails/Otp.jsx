import React from "react";
import Logo from "../images/ashokStambh.png";

export const Otp = () => {
  return (
    <div className="flex flex-col bg-white p-5 rounded-2xl shadow-lg ">
      <div className="Card flex flex-col left-5">
        <div className="flex w-full justify-center  items-center">
          <img className="w-10 p-1" src={Logo} />
          <b className="ml-7">OTP Verification</b>
        </div>
        <form className="space-y-4 p-3" action="#">
          <div>
            <input
              type="text"
              name="otp"
              disabled={true}
              id="otp"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Enter OTP"
              required="true"
            />
          </div>
          <button
            type="submit"
            disabled={true}
            className="flex w-full gap-2 justify-center transition-all delay-150 text-blue-700 bg-blue-100 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <p className="">Verify</p>
          </button>
        </form>
      </div>
    </div>
  );
};
