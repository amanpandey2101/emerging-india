import React from "react";
import { Carousel } from "flowbite-react";
import News from "./News";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import Category from "./Category";

export default function Slider() {
  return (
    <>
    <div className="relative top-20 font-serif text-6xl ">
    <h1>Experience the new India</h1>
    </div>
 <div className="">
      <div className="max-[700px]:h-[65vh] max-[500px]:w-[screen] relative mt-24 h-[90vh] pl-6 pr-6">
        <Carousel className="overflow-y-hidden">
          <div>
            <img
              className="w-screen h-fit  "
              src={require("../assets/images/mumbai2.jpg")}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-screen h-fit  "
              src={require("../assets/images/tajhotel.webp")}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-screen h-fit "
              src={require("../assets/images/mumbai.jpg")}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-screen h-fit "
              src={require("../assets/images/5G2.jpg")}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-screen h-fit  "
              src={require("../assets/images/unity.avif")}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-screen h-fit "
              src={require("../assets/images/isro.jpg")}
              alt=""
            />
          </div>
        </Carousel>
      </div>
    <Category/>
      
    </div>
   
    </>

);
}
