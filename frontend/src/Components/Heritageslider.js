import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
export default function Heritageslider() { 
  // const customSlider = React.creatRef();
  // const next=()=> {
  //   customSlider.current.slickNext()
  // }
  // const previous=() =>{
  //   customSlider.current.slickPrev()
  // }

  
    const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
    initialslide:0,
    autoplay: true,
      autoplaySpeed: 1800,
      cssEase: "linear",
    responsive:[
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
	  };
  return (
    <div className='pt-24'>
      <Slider {...settings} className='Slider ml-10 mr-9 ' >
       
		{/* <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={require("../assets/images/konark.jpg")} alt="" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 21, 2021</span>
					<p></p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" alt=""/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 22, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" alt="" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?4" alt=""/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 24, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?5" alt="" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 25, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="/" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?6" alt=""/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 26, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
		</div>  */}
    
   
    <div class="flex justify-center max-[1232px]:flex-col">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="https://whc.unesco.org/en/list/232/" target={"_blank"} data-mdb-ripple="true" data-mdb-ripple-color="light" rel="noreferrer">
      <img class="rounded-t-lg sm:h-72 w-full" src={require("../assets/images/humayu.avif")} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Humayun’s Tomb,Delhi</h5>
      <p class="text-gray-700 text-base mb-4">
      This tomb, built in 1570, is of particular cultural significance as it was the first garden-tomb on the Indian subcontinent. It inspired several major architectural innovations,culminating...
      </p>
      <a href='https://whc.unesco.org/en/list/232/' target={"_blank"} rel="noreferrer">
      <button type="button" class=" inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
      </a>
    </div>
  </div>
</div>

    <div class="flex justify-center max-[1232px]:flex-col">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="https://en.wikipedia.org/wiki/Fatehpur_Sikri" data-mdb-ripple="true" target={"_blank"} data-mdb-ripple-color="light" rel="noreferrer">
      <img class="rounded-t-lg sm:h-72" src={require("../assets/images/fatehpur.jpg")} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Fatehpur Sikri,Uttar Pradesh</h5>
      <p class="text-gray-700 text-base mb-4">
      Fatehpur Sikri is a town in the Agra District of Uttar Pradesh, India. Situated 35.7 kilometres from the district headquarters of Agra,Fatehpur Sikri itself was founded as the capital of...
      </p>
      <button type="button" class=" inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
    </div>
  </div>
</div>


    <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="https://whc.unesco.org/en/list/945/" target={"_blank"} rel="noreferrer" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src={require("../assets/images/chatrapatishivaji.jpg")} target={"_blank"} rel="noreferrer" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Chhatrapati Shivaji Terminus</h5>
      <p class="text-gray-700 text-base mb-4">
      The Chhatrapati Shivaji Terminus, formerly known as Victoria Terminus Station, in Mumbai, is an outstanding example of Victorian Gothic Revival architecture in India, blended with...
      </p>
      <a href='https://whc.unesco.org/en/list/945/' target={"_blank"} rel="noreferrer">
      <button type="button" class=" inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read more</button>
      </a>
    </div>
  </div>
</div>

    <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="https://whc.unesco.org/en/list/1338/" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src={require("../assets/images/jantar-mantar.jpg")} target={"_blank"} rel="noreferrer" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">The Jantar Mantar, Jaipur</h5>
      <p class="text-gray-700 text-base mb-2">
      The Jantar Mantar, in Jaipur, is an astronomical observation site built in the early 18th century. It includes a set of some 20 main fixed instruments. They are monumental examples in masonry of known instruments..
      </p>
      <a href='https://whc.unesco.org/en/list/1338/' target={"_blank"} rel="noreferrer">
      <button type="button" class=" inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
      </a>
    </div>
  </div>
</div>

    <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="https://en.wikipedia.org/wiki/Nalanda#:~:text=Today%2C%20it%20is%20a%20UNESCO,by%20the%20Government%20of%20India." target={"_blank"} rel="noreferrer" data-mdb-ripple="true"  data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src={require("../assets/images/nalanda2.jpeg")} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Nalanda, Bihar</h5>
      <p class="text-gray-700 text-base mb-4">
      Nalanda was a renowned mahavihara (Buddhist monastic university) in ancient Magadha (modern-day Bihar),India.Considered by historians to be the world's first residential university and among the greatest...
      </p>
      <a href='https://en.wikipedia.org/wiki/Nalanda#:~:text=Today%2C%20it%20is%20a%20UNESCO,by%20the%20Government%20of%20India.' target={"_blank"} rel="noreferrer" >
      <button type="button" class=" inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
      </a>
    </div>
  </div>
</div>

    <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="https://en.wikipedia.org/wiki/Bhimbetka_rock_shelters" target={"_blank"} rel="noreferrer" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg h-64" src={require("../assets/images/bhimbetka.jpg")} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Bhimbetka, Madhya Pradesh</h5>
      <p class="text-gray-700 text-base mb-4">
      The Bhimbetka rock shelters are an archaeological site in central India that spans the Paleolithic and Mesolithic periods, as well as the historic period.It exhibits the earliest traces of human life in India and evidence...
      </p>
      <a href='https://en.wikipedia.org/wiki/Bhimbetka_rock_shelters' target={"_blank"} rel="noreferrer">
      <button type="button" class=" inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button>
      </a>
    </div>
  </div>

</div>
    

	</Slider>
  {/* <div className='flex justify-between relative bottom-[42vh] z-10 hover:cursor-pointer'>
  <button onClick={previous.bind()} className='prev'>prev</button>
  <button onClick={next.bind()} className='next'>next</button>
  </div> */}
    </div>
  )
}
