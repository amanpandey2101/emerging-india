import React from 'react'
import ArtsNav from './ArtsNav'
import Category from '../Category'
export default function Arts() {
  return (
    <>
    
      <div className='flex justify-between mx-16 max-[1230px]:justify-center'>
      <div>
        <ArtsNav/>
      </div>
          <div className="relative top-20">

            <div className="mb-4 w-full max-w-screen-md relative top-0" style={{ height: "24rem" }}>
              <div className="w-fit h-fit"
                style={{ backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))" }}></div>
              <img src={require("./images/sculpture.webp")} alt="" className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
              <div className=" absolute bottom-0  text-center w-fit">
                <h2 className="text-4xl font-semibold text-gray-100 leading-tight bg-[#0000006c]">
                  Indian Arts and Its Vibrant History
                </h2>
              </div>
            </div>

            <div className="px-4 lg:px-0 mt-12 text-gray-700 font-bold  max-w-screen-md mx-auto text-lg leading-relaxed">
              <p className="pb-4">From early petroglyphs to a flourishing contemporary art scene, India’s vibrant artistic legacy is the result of a variety of cultural influences. The diversity of art from this area—which includes anything created in the historical regions of modern-day India, Bangladesh, and areas of Pakistan and Afghanistan—is reflected in vivid, distinct, and enchanting styles that represent many different civilizations.</p>

              <p className="pb-4">Because some of the world’s major religions such as Buddhism, Hinduism, and Islam either began or flourished in India, much of Indian art is based in religious or political subject matter. Here, we uncover the history of Indian folk paintings, architecture, and sculpture, and explain how each evolved from the sociopolitical influences reflective of the period from which they originated.</p>
              <h1 className=' text-4xl font-extrabold text-black pb-6'>Brief History of Indian Arts</h1>
              <img className='w-full h-[65vh] pb-6 relative max-[700px]:h-[60vh] max-[525px]:h-[40vh] max-[425px]:h-[38vh]' src={require("./images/sculpture2.jpg")} alt="" />
              <p className="pb-6">Archaeologists discovered evidence of prehistoric rock art—carvings or drawings on cave rocks—in this area dating back at least 290,000 years. The oldest examples are the Bhimbetka petroglyphs found in central India. These consist of cupules, which are non-utilitarian hemispherical cup-shaped depressions that are hammered out of the rock surface. This type of rock art was the primary form of cave painting throughout the Paleolithic, Mesolithic and Neolithic periods, often depicting animal and human forms.</p>
              <p className="pb-6">The earliest known Indian art sculptures were produced by the Indus Valley Civilization between 2,500 B.C. and 1,800 B.C. They created small terracotta and bronze figures that also represented humans and animals such as cows and monkeys. In the 6th century B.C., the rise of Buddhism paved way for religious-themed art, often in the form of stone and bronze sculptures. During this time, religious artists also experimented with the creation of vast temples carved in stone and decorated with Greek-influenced columns.</p>
              <img className='relative left-8' src="https://www.invaluable.com/blog/wp-content/uploads/sites/77/2019/04/2-copper-statue.jpg" alt="" />

              <p className="pb-6">Sculpture was a common practice among Indian Buddhists and Hindus. Hinduism continued to be a main focus of Indian art for centuries, as sculptures of deities like Shiva were commonly produced. By the 16th century, Islam gained importance under the Mughal Empire and art production grew under Islamic rulers. During this time, the arts prospered and in 1631 construction began on the Taj Mahal.</p>

              <p className="pb-6">British involvement in India began in the 18th century, during which time they established art schools to promote European styles. As a result, local art styles merged with foreign influences and traditional art forms were often romanticized or exaggerated to appeal to European buyers. In 1947, India gained independence from the British empire which pushed local artists to search for a new style. Contemporary Indian art incorporates traditional elements and influences from the rich history of the country.</p>





            </div>
          </div>
      </div>
      <div className='relative top-28'>
          <Category/>
          </div>

      <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
            <div className="flex">

              <div className="w-full md:w-1/3 lg:w-1/4">
                <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
                <ul>
                  <li> <a href="/" className="block text-gray-600 py-2">Team</a> </li>
                  <li> <a href="/" className="block text-gray-600 py-2">About us</a> </li>
                  <li> <a href="/" className="block text-gray-600 py-2">Press</a> </li>
                </ul>
              </div>

              <div className="w-full md:w-1/3 lg:w-1/4">
                <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
                <ul>
                  <li> <a href="/" className="block text-gray-600 py-2">Blog</a> </li>
                  <li> <a href="/" className="block text-gray-600 py-2">Privacy Policy</a> </li>
                  <li> <a href="/" className="block text-gray-600 py-2">Terms & Conditions</a> </li>
                  <li> <a href="/" className="block text-gray-600 py-2">Documentation</a> </li>
                </ul>
              </div>

            </div>
          </footer>
      
    </>
  )
}
