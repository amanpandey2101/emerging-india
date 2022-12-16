import React from 'react'
import {Carousel} from "flowbite-react";

export default function RegSlider() {
  return (
    <div>
      <Carousel className='absolute bg-white overflow-y-hidden'>
      <div>
      <img className='w-full h-fit  ' src={require("../assets/images/unity.avif")} alt="..." />
      </div>
      <div>

      <img className='w-full  h-fit ' src={require("../assets/images/tajmahal.jpg")} alt="..." />
      </div>
      <div>
      <img className='w-full h-screen '  src={require("../assets/images/5G.jpg")} alt="..." />
      </div>
      <div>
      <img className='w-full h-screen ' src={require("../assets/images/isro.jpg")} alt="" />

      </div>
   </Carousel>
    </div>
  )
}
