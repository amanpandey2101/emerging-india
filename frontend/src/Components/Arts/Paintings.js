import React from 'react';
import ArtsNav from './ArtsNav';

export default function Paintings() {
  return (
    <>
	<div className='flex justify-between'>
	<div className='max-[1452px]:hidden'>
    <ArtsNav/>
	</div>
    <div className='pt-20 relative top-[2rem] '>
        <h1 className=' font-bold text-6xl font-serif relative'>Most Popular Paintings in India</h1>
      <section className="dark:bg-gray-800 dark:text-gray-100 ">
	<div className="container max-w-6xl p-6 space-y-6 sm:space-y-12">
		<a id='madhubani' href="https://en.wikipedia.org/wiki/Madhubani_art" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full max-[1024px]:flex max-[1024px]:flex-col-reverse group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900  shadow-2xl rounded-md">
			<img src={require("./images/Madhubani.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 " />
			<div className="p-6 space-y-4 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline ">Madhubani Paintings</h3>
				<span className="text-xs dark:text-gray-400 ">December 14, 2022</span>
				<p className=''>The Madhubani district of Bihar is home to the traditional painting style known as Madhubani Painting, often referred to as Mithila Painting. It is one of the most well-known and cherished forms of Indian art. It has been practiced for many generations in Bihar. These artworks, which were created using rice flour, twigs, and natural colours, have gained international recognition. While some of them are devoted to gods and goddesses, others depict ordinary people going about their daily lives. The variety of subjects is what distinguishes Madhubani as a timeless art style.</p>
			</div>
		</a>
		<a id='bhil' href="https://www.artisera.com/blogs/expressions/bhil-art-how-a-tribe-uses-dots-to-make-their-story-come-alive" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Bhil Paintings</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>It is often said that to know the art form of a particular place, is to know the place itself. If that is true, then to look at Bhil Art, is to enter the house of the artists themselves; to experience firsthand, this intimate art form from Central India.
                    The Bhils are the second largest tribal community in India, residing in Madhya Pradesh, Gujarat, Maharashtra and Rajasthan. Some Bhils trace their ancestry to Eklavya, the archer from Mahabharata, while some scholars even believe that Valmiki, who authored Ramayana, was a Bhil.</p>
			</div>
			<img src={require("./images/bhill.webp")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
		</a>
		<a id='pattachitra'  href="https://en.wikipedia.org/wiki/Pattachitra" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full max-[1024px]:flex max-[1024px]:flex-col-reverse group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<img src={require("./images/pattchitra.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Pattachitra artwork</h3>
				<span className="text-xs dark:text-gray-400">December 16, 2022</span>
				<p>Patachitra or Pattachitra is a general term for traditional, cloth-based scroll painting,based in the eastern Indian states of Odisha,West Bengal and parts of Bangladesh. Patachitra artform is known for its intricate details as well as mythological narratives and folktales inscribed in it. Pattachitra is one of the ancient artworks of Odisha, originally created for ritual use and as souvenirs for pilgrims to Puri, as well as other temples in Odisha. Patachitras are a component of an ancient Bengali narrative art, originally serving as a visual device during the performance of a song.</p>
			</div>
		</a>
		<a id='warli' href="https://en.wikipedia.org/wiki/Warli_painting" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Warli Art form</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>Warli painting is a form of tribal art mostly created by the tribal people from the North Sahyadri Range in Maharashtra, India. This range encompasses cities such as Dahanu, Talasari, Jawhar, Palghar, Mokhada, and Vikramgad of Palghar district. This tribal art was originated in Maharashtra, where it is still practiced today.The Warli Painting tradition in Maharashtra are among the finest examples of the folk style of paintings. The Warli tribe is one of the largest in India, located outside Mumbai . Til the 1970s, even though the tribal style of art is thought to date back as early as 10th century A.D.[1] The Warli culture is centered on the concept of Mother Nature and elements of nature are often focal points depicted in Warli painting. </p>
			</div>
			<img src={require("./images/warli.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
		</a>
		<a  id='mandana' href="https://en.wikipedia.org/wiki/Mandana_Paintings" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full max-[1024px]:flex max-[1024px]:flex-col-reverse group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<img src={require("./images/mandana.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Mandana Paintings</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>Mandana paintings are wall and floor paintings of Rajasthan and Madhya Pradesh, India. Mandana are drawn to protect home and hearth, welcome gods into the house and as a mark of celebrations on festive occasions. Meena women in the Hadoti area of Rajasthan possess skill for developing designs of perfect symmetry and accuracy. The art is practised on floors and walls, and the practice is often passed from mother to daughter.The art is much more pronounced and attached to Meena community of Hadoti area. The ground is prepared with cow dung mixed with rati, a local clay, and red ochre. Lime or chalk powder is used for making the motif. </p>
			</div>
		</a>
		<a id='phad' href="https://en.wikipedia.org/wiki/Phad_painting" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Phad painting</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>Phad painting or phad is a style religious scroll painting and folk painting, practiced in Rajasthan state of India.This style of painting is traditionally done on a long piece of cloth or canvas, known as phad. The narratives of the folk deities of Rajasthan, mostly of Pabuji and Devnarayan are depicted on the phadss. The Bhopas, the priest-singers traditionally carry the painted phads along with them and use these as the mobile temples of the folk deities, who are worshipped by the Rebari community of the region.</p>
			</div>
			<img src={require("./images/Pahad.JPG")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
		</a>
		<a id='miniature' href="https://www.culturalindia.net/indian-art/paintings/miniature.html" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full max-[1024px]:flex max-[1024px]:flex-col-reverse group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<img src={require("./images/miniature.jpeg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Miniature Painting</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>TAs the name suggests, miniature paintings are colorful handmade paintings very small in size. One of the outstanding features of these paintings is the intricate brushwork which contributes to their unique identity. The colors used in the paintings are derived from various natural sources like vegetables, indigo, precious stones, gold and silver. While artists all around the world convey their respective theme through their paintings, the most common theme used in the miniature paintings of India comprises of the Ragas or a pattern of musical notes, and religious and mythological stories.</p>
			</div>
		</a>
		<a id='kalighat' href="https://en.wikipedia.org/wiki/Kalighat_painting" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900 shadow-2xl">
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Kalighat Painting</h3>
				<span className="text-xs dark:text-gray-400">December 14, 2022</span>
				<p>Kalighat painting, Kalighat Patachitra originated as a distinct style or genre of Indian paintings in the 19th century, practiced and produced by a group of specialised scroll painters known as the patuas in the vicinity of the Kalighat Kali Temple in Kolkata (formerly Calcutta), in the present Indian state of West Bengal. Composed of bold outlines, vibrant colour tones, featuring minimal background details, these paintings and drawings, done on hand-made, or more usually, machine manufactured, paper, depicted mythological stories, figures of Hindu gods and goddesses, as well as scenes from everyday life and society,thereby recording a socio-cultural landscape which was undergoing a series of transitions during the 19th and early 20th century,the time when the creation of the Kalighat pat reached its pinnacle.</p>
			</div>
			<img src={require("./images/kalighat.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-fit lg:col-span-7 dark:bg-gray-500 mt-16" />
		</a>
	</div>
		
</section>
    </div>
	</div>
    </>
  )
}
