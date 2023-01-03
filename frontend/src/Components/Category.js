import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Category() {
    useEffect(()=>{
        AOS.init({duration:500});
     },[])
    return (
        <div>
            <section className="py-6 dark:bg-gray-800 relative max-[500px]:left-12">
                <h1 className=" font-bold text-5xl pb-10" data-aos="fade-left">Dive into Immersive Experience from India</h1>
                <div className="container flex flex-col justify-center p-4 mx-auto" >
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2" >
                        <div data-aos="zoom-out">
                            <a href="/heritage" >
                                <img
                                    className="object-cover w-full cursor-pointer hover:animate-pulse aspect-square h-[40vh] rounded-xl " style={{ boxShadow: "2px 2px 15px black" }}

                                    src={require("../assets/images/heritage.jpg")}
                                    alt=""
                                />
                                <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle">
                                    Heritage
                                </h1>
                            </a>
                        </div>
                        <div data-aos="zoom-out">
                            <a href='/arts' >
                                <img
                                    className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-xl" style={{ boxShadow: "2px 2px 15px black" }}
                                    src={require("../assets/images/culture.jpg")}
                                    alt="" />
                            </a>
                            <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle">
                                Art
                            </h1>
                        </div>
                        {/* <div data-aos="zoom-out">
                            <img
                                className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-xl" style={{ boxShadow: "2px 2px 15px black" }}
                                src={require("../assets/images/culture (2).jpg")}
                                alt=""
                            />
                            <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                                Culture
                            </h1>
                        </div > */}
                        <div data-aos="zoom-out">
                            <a href="infras">
                                <img
                                    className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-xl" style={{ boxShadow: "2px 2px 15px black" }}
                                    src={require("../assets/images/emerging.jpg")}
                                    alt=""
                                />
                                <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                                    Infrastructure
                                </h1>
                            </a>
                        </div>
                        <div data-aos="zoom-out">
                            <a href='/technology'>
                            <img
                                className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-xl" style={{ boxShadow: "2px 2px 15px black" }}
                                src={require("../assets/images/technology.jpg")}
                                alt=""
                            />
                            <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                                Technology
                            </h1>
                            </a>
                        </div>
                        <div data-aos="zoom-out">
                            <img
                                className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-xl" style={{ boxShadow: "2px 2px 15px brown" }}
                                src={require("../assets/images/tourism.jpg")}
                                alt=""
                            />
                            <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                                Tourism
                            </h1>
                        </div>
                        {/* <div data-aos="zoom-out">
                            <img
                                className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-xl" style={{ boxShadow: "2px 2px 15px black" }}
                                src={require("../assets/images/luxury.jpg")}
                                alt=""
                            />
                            <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                                Luxury
                            </h1>
                        </div> */}
                        <div data-aos="zoom-out">
                            <img
                                className="object-cover  cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-xl w-auto" style={{ boxShadow: "2px 2px 15px black" }}
                                src={require("../assets/images/sports.jpg")}
                                alt=""
                            />
                            <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                                Sports
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}





