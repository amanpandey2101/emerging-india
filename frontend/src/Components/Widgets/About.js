import React from 'react'

export default function About() {
  return (
    
    <div>
      <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex flex-col lg:flex-row justify-between gap-8">
                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia inventore expedita nemo labore quas sunt iure facilis, excepturi exercitationem ratione saepe itaque culpa esse quasi eligendi error eius! Eaque voluptates nisi temporibus assumenda! Blanditiis placeat, autem laborum unde expedita ut quo fugit rerum et repellendus? Impedit ipsum, molestias placeat amet, culpa, cupiditate temporibus dolor rerum odio saepe ipsa totam nobis explicabo dolorem assumenda incidunt sint aspernatur dolores consectetur. Assumenda reprehenderit harum laudantium id aperiam iure maiores incidunt beatae doloribus, fuga voluptates nobis soluta ex possimus deleniti quaerat provident vitae neque corporis. Corrupti voluptatem quo dicta itaque dolor rerum natus obcaecati.</p>
                </div>
                <div class="w-full lg:w-8/12 ">
                    <img class="w-full h-fit pt-5" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>
    
            <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Mission</h1>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur molestias mollitia fugit tempore exercitationem, voluptatibus, natus error ipsa, fugiat voluptas nihil. Facilis autem veritatis molestiae porro in eveniet perferendis excepturi, molestias necessitatibus dolores reiciendis atque quis. Nesciunt doloremque deleniti, eius aliquid quibusdam natus molestias. Maiores dicta fuga neque nihil aspernatur?</p>
                </div>
                <div class="w-full lg:w-8/12 lg:pt-8">
                    <div class="grid sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block h-60 md:h-[35vh] rounded-xl w-60 md:w-fit" src={require('./images/amity_uniform_1-min-removebg-preview.png')} alt="" />
                            {/* <img class="md:hidden block object-cover object-bottom" src={require('./images/amity_uniform_1-min-removebg-preview.png')} alt="" /> */}
                            <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Aman Kumar Pandey</p>
                        </div>
                        {/* <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="" />
                            <img class="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="" />
                            <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Olivia</p>
                        </div> */}
                        {/* <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="" />
                            <img class="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="" />
                            <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Liam</p>
                        </div> */}
                        {/* <div class="p-4 pb-6 flex justify-center flex-col items-center">
                            <img class="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="" />
                            <img class="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="" />
                            <p class="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Elijah</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
