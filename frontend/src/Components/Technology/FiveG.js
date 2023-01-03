import { React, useState } from 'react'
import "./FiveG.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';


export default function FiveG() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      // } else {
      //   entry.target.classList.remove('show');
      // }
    });
  });



  const hiddenElements = document.querySelectorAll('.animationh');
  hiddenElements.forEach((el) => observer.observe(el));

 useEffect(()=>{
    AOS.init({duration:1500});
 },[])



  return (
    <>
      <div>
        <div>

          <img className=' sm:w-screen sm:h-screen w-full' src={require('./images/halo.jpg')} alt="" />
          <img className='absolute top-16 h-24'  src={require("./images/digitalindia-removebg-preview.png")} alt="" />
        </div>
        <div className='animationh dawn absolute top-44 text-white lg:text-8xl md:text-6xl sm:text-5xl right-0 left-0  '>
          <h1 className='h-60'>DAWN OF NEW ERA</h1>
         <div className='lg:text-5xl h-20 md:text-4xl sm:text-3xl max-[640px]:hidden'>
          <Typewriter 
            words={['Step Into the World Where Everything,']}
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={30}
            deleteSpeed={40}
            delaySpeed={1000}/>
            </div> 
            <div className='text-5xl md:text-4xl sm:text-3xl max-[640px]:hidden'>
          <Typewriter 

            words={["Everyone, and Every place is Connected."]}
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={3000}/> 
            </div>
        </div>
        <div className=' grid grid-cols-4 p-10 bg-white max-[1350px]:grid max-[1300px]:grid-cols-3 max-[1049px]:grid-cols-2 ' >

          <div className="animationh shadow-slate-600 shadow-2xl rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-4 bg-indigo-50 transition duration-400 ease-in-out transform hover:translate-y-5 hover:shadow-2xl " data-aos="zoom-out">
            <a href="/" className="w-full block h-full">
              <img alt="blog" src={require("./images/speed.jpg")} className="h-[13rem] w-full rounded-md" />
              <div className="w-full">

                <p className="text-gray-800 dark:text-white text-2xl font-bold mb-2 pt-2">
                  Increased Speed and Bandwidth
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-light text-md">
                  5G can deliver a 10 to 100 times improvement over the current 4G LTE technology with a data rate of up to 10 Gbps. Because WAN connections finally have enough capacity, cellular is now a feasible solution for branch office automation,advanced web conferencing, etc.consumers who used 5G saved nearly 23 hours per day in the downloading process.
                </p>

              </div>
            </a>
          </div>
          
          <div className="animationh shadow-slate-600 shadow-2xl rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-4 bg-indigo-50 transition duration-400 ease-in-out transform hover:translate-y-5 hover:shadow-2xl" data-aos="zoom-out">
            <a href="/" className="w-full block h-full">
              <img alt="blog" src={require('./images/latency.jpg')} className="h-[13rem] rounded-md w-full object-cover" />
              <div className="w-full">

                <p className="text-gray-800 dark:text-white text-2xl font-bold pt-2 mb-2">
                  5G's Ultra Low Latency
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-light text-md">
                  The other major advantage of 5G for WAN usage is its low latency of about 5 milliseconds. Today, customers mostly use MPLS or dedicated lines for line-of-business applications that require low latency. Due to 5G's low latency, organisations may be able to abandon some of their branch office MPLS infrastructure in favour of the more affordable and adaptable 5G connections to branches.
                </p>

              </div>
            </a>
          </div>
          <div className="animationh overflow-hidden shadow-slate-600 shadow-2xl rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-4 bg-indigo-50 transition duration-400 ease-in-out transform hover:translate-y-5 hover:shadow-2xl" data-aos="zoom-out">
            <a href="/" className="w-full block h-full">
              <img alt="blog" src={require("./images/5Gdensity.jpg")} className="h-[13rem] rounded-md w-full object-cover" />
              <div className="w-full">
                <p className="text-gray-800 dark:text-white text-2xl font-bold mb-2 pt-2">
                  5G Density
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-light text-md">
                  While ensuring 99.999% availability, it enables up to 100 times more connected devices in the same physical space that 4G LTE does today. While this density may aid mobile workforces in terms of business, the true benefit is the growth of the mobile consumer base. In comparison to traditional computer-based e-commerce and retail, mobile e-commerce is expanding more quickly.
                </p>

              </div>
            </a>
          </div>
          <div className="animationh relative align-middle overflow-hidden shadow-slate-600 shadow-2xl rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-4 bg-indigo-50 transition duration-400 ease-in-out transform hover:translate-y-5 hover:shadow-2xl  max-[1049px]:pt-10" data-aos="zoom-out">
            <a href="/" className="w-full block h-full">
              <img alt="blog" src={require("./images/security.jpg")} className="h-[13rem] rounded-md w-full object-cover" />
              <div className="w-full">

                <p className="text-gray-800 dark:text-white text-2xl font-bold pt-2 mb-2">
                  Seurity
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-light text-md">
                  Since IoT devices exist at the periphery of business networks, they are a constant source of concern. For designers, 5G offers more robust security than 4G LTE, including hardware security modules, key management services, over-the-air, secure elements, and other options. This will harden network endpoints and ensure that data carried over the 5G network is secure.
                </p>

              </div>
            </a>
          </div>
        </div>
      </div>





      <div className='flex justify-center bg-white h-44'>
        <img className='block mt-10 mb-10 ' src={require("./images/jio2 (2).png")} alt="" />
      </div>
      <div className='bg-white'>
        <h1 className='font-bold text-6xl font-sans bg-white  pt-10 ' data-aos="fade-right">REIMAGINE THE WAY</h1>
        <h1 className='font-bold text-6xl font-sans bg-white pb-16 pt-16' data-aos="fade-left">YOU WORK, LIVE, AND CHILL</h1>

      </div>
      <div className='play-button grid sm:grid-cols-4 grid-cols-2 p-10 bg-[#0F3CC9]'>

        <div className="animationh overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-2 bg-white backdrop-blur-4xl transition duration-400 ease-in-out transform hover:translate-y-5 hover:shadow-3xl" data-aos="zoom-in">
          <a href="/" className="w-full block h-full" >

            <img alt="blog" src={require("./images/video.png")} className="h-[13rem] w-full rounded-md" />

            <div className="w-full">
              <p className="text-gray-800 dark:text-white text-2xl font-bold mb-2 pt-2">
                Watch video from different angles
              </p>

            </div>
          </a>
        </div>

        {/* <img className=' image-hover z-50 h-[13rem] absolute w-[20rem] rounded-md mt-2 left-[3.75rem]' src={require("./images/play.jpeg")} alt="" /> */}


        <div className="animationh shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-2 bg-indigo-50 transition duration-400 ease-in-out transform hover:translate-y-5 hover:shadow-2xl" data-aos="zoom-in">
          <a href="/" className="w-full block h-full" >
            <img alt="blog" src={require('./images/virtualreality.png')} className="h-[13rem] rounded-md w-full object-cover" />
            <div className="w-full">

              <p className="text-gray-800 dark:text-white text-2xl font-bold pt-2 mb-2">
                Taking India Ahead with IoT-Powered Homes
              </p>


            </div>
          </a>
          {/* <img className=' image-hover2 z-50 h-[13rem] absolute bottom-[5.5rem] right-0 w-[20rem] rounded-md mt-2 ' src={require("./images/play.jpeg")} alt="" /> */}
        </div>
        <div className="animationh overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-2 bg-indigo-50 transition duration-400 ease-in-out transform hover:translate-y-5 hover:shadow-2xl" data-aos="zoom-in">
          <a href="/" className="w-full block h-full" >
            <img alt="blog" src={require("./images/movies.png")} className="h-[13rem] rounded-md w-full object-cover" />
            <div className="w-full">
              <p className="text-gray-800 dark:text-white text-2xl font-bold mb-2 pt-2">
                Download Full HD movies in seconds
              </p>


            </div>
          </a>
        </div>
        <div className="animationh overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 cursor-pointer m-auto p-2 bg-indigo-50 transition duration-400 ease-in-out transform hover:translate-y-5 hover:shadow-2xl" data-aos="zoom-in">
          <a href="/" className="w-full block h-full" >
            <img alt="blog" src={require("./images/shopping.png")} className="h-[13rem] rounded-md w-full object-cover" />
            <div className="w-full">

              <p className="text-gray-800 dark:text-white text-2xl font-bold pt-2 mb-2">
                A Next Level Experience in Online Shopping
              </p>


            </div>
          </a>
        </div>
      </div>



      <div className=' justify-center bg-white '>
        <img className='relative left-[70vh] h-72' src={require("./images/Airtel-5G-PLus-1.webp")} alt="" />
        <section className="dark:bg-gray-800 dark:text-gray-100 ">
          <div className="animationh container max-w-7xl mx-auto space-y-6 sm:space-y-12" data-aos="fade-up">
            <a href="https://www.britannica.com/place/Ajanta-Caves" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-4 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-medium sm:text-6xl relative top-6 pt-10 pl-10"> Upto 30x Faster</h3>
                <img className=' h-16 relative left-2 top-28' src={require("./images/downloadicon.png")} alt="" />
              <h1 className=' text-red-700 text-5xl relative pt-12 left-12 '>Download Speed</h1>
              </div>
              <img src={require("./images/30x_faster.gif")} alt="" className="relative left-96 w-[40vh] h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            </a>
          </div>
          <div className="animationh container max-w-7xl mx-auto space-y-6 sm:space-y-12 mt-8" data-aos="fade-up">
            <a href="https://www.britannica.com/place/Ajanta-Caves" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-4 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-medium sm:text-6xl relative top-6 pt-10 pl-10"> Watch High Quality</h3>
                <img className=' h-16 relative left-2 top-16' src={require("./images/playairtel.png")} alt="" />
              <h1 className=' text-red-700 text-5xl relative pt-10 left-2 bottom-9'>4K videos</h1>
              </div>
              <img src="https://airtel-cms.s3.ap-south-1.amazonaws.com/5g-network/4K_videos.gif" alt="" className="relative left-96 w-[40vh] h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            </a>
          </div>
          <div className="animationh container max-w-7xl mx-auto space-y-6 sm:space-y-12 mt-8" data-aos="fade-up">
            <a href="https://www.britannica.com/place/Ajanta-Caves" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-4 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-medium sm:text-6xl relative top-6 pt-10 pl-10"> Step Into</h3>
                <img className=' h-16 relative left-2 top-16' src={require("./images/vrairtel.webp")} alt="" />
              <h1 className=' text-red-700 text-5xl relative pt-10 left-10 bottom-9'>Virtual worlds</h1>
              </div>
              <img src="https://www.airtel.in/5g-network/assets/virtual_worlds.gif" alt="" className="relative left-96 w-[40vh] h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            </a>
          </div>

        </section>
              </div>

      </>
      )
}
