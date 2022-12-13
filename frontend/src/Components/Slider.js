import React from 'react'
import {Carousel} from "flowbite-react";
import News from './News';
import Cards from './Cards';

export default function Slider() {
  return (
 <>
      <div className="max-[500px]:h-[35vh] inline-flex relative mt-24 justify-center align-center w-full h-[70vh] pl-6 pr-6">
      <Carousel className='absolute bg-slate-600 overflow-y-hidden'>
      <div>
      <img className='w-full   ' src={require("../assets/images/unity.avif")} alt="..." />
      </div>
      <div>

      <img className='w-full   ' src={require("../assets/images/tajmahal.jpg")} alt="..." />
      </div>
      <div>
      <img className='w-full   '  src={require("../assets/images/5G.jpg")} alt="..." />
      </div>
      <div>
      <img className='w-full   ' src={require("../assets/images/isro.jpg")} alt="" />

      </div>
   </Carousel>
   </div>


   <section className="py-6 dark:bg-gray-800">
    <h1 className=' font-bold text-4xl'>Dummy Data</h1>
	<div className="container flex flex-col justify-center p-4 mx-auto ">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?1" alt=""/>
			<img className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?2" alt=""/>
			<img className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?3" alt=""/>
			<img className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?4" alt=""/>
      <img className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?1" alt=""/>
			<img className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?2" alt=""/> 
			<img className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?3" alt=""/>
			<img className="object-cover w-full cursor-pointer hover:animate-pulse dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?4" alt=""/>
		</div>
	</div>
</section>


   {/* <div class="flex absolute top-[80rem] pl-8 justify-center">
  <div class="rounded-lg  hover:animate-pulse bg-white mr-4 max-w-sm ">
    <a href="!/" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-lg" src={require("../assets/images/heritage.jpg")} alt=""/>
    </a>
    <div className="">
      <h5 className="text-white text-xl rounded-lg bg-black relative bottom-8 pb-1 opacity-70 font-serif ">Heritage</h5>
    </div>
  </div>
  <div class="rounded-lg  mr-4 hover:animate-pulse bg-white max-w-sm ">
    <a href="!/" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-lg" src={require("../assets/images/Art.jpg")} alt=""/>
    </a>
    <div className="">
      <h5 className="text-white text-xl bg-black rounded-lg relative bottom-8 pb-1 opacity-70 font-serif ">Art</h5>
    </div>
  </div>
  <div class="rounded-lg  mr-4 hover:animate-pulse bg-white max-w-sm ">
    <a href="!/" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-lg" src={require("../assets/images/culture.jpg")} alt=""/>
    </a>
    <div className="">
      <h5 className="text-white text-xl rounded-lg bg-black relative bottom-8 pb-1 opacity-70 font-serif ">Culture</h5>
    </div>
  </div>
  <div class="rounded-lg  mr-4 hover:animate-pulse bg-white max-w-sm ">
    <a href="!/" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-lg" src={require("../assets/images/food.jpg")} alt=""/>
    </a>
    <div className="">
      <h5 className="text-white text-xl bg-black rounded-lg relative bottom-8 pb-1 opacity-70 font-serif ">Food</h5>
    </div>
  </div>

  <div class="flex absolute top-[20rem]  justify-center">
  <div class="rounded-lg  mr-4 hover:animate-pulse bg-white max-w-sm ">
    <a href="!/" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-lg" src={require("../assets/images/technology.jpg")} alt=""/>
    </a>
    <div className="">
      <h5 className="text-white text-xl bg-black rounded-lg relative bottom-8 pb-1 opacity-70 font-serif ">Technology</h5>
    </div>
  </div>
  <div class="rounded-lg  mr-4 hover:animate-pulse bg-white max-w-sm ">
    <a href="!/" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-lg" src={require("../assets/images/heritage.jpg")} alt=""/>
    </a>
    <div className="">
      <h5 className="text-white text-xl bg-black rounded-lg relative bottom-8 pb-1 opacity-70 font-serif ">Tourism</h5>
    </div>
  </div>
  <div class="rounded-lg  mr-4 hover:animate-pulse bg-white max-w-sm ">
    <a href="!/" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-lg" src={require("../assets/images/heritage.jpg")} alt=""/>
    </a>
    <div className="">
      <h5 className="text-white text-xl bg-black rounded-lg relative bottom-8 pb-1 opacity-70 font-serif ">Luxury</h5>
    </div>
  </div>
  <div class="rounded-lg  mr-4 hover:animate-pulse bg-white max-w-sm ">
    <a href="!/" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-lg" src={require("../assets/images/heritage.jpg")} alt=""/>
    </a>
    <div className="">
      <h5 className="text-white text-xl bg-black rounded-lg relative bottom-8 pb-1 opacity-70 font-serif ">Food</h5>
    </div>
  </div>
</div>
</div> */}
  </>

  )
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


