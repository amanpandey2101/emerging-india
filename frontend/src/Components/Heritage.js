import React from 'react'
import Heritageslider from './Heritageslider'

export default function Heritage() {
	
  return (
    <div className=' m-auto pt-20 '>
        <h1 className=' font-bold text-6xl '>Best Heritages Sites to Visit in India</h1>
      <section className="dark:bg-gray-800 dark:text-gray-100 ">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a href="https://en.wikipedia.org/wiki/Mahabodhi_Temple" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full max-[1024px]:flex max-[1024px]:flex-col-reverse group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900  shadow-2xl rounded-md">
			<img src={require("../assets/images/mahabodhi.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 " />
			<div className="p-6 space-y-4 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline ">Mahabodhi Temple, Bihar</h3>
				<span className="text-xs dark:text-gray-400 ">December 14, 2022</span>
				<p className=''>The Mahabodhi Temple (literally: "Great Awakening Temple") or the Mahābodhi Mahāvihāra, a UNESCO World Heritage Site, is an ancient, but rebuilt and restored Buddhist temple in Bodh Gaya, Bihar, India, marking the location where the Buddha is said to have attained enlightenment.[1] Bodh Gaya is 15 km from Gaya and is about 96 km (60 mi) from Patna..</p>
			</div>
		</a>
		<a  href="https://www.britannica.com/place/Ajanta-Caves" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Ajanta Caves,Maharastra</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>Ajanta Caves, Buddhist rock-cut cave temples and monasteries, located near Ajanta village, north-central Maharashtra state, western India, that are celebrated for their wall paintings. The temples are hollowed out of granite cliffs on the inner side of a 70-foot (20-metre) ravine in the Wagurna River valley 65 miles (105 km) northeast of Aurangabad, at a site of great scenic beauty...</p>
			</div>
			<img src={require("../assets/images/ajanta.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
		</a>
		<a  href="https://en.wikipedia.org/wiki/Ellora_Caves" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full max-[1024px]:flex max-[1024px]:flex-col-reverse group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<img src={require("../assets/images/ellora.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Ellora Caves,Maharastra</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>Ellora is a UNESCO World Heritage Site located in the Aurangabad district of Maharashtra, India. It is one of the largest rock-cut Hindu temple cave complexes in the world, with artwork dating from the period 600–1000 CE.Cave 16 features the largest single monolithic rock excavation in the world, the Kailash temple, a chariot-shaped monument dedicated to the god Shiva. The Kailash temple excavation also features sculptures depicting various Hindu deities as well as relief panels summarizing the two major Hindu epics.</p>
			</div>
		</a>
		<a  href="https://en.wikipedia.org/wiki/Agra_Fort" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Agra Fort,Agra</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>The Agra Fort is a historical fort in the city of Agra in India also known as the Red Fort. Rebuilt by the Mughal emperor Akbar in 1565 and completed in 1573, it served as the main residence of the rulers of the Mughal Dynasty until 1638, when the capital was shifted from Agra to Delhi. It was also known as the “Lal-Qila”, “Fort Rouge” or “Qila-i-Akbari”.Before capture by the British, the last Indian rulers to have occupied it were the Marathas. In 1983, the Agra fort was life inscribed as a UNESCO World Heritage Site.It is about 2.5 km northwest of its more famous sister monument, the Taj Mahal. The fort can be more accurately described as a walled city...</p>
			</div>
			<img src={require("../assets/images/ajanta.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
		</a>
		<a  href="https://en.wikipedia.org/wiki/Konark_Sun_Temple" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full max-[1024px]:flex max-[1024px]:flex-col-reverse group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<img src={require("../assets/images/konark.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Konark Sun Temple,Odisha</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>Konark Sun Temple is a 13th-century CE (year 1250) Sun temple at Konark about 35 kilometres (22 mi) northeast from Puri city on the coastline in Puri district, Odisha, India.The temple is attributed to king Narasimhadeva I of the Eastern Ganga dynasty about 1250 CE.Dedicated to the Hindu Sun God Surya, what remains of the temple complex has the appearance of a 100-foot (30 m) high chariot with immense wheels and horses, all carved from stone. Once over 200 feet (61 m) high,much of the temple is now in ruins, in particular the large shikara tower over the sanctuary; at one time this rose much higher than the mandapa that remains... </p>
			</div>
		</a>
		<a href="https://en.wikipedia.org/wiki/Kaziranga_National_Park" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Kaziranga National Park,Assam</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>aziranga National Park is a national park in the Golaghat and Nagaon districts of the state of Assam, India. The park, which hosts two-thirds of the world's great one-horned rhinoceroses, is a World Heritage Site.[2] According to the census held in March 2018 which was jointly conducted by the Forest Department of the Government of Assam and some recognized wildlife NGOs, the rhino population in Kaziranga National Park is 2,613. It comprises 1,641 adult rhinos (642 males, 793 females, 206 unsexed); 387 sub-adults (116 males, 149 females, 122 unsexed); and 385 calves...</p>
			</div>
			<img src={require("../assets/images/kaziranga.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
		</a>
		<a href="https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full max-[1024px]:flex max-[1024px]:flex-col-reverse group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<img src={require("../assets/images/Khajuraho.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Khajuraho Group of Monuments, Madhya Pradesh</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>The Khajuraho Group of Monuments are a group of Hindu and Jain temples in Chhatarpur district, Madhya Pradesh, India, about 175 kilometres southeast of Jhansi. They are a UNESCO World Heritage Site.The temples are famous for their nagara-style architectural symbolism and a few erotic sculptures.Most Khajuraho temples were built between 885 AD and 1000 AD by the Chandela dynasty.Historical records note that the Khajuraho temple site had 85 temples by the 12th century, spread over 20 square kilometers. Of these, only about 25 temples have survived, spread over six square kilometers...</p>
			</div>
		</a>
		<a href="https://en.wikipedia.org/wiki/Elephanta_Caves" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Elephanta Caves, Maharastra</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>The Elephanta Caves are a collection of cave temples predominantly dedicated to the Hindu god Shiva.They are on Elephanta Island, or Gharapuri (literally "the city of caves"),in Mumbai Harbour, 10 kilometres (6.2 mi) east of Mumbai in the Indian state of Mahārāshtra. The island, about 2 kilometres (1.2 mi) west of the Jawaharlal Nehru Port, consists of five Hindu caves, a few Buddhist stupa mounds that date back to the 2nd century BCE,and two Buddhist caves with water tanks.The Elephanta Caves contain rock cut stone sculptures, mostly in high relief, that show syncretism of Hindu and Buddhist ideas and iconography...</p>
			</div>
			<img src={require("../assets/images/elephanta.png")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
		</a>
		<a href="https://whc.unesco.org/en/list/252/" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full max-[1024px]:flex max-[1024px]:flex-col-reverse group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<img src={require("../assets/images/taj-mahal.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">The Taj Mahal, Agra</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.The Taj Mahal is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh. It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD, with the mosque...</p>
			</div>
		</a>
	</div>
	<h1 className=' font-serif text-5xl mt-10'>
		Explore More World Heritage Sites in India
	</h1>
		<Heritageslider/>
</section>
    </div>
  )
}
