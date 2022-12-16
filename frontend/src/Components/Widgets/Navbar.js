import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import { useEffect } from "react";
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';


export default function Navbar() {
  const [mobile,setMobile] = useState(false)
  const [scroll,setScroll] = useState(false)
  const handleClick = () => {
      setMobile(mobile ? false : true)
  }
  window.addEventListener('scroll', ()=>{window.scrollY >=80 ? setScroll(true) :setScroll(false) } )
  useEffect(() => {
    document.title = "Emerging India"

    return () => {

    }
  }, [])
  return (

    <>


      <div className={ scroll ? "navbar-scrolled  p-3 transition-all  z-10 delay-50" : "navbar z-10 transition-all delay-50" }>
        <div className="navbar-first">
          <img
            src="https://freepngimg.com/thumb/india/3-2-india-flag-free-download-png.png"
            alt="" />
          <h1 className="text-black">Emerging India</h1>
        </div>
        <div className={ mobile ? "navbar-second-visible " :"navbar-second pr-7"}>
          <ul className="nav-list text-black">
            {/* <li className="nav-mem relative group cursor-pointer">
            <i className="fa-solid fa-envelope"></i>
              <Link to="/fir">
                Lodge an FIR
              </Link>
            </li> */}
            <li className="nav-mem relative group cursor-pointer">
              <i className="fa-solid fa-house"></i>
              <Link to="/home">
                Home
              </Link>
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
          
          <Menu as="div" className=" dropdown-options relative inline-block text-center pl-4 pr-6 pt-2">
            <div>
              <Menu.Button className="flex w-full justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 sticky ">
                Options
                <ChevronDownIcon className="mr-1 ml-2 h-5 w-5"  />
              </Menu.Button>
            </div>

              {/* <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              > */}
              <Menu.Items className=" absolute pl-6 right-0 z-10 mt-2 top-14 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        className={Navbar(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <form>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={Navbar(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>
                  </form>
                  <form>
                    <Menu.Item>
                      {({ active }) => (
                        <a href="/"
                          className={Navbar(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>
                  </form>
                  <form method="POST" action="/">

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={Navbar(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            {/* </Transition> */}
          </Menu>
          <div className="dropdown dropdown-end profile-icon pt-2">
            <label tabIndex={0} className="">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" />
            </label>
            <ul tabIndex={0} className="dropdown-content menu shadow rounded-box w-52 relative z-10 ">
              <li className="register">
                <Link to={"/signin"}>Log In</Link>
              </li>
              <li className="register">
                <Link to='/register'>Register</Link>
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


