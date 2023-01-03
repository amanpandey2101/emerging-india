import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom'

export default function Technology() {
    useEffect(()=>{
        AOS.init({duration:500})
    },[])
  return (
   <>
  <div className="technology">
    <div className="bubbles">
        <span style={{"--j":11}}></span>
        <span style={{"--j":12}}></span>
        <span style={{"--j":24}}></span>
        <span style={{"--j":10}}></span>
        <span style={{"--j":14}}></span>
        <span style={{"--j":23}}></span>
        <span style={{"--j":18}}></span>
        <span style={{"--j":16}}></span>
        <span style={{"--j":19}}></span>
        <span style={{"--j":20}}></span>
        <span style={{"--j":22}}></span>
        <span style={{"--j":25}}></span>
        <span style={{"--j":18}}></span>
        <span style={{"--j":21}}></span>
        <span style={{"--j":15}}></span>
        <span style={{"--j":13}}></span>
        <span style={{"--j":26}}></span>
        <span style={{"--j":17}}></span>
        <span style={{"--j":13}}></span>
        <span style={{"--j":11}}></span>
        <span style={{"--j":11}}></span>
        <span style={{"--j":12}}></span>
        <span style={{"--j":24}}></span>
        <span style={{"--j":10}}></span>
        <span style={{"--j":14}}></span>
        <span style={{"--j":23}}></span>
        <span style={{"--j":18}}></span>
        <span style={{"--j":16}}></span>
        <span style={{"--j":19}}></span>
        <span style={{"--j":20}}></span>
        <span style={{"--j":22}}></span>
        <span style={{"--j":25}}></span>
        <span style={{"--j":18}}></span>
        <span style={{"--j":21}}></span>
        <span style={{"--j":15}}></span>
        <span style={{"--j":13}}></span>
        <span style={{"--j":26}}></span>
        <span style={{"--j":17}}></span>
        <span style={{"--j":13}}></span>
        <span style={{"--j":11}}></span>



        
    </div>
<section className="py-6 dark:bg-gray-800 relative " data-aos="zoom-in">
                <div className="container flex justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-10 mx-8 lg:grid-cols-2 sm:grid-cols-2">
                        <div>
                            <a href="/web">
                                <img
                                    className=" object-fill w-fit cursor-pointer hover:animate-pulse aspect-square h-[40vh] rounded-xl" style={{ boxShadow: "2px 2px 15px black" }}

                                    src={require("../assets/images/web3.webp")}
                                    alt=""/>
                                                             
                            </a>
                        </div>
                        <div>
                            <a href='/FiveG'>
                                <img
                                    className="object-fill w-fit cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-2xl" style={{ boxShadow: "2px 2px 15px black" }}
                                    src={require("../assets/images/5Gindia.jpg")}
                                    alt="" />
                            </a>
                            
                        </div>
                        {/* <div>
                            <img
                                className="object-cover w-fit cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-2xl" style={{ boxShadow: "2px 2px 15px black" }}
                                src={require("../assets/images/metaverse.jpg")}
                                alt=""
                            />
                            
                        </div> */}
                        {/* <div>
                            <a href="/infras">
                                <img
                                    className="object-cover w-fit cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-2xl" style={{ boxShadow: "2px 2px 15px black" }}
                                    src={require("../assets/images/Edge-computing.jpg")}
                                    alt=""
                                />
                                
                            </a>
                        </div> */}
                        <div>
                            <a href="/cloud">
                                <img
                                    className="object-fill w-fit cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-2xl" style={{ boxShadow: "2px 2px 15px black" }}
                                    src={require("../assets/images/cloud-computing-virtualization.jpeg")}
                                    alt=""/> 
                            </a>
                        </div>
                        <div>
                            <Link to="/ai">
                                <img
                                    className="object-fill w-fit cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-2xl" style={{ boxShadow: "2px 2px 15px black" }}
                                    src={require("../assets/images/ai.jpg")}
                                    alt=""/> 
                            </Link>
                        </div>
                        
                        
                       
                        
                    </div>
                </div>
            </section>
  </div>

<div>
</div>
   </>
  )
}
