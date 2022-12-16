import React from "react";
import { Carousel } from "flowbite-react";
import News from "./News";
import Cards from "./Cards";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div className="bg-white">
      <div className="max-[700px]:h-[50vh] max-[500px]:w-[70vh]   inline-flex relative mt-24 justify-center align-center w-full h-[80vh] pl-6 pr-6">
        <Carousel className="absolute bg-white overflow-y-hidden">
          <div>
            <img
              className="w-full h-fit  "
              src={require("../assets/images/unity.avif")}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-full  h-fit "
              src={require("../assets/images/tajmahal.jpg")}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-full h-screen "
              src={require("../assets/images/5G.jpg")}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-full h-screen "
              src={require("../assets/images/isro.jpg")}
              alt=""
            />
          </div>
        </Carousel>
      </div>

      <section className="py-6 dark:bg-gray-800 relative max-[500px]:left-12">
        <h1 className=" font-bold text-4xl">Dummy Data</h1>
        <div className="container flex flex-col justify-center p-4 mx-auto  ">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <div>
              <Link to="/heritage">
                <img
                  className="object-cover w-full cursor-pointer hover:animate-pulse aspect-square h-[40vh] rounded-2xl "
                  src={require("../assets/images/heritage.jpg")}
                  alt=""
                />
                <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle">
                  Heritage
                </h1>
              </Link>
            </div>
            <div>
              <img
                className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-2xl"
                src={require("../assets/images/culture.jpg")}
                alt=""
              />
              <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle">
                Art
              </h1>
            </div>
            <div>
              <img
                className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-2xl"
                src={require("../assets/images/culture (2).jpg")}
                alt=""
              />
              <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                Culture
              </h1>
            </div>
            <div>
              <img
                className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-2xl"
                src={require("../assets/images/food.jpg")}
                alt=""
              />
              <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                Food
              </h1>
            </div>
            <div>
              <img
                className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-2xl"
                src={require("../assets/images/technology.jpg")}
                alt=""
              />
              <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                Technology
              </h1>
            </div>
            <div>
              <img
                className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-2xl"
                src={require("../assets/images/tourism.jpg")}
                alt=""
              />
              <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                Tourism
              </h1>
            </div>
            <div>
              <img
                className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-2xl"
                src={require("../assets/images/luxury.jpg")}
                alt=""
              />
              <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                Luxury
              </h1>
            </div>
            <div>
              <img
                className="object-cover  cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square h-[40vh] rounded-2xl w-auto"
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
  );
}

// <div className="inline-flex relative top-[30rem] p-5 bg-white z-0">
// <Carousel className='slider2 relative bg-white '>
// <div className='flex'>
// <Cards title="On The Right Path: India's First Foray into Technology Standardisation Is A Welcome Move" imgUrl="https://images.news18.com/ibnlive/uploads/2022/09/technology-india-16627940503x2.jpg?impolicy=website&width=510&height=356" newsUrl="https://www.news18.com/news/opinion/on-the-right-path-indias-first-foray-into-technology-standardisation-is-a-welcome-move-6560977.html" description = "The concept of standardisation in technology, especially strategic or critical technologies, involves regulating the technical field. Strategic or critical technologies, like 5G and AI, are those for which"/>
// <Cards title= "Emerging economies keen to replicate India's digital transformation: G20 Sherpa Amitabh Kant" imgUrl="https://img.etimg.com/thumb/msid-96031163,width-300,imgsize-42498,,resizemode-4,quality-100/indias-g-20-sherpa-amitabh-kant.jpg"  newsUrl="https://economictimes.indiatimes.com/news/india/emerging-economies-keen-to-replicate-indias-digital-transformation-g20-sherpa-amitabh-kant/articleshow/96031068.cms" description="India's initiatives in digital public infrastructure such as Aadhaar, unique payment infrastructure and direct benefit transfer have been lauded at the G20 Sherpa meeting here" />
// <Cards title="Tourism sector rebounds to pre-pandemic levels, here are factors driving growth" imgUrl="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2022/11/24/212553-kfvxh4v6sbmmfn56yxwcw7znpu.jpg?itok=okg_54d5&c=ab81cf7a8d7fee9839920e5bf183e1ab" newsUrl="https://www.zeebiz.com/economy-infra/news-tourism-sector-rebounds-to-pre-pandemic-levels-here-are-factors-driving-growth-209505" description="The travel and tourism industry is undergoing a paradigm shift as Indian travellers demand new and thoughtful experiences. Mainly the millennials who currently make up the fastest growing segment "/>
// <Cards title="Neeraj Chopra: Gold Medal, Olympic Career and Awards He Won" imgUrl="https://images.news18.com/ibnlive/uploads/2021/08/neeraj-chopra-16287737393x2.jpg?impolicy=website&width=510&height=356" newsUrl="https://www.news18.com/news/sports/neeraj-chopra-gold-medal-olympic-career-and-awards-he-won-4525895.html" description="avelin thrower Neeraj Chopra made history on August 7, 2021, by winning India’s first-ever gold medal in athletics at the Tokyo Olympics. With a best throw of 87.58 metres, the 23-year-old took first place in"/>
// </div>
// </Carousel>
// </div>
