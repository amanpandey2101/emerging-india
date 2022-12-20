import React from 'react'
import { StepProgressBar } from './Widgets/StepProgressBar/StepProgressBar';
import "../Components/Widgets/StepProgressBar/StepProgressBar.css";
export default function Login2() {
  return (
    <>
  
    <div className='flex relative pt-32  ml-20 mr-20 h-[110vh]'>
    <div className='mainbox '>
        <input type="checkbox" id="abc" aria-hidden="true"/>
            <div className="signup">
                <form>
                    <label htmlFor="abc" aria-hidden="true">Sign Up</label>
                    <input type="text" name="firstname" placeholder='First Name' require=""/>
                    <input type="text" name="lastname" placeholder='Last Name' require=""/>
                    <input type="email" name="email" placeholder='E-mail' require=""/>
                    <input type="number" name="number" placeholder='Mobile Number' require=""/>
                    <input type="Password" name="password" placeholder='Password' require=""/>
                    <input type="Password" name="cpassword" placeholder='Confirm Password' require=""/>
                   
                    <button>Sign Up</button>
                
                </form>
            </div>
        <div className='login2'>
        <label htmlFor="abc" aria-hidden="true">Login</label>
            <input type="email" name="email" placeholder='E-mail' require=""/>
            <input type="Password" name="password" placeholder='Password' require=""/>
            <button>Login</button>
        </div>
      
    </div>
    </div>



    <footer class="text-center text-white">
  

  <div class="text-center p-4 text-black" >
    © 2021 Copyright:
    <a class="text-gray-800" href="https://tailwind-elements.com/">Emerging-India</a>
  </div>
</footer>
    {/* <div className='inline-block absolute w-[40%] top-[20rem]'>
    <StepProgressBar/>
    </div> */}


    </>
  )
}
