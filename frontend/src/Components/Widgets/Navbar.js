import React from "react";
import { Link, Router } from "react-router-dom";
import { useEffect } from "react";





export default function Navbar() {
  useEffect(() => {
    document.title = "Emerging India"
  
    return () => {
      
    }
  }, [])
  return (
    
    <>
      <div className="navbar bg-white">
        <div className="navbar-first">
          <img
            src="https://freepngimg.com/thumb/india/3-2-india-flag-free-download-png.png"
            alt=""
          />
          <h1>Emerging India</h1>
        </div>
        <div className="navbar-second pr-7">
          <ul className="nav-list">
            <li className="nav-mem relative group cursor-pointer">
              <i className="fa-solid fa-house"></i>
              Home
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
          <div id="dropdownDivider" className="dropdown dropdown-end p-2">
            <label tabIndex={0} className="m-3">
              Dropdown
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-white rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Tourism</Link>
              </li>
              <li>
                <a>Education</a>
              </li>
              <li>
                <a>Digital India</a>
              </li>
              <li>
                <a>Politics</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="m-3">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow rounded-box w-52 "
            >
              <li>
                <Link to={"/signin"}>Log In</Link>
              </li>
              <li>
                <a>Register</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
