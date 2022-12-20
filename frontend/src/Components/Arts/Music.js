import React from 'react'
import ArtsNav from './ArtsNav'

export default function Music() {
	return (
		<>
		
	
		<div>
			<div className='pt-16 relative top-[2rem]'>
				{/* <h1 className=' font-bold text-6xl pb-5 font-serif  '>Most Popular Paintings in India</h1> */}
				<section className="dark:bg-gray-800 dark:text-gray-100 ">
					<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
						<a id='evolution' href="/music" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group  focus:no-underline lg:grid  dark:bg-gray-900 rounded-md" style={{ boxShadow: "1px 0px 18px gray" }}>
							<img src={require("./images/music.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 " />
							<div className="p-6 space-y-4 lg:col-span-5">
								<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline underline ">The Evolution of Indian Music</h3>
								<p className=''>India has a very rich heritage which has been passed down from generation to generation.  Be it the age of the Indus civilization or the number of invasions and culture clashes this land has witnessed. All this has contributed to the complex history of Indian music which has been one of the most important aspects of our heritage. All these factors have led to the current generation thinking, “how exactly did Indian music become the way it is now ? How has it changed from its original stage ?”</p>
								<p>Indian classical music has developed over centuries into a nuanced, glorious art
									form. Indian classical music, through a variety of melodic entities (ragas),
									ornamentation of notes and rhythmic patterns, tries to unite the performer and
									the listener in the experience of emotions or bhava. Classical music in India has
									had a complimentary relationship with other varieties of music — folk, sacred,
									dance, opera, light, katha kalakshepa etc. Indian classical music is a part of Indian
									culture. Music has been an inseparable part of daily life in India. It has been
									considered as the soothing entertainer for the common man, besides being a
									spiritual experience and a means to God realization by the wise seers. In puranas,
									we can find references of Siva, Krishna and Saraswati, associated with Nada, flute
									and veena. Celestials like Tumburu, Narada, Nandi and others were also
									accomplished musicians. All these aspects gave a sacred nature to Indian classical
									music. The greatness of classical music is that it can easily relate itself to all
									varieties of music, like Art music, Folk music, Sacred music, Dance music, Opera
									music, Light music, Katha Kalakshepa music etc. These varieties have also
									developed side by side along with classical music, complimenting each other.</p>
							</div>
						</a>
						<h3 className="text-3xl font-semibold sm:text-4xl pt-4 group-hover:underline group-focus:underline underline ">Indian Classical Music</h3>
						<a id='classical' href="/music" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid  dark:bg-gray-900  rounded-md" style={{ boxShadow: "1px 0px 18px gray" }}>
							<img src={require("./images/classical.webp")} alt="" className="object-cover sm:w-full sm:h-[65vh] rounded  lg:col-span-7 dark:bg-gray-500  " />
							<div className="p-6 space-y-4 lg:col-span-5">
								<p className=''>Indian classical music is ancient in origin, yet constantly evolving. Its earliest sources include the ritual incantations of vedic scriptures over 2,000 years ago and the timeless wellspring of folk music of the subcontinent. Alongside the two main streams of Carnatik and Hindustani classical music, are numerous tributaries of devotional music traditions, which have both received from and given back to the two main traditions. Classical music is guided by well-defined structures and frameworks, and yet brims with scope for creative articulation. It stimulates the mind, soothes the soul, and continues to be the benevolent mother to a variety of musical expressions.</p>
								<span className='font-serif text-3xl relative top-4 underline'>Hindustani Music</span>
								<p className='pt-10'>Hindustani music is the classical music tradition of north India. It can be traced back to distinctive musical practices from the 8th and 9th centuries AD. By the 12th and 13th centuries waves of invaders from West and Central Asia brought their musical cultures to north India. The present form of Hindustani music thus represents a confluence of foreign influences with indigenous practices. The tradition consists of two major subgenres—dhrupad and khayal—and a group of semi-classical subgenres broadly categorized as the thumri family. Instrumental musicians may perform in any one of, or a blend of, these formats. Hindustani music shares with Carnatic music the basic principles of raga (melodic frameworks) and tala (rhythmic cycles), and performances feature both compositions as well as improvisation.</p>
							</div>
						</a>
						<h3 className="text-3xl font-semibold sm:text-4xl pt-4 group-hover:underline group-focus:underline underline">Indian Folk Music</h3>
						<a id='folk' href="/music" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid  dark:bg-gray-900  rounded-md " style={{ boxShadow: "1px 0px 18px gray" }}>
							<img src={require("./images/folk.jpg")} alt="" className="object-cover sm:w-full sm:h-[65vh] rounded  lg:col-span-7 dark:bg-gray-500  " />
							<div className="p-6 space-y-4 lg:col-span-5">
								<span className=' underline font-serif text-2xl'>History</span>
								<p className='pb-6'>Earliest records of Indian folk music are found in the Vedic literature, which dates back to 1500 BC. Some scholars and experts even suggest that the Indian folk music could be as old as the country itself. For instance, Pandavani, a folk music popular in most parts of Central India, is believed to be as old as the Hindu epic Mahabharata. This incredible claim is backed by the fact that the subject matter of Pandavani deals with the heroics of Bhima, a prominent character from Mahabharata. Since Pandavani’s subject matter has remained the same over centuries, this age-old folk music could be as old as the Mahabharata itself! Later on, folk songs were extensively used for recreational purposes and to celebrate special events including weddings, birth of a child, festivals, etc. Folk songs were also used to pass on prominent information from one generation to another. This suggests that these songs could’ve played a major role before the arrival of paper in India. Since people did not have a solid material to preserve ancient information, passing down important information in the form of songs became utmost important. Hence folk songs were revered by aboriginal people as it not only provided entertainment, but also imparted critical information that could be used in one’s day-to-day life.</p>
								<span className=' underline font-serif text-2xl '>Evolution and Diversification</span>
								<p>Like many other aspects of India, folk music too is diverse because of the cultural diversity. While the reason behind its origin and the method of usage remains more or less the same throughout India, the style in which it is sung and the way in which it is perceived differs depending upon the culture of different Indian states. Many of these folk songs were composed by great poets and writers belonging to different parts of the country. For instance, the Rabindra Sangeet or Tagore songs of Bengal are a collection of songs that were originally written by eminent poet Rabindranath Tagore. Folk songs also played a crucial role in socio-religious reforms in many parts of South India. Religious leaders like Adi Shankaracharya used many such songs to spread his message throughout the country. Similarly, folk songs sung by other religious leaders gave identity to the villages they originally came from and gradually, these songs were cherished and celebrated by the people of their respective areas as their own. Also, many folk songs are associated with a dance form, which is usually performed while singing these songs. Today, almost every Indian state/region has a folk song of its own and some of them are associated with a dance form as well. Mentioned below are folk music of various Indian states.</p>
							</div>
						</a>
						<h3 className="text-3xl font-semibold sm:text-4xl pt-4 group-hover:underline group-focus:underline underline">Indian Pop Music</h3>
						<a id='pop' href="/music" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid  dark:bg-gray-900 rounded-md " style={{ boxShadow: "1px 0px 18px gray" }}>
							<img src={require("./images/pop.jpg")} alt="" className="object-cover sm:w-full sm:h-[65vh] rounded  lg:col-span-7 dark:bg-gray-500  " />
							<div className="p-6 space-y-4 lg:col-span-5">
								<span className=' underline font-serif text-2xl'>History</span>
								<p className='pb-6'>Pop music is a form of popular music that originated in its modern form in the 1950s and 1960s with the development of rock and roll. The origin of pop music has been a subject of debate among scholars for decades. Genres like country, rap, and rock are closely associated with one place or another. However, no one knows where the birth of pop music took place. Nowadays pop music is everywhere. We hear it on the radio, at the grocery store, in commercials, and even on television. But where did it come from?
								The term “popular” was first used in the early 19th century to refer to something that had become successful or well known. It was not until the 20th century that the term became associated with music. In 1920 the first jazz recordings were made and within a few years, there were hundreds of different bands that adapted the music format.</p>
								<span className=' underline font-serif text-2xl '>Evolution and Diversification</span>
								<p className='pb-10'>Indian pop music is a form of music that emerged in the early 1970s in the Indian subcontinent. The genre blends Western popular music with classical Indian music, drawing from traditional folk music, India’s film industry, and contemporary British and American pop. There is a tendency to associate pop music with Western Pop Music. But that's not true at all. Indian pop music has immense potential and can excite the listeners immensely. It is not only about dancing; it's also about singing, playing musical instruments, fashion, and so on. These are the things that make Indian pop music interesting and exciting.Indian pop music is a big industry in itself. Every year, Bollywood churns out hundreds of movies, along with a few thousand songs. Most of them are forgotten within days, and some even in hours. But there are some that stand the test of time and become iconic pop hits. They do not fade away even decades later and are still being played on the radio for millions of people to enjoy.</p>
							</div>
						</a>

					</div>

				</section>
			</div>
		</div>

		</>
	)
}
