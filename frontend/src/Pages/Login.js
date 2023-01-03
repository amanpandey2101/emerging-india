import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from 'axios'
import Logo from "../Components/Widgets/images/ashokStambh.png";
import { async } from "@firebase/util";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [helperText, setHelperText] = React.useState("Please Select");

  const submit = () => {
    if (email == "") {
      alert("Enter Valid Email");
    } else if (password == "") {
      alert("Password Required");
    } else if(value == ""){
      setError(true)
    }
    else {
      setIsLoading(true)
      login();
    }
  };
  const data = {email:email,password:password,type:value};
  const login = async () => {
    try{
      var url = '' ;
      if(value == "user"){
        url = "http://localhost:3000/api/signin";
      } else if(value == "admin"){
        url = 'https://localhost:3000/api/admin/login';
      }
      
     
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.token);
			window.location = "/dashboard";
    } catch (error){
      console.log(error);
      if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				alert(error.response.data.message);
        setIsLoading(false)
			}
    }
  };
  
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  return (
    <>
      <div className=" flex items-stretch stroke-none ">
        <div className="flex flex-col align-center justify-center  py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex flex-row shadow rounded-2xl md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 tranistion-all delay-100 md:space-y-6 bg-white rounded-l-2xl backdrop-blur-lg sm:p-8 w-96">
              <h1 className="text-xl font-mono items-center justify-center flex font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
               <img src={Logo} className="w-10 p-1"/>
               <p className="flex justify-center mx-3">
                Log In
               </p>
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    className="bg-green-100 border-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    className="bg-green-100 border-none text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                    required=""
                  />
                </div>

                <form className="flex flex-start">
                  <FormControl sx={{ m: 0 }} error={error} variant="standard">
                    <RadioGroup
                      row
                      aria-labelledby="demo-error-radios"
                      name="quiz"
                      value={value}
                      onChange={handleRadioChange}
                    >
                      <FormControlLabel
                        value="user"
                        control={<Radio />}
                        label="User"
                      />
                      <FormControlLabel
                        value="admin"
                        control={<Radio />}
                        label="Admin"
                      />
                    </RadioGroup>
                    <FormHelperText className={error ? "transition-all flex delay-100" : "hidden transition-all delay-100"}>
                      <div className='bg-red-200/90 p-2 px-4 flex rounded-xl'>
                          <p className="text-red-600">{helperText}</p>
                      </div>
                      
                    </FormHelperText>
                  </FormControl>
                </form>
                <div className="flex items-center justify-between">
                  <Link
                    to="/"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </form>
              <button
                onClick={submit}
                className="flex justify-center gap-2 w-full text-white bg-primary-600 bg-emerald-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  aria-hidden="true"
                  class={
                    isLoading
                      ? "mr-1 w-5 h-5  text-gray-200 animate-spin dark:text-gray-600 fill-white"
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
                <p>Log In</p>
              </button>
            </div>
            <div className="flex flex-col align-center justify-center px-9 h-auto rounded-r-2xl p-5 bg-green-400">
              <b className="text-white">Don't Have Account</b>
              <button className="cursor-hover mt-5 px-5 py-2 bg-white transition-all delay-100 rounded-2xl hover:tracking-wide">
                <Link
                  to="/register"
                  className="font-medium text-primary-bg dark:text-primary-500"
                >
                  Sign up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
                }
                
        
                

