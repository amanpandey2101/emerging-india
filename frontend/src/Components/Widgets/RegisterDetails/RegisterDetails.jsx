import React from "react";
import { useState } from "react";
import Logo from "../images/ashokStambh.png";

export const RegisterDetails = ({ sendOTP }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <div className="flex bg-white p-5 rounded-2xl  shadow-md">
      <div className="Card flex flex-col left-5">
        <div className="flex w-full justify-center items-strech align-middle items-center">
          <img className="w-10 p-1" src={Logo} />
          <b className="pl-7">Get Started</b>
        </div>
        <form className="space-y-4 p-3" action="#">
          <div>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="First Name"
              required="true"
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Last Name"
              required="true"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required=""
            />
          </div>
          <div>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              required=""
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 "
                required="true"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                for="terms"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="/"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            onClick={()=>{setIsLoading(true);sendOTP();}}
            className="flex w-full gap-2 justify-center transition-all delay-150 text-blue-700 bg-blue-100 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
            <p className="">

            Create an account
            </p>
          </button>
          <p className="text-sm font-light text-gray-500 ">
            Already have an account?{" "}
            <a href="/" className="font-medium text-blue-700 hover:underline ">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
