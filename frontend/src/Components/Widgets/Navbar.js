import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [scroll, setScroll] = useState(false);
 

  const handleClick = () => {
    setMobile(mobile ? false : true);
  };
  window.addEventListener("scroll", () => {
    window.scrollY >= 80 ? setScroll(true) : setScroll(false);
  });
  useEffect(() => {
    document.title = "Emerging India";

    return () => { };
  }, []);
  return (
    <>
      <div
        className={
          scroll? "  navbar-scrolled p-3  z-30 delay-50" : "  navbar z-30 "
        
        }
      >
        <div className="navbar-first">
          <img
            src="https://freepngimg.com/thumb/india/3-2-india-flag-free-download-png.png"
            alt=""
          />
          <h1 className="text-black">Emerging India</h1>
        </div>
        <div
          className={mobile ? "navbar-second-visible " : "navbar-second pr-7"}
        >
          <ul className="nav-list text-black">
      
            <li className="nav-mem relative group cursor-pointer">
              <i className="fa-solid fa-house"></i>
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-mem relative group cursor-pointer">
              <i className="fa-solid fa-info"></i>
              About
            </li>
            <li className="nav-mem relative group cursor-pointer">
              <i className="fa-brands fa-envira"></i>
              Gallery
            </li>
          </ul>
          <div className="navbarmenu inline-block">
            <i className="fa-solid fa-caret-down relative left-4"></i>
            <button className="menubutton mr-6  p-6">Options</button>
            
          <div className="dropdownmenu z-30 top-16 right-16   p-4 rounded-md ">
           <Link to='/dashboard' className="hover:bg-white rounded-md p-3" >Dashboard</Link>
           <a className="hover:bg-white rounded-md p-3" href="/">About us</a>
           <a className="hover:bg-white rounded-md p-3" href="/">Contact us</a>
           <a className="hover:bg-white rounded-md p-3" href="/">Account settings</a>
          </div>                         
          </div>

            <div className="dropdown dropdown-end profile-icon pt-4">
              <label tabIndex={0} className="">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow rounded-box w-52 relative z-10 "
              >
                <li className="register">
                  <Link to={"/signin"}>Log In</Link>
                </li>
                <li className="register">
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hamburger mr-3">
            <i className="fa-solid fa-bars" onClick={handleClick}></i>
          </div>
        </div>
      </>
      );
}
