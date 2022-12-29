import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function AI() {
    useEffect(() => {
        Aos.init({ duration: 500 })
    })
    return (
        <div className='bg-white'>
            <div className='relative'>
                <img className=' sm:h-[80vh] h-fit w-full sm:w-screen' src={require("./images/AI_india.jpg")} alt="" />
               
            </div>

            <div className=' absolute top-20 text-white right-0 left-0'>
            <h1 className='h-80 dawn lg:text-5xl font-serif  overflow-hidden md:text-4xl sm:text-3xl max-[640px]:hidden' data-aos="fade-down-right ">INDIA AND</h1>
                <h1 className=' dawn h-20 lg:text-5xl font-serif  overflow-hidden md:text-4xl sm:text-3xl max-[640px]:hidden' data-aos="fade-left">ARTIFICIAL INTELLIGENCE </h1>
                <h1 className='lg:text-5xl dawn font-serif  overflow-hidden md:text-4xl sm:text-3xl max-[640px]:hidden' data-aos="fade-up-left">REVOLUTION</h1>
            </div>


            {/* <div className='absolute top-16 p-10 text-white'>
                <h1 className='dawn flex justify-center pt-2 lg:text-7xl font-serif  overflow-hidden md:text-5xl sm:text-4xl' data-aos="fade-down-right ">INDIA AND</h1>
                <h1 className='dawn relative top-[30vh]  lg:text-6xl md:text-5xl sm:text-4xl font-serif' data-aos="fade-left">ARTIFICIAL INTELLIGENCE </h1>
                <h1 className='dawn pt-10 lg:text-5xl md:text-4xl sm:text-3xl font-serif relative top-[30vh]' data-aos="fade-up-left">REVOLUTION</h1>
            </div> */}

            <section className="dark:bg-gray-800 dark:text-gray-100 ">
                <div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12 mt-5" >
                    <a href="https://www.britannica.com/place/Ajanta-Caves" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl">
                        <div className="p-6 space-y-2 lg:col-span-5">

                            <p className='text-xl'>Recent advances in artificial intelligence (AI) are a wake-up call to policymakers in India, with every one of Prime Minister Narendra Modi’s flagship programs likely to be directly affected within the next few years. With China making rapid progress in AI-based research, it is imperative that India view AI as a critical element of national security strategy. Spurring AI-based innovation and establishing AI-ready infrastructure are thus necessary to prepare India’s jobs and skills markets for an AI-based future and to secure its strategic interests. </p>

                        </div>
                    </a>
                    <a href="https://www.britannica.com/place/Ajanta-Caves" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl font-serif border-solid border-b-2 pb-4 border-blue-800">Scope of Artificial Intelligence in India</h3>

                            <img src="https://sentiligentacademy.com/wp-content/uploads/2020/08/Emerging-Scope-of-AI-in-India-2048x1133.jpg" alt="" className="object-cover w-full h-68 rounded sm:h-full lg:col-span-7 dark:bg-gray-500 pt-5" />
                            <p className=' text-xl'>Although the adoption of Artificial Intelligence is still in its early stages in India, it is gradually being utilized to develop smart solutions to complex problems, and across all industries. AI encompasses several emerging technologies, including self-improving algorithms, machine learning, big data, and pattern recognition.</p>

                            <p className='text-xl'>Soon, virtually any industry or sector in India would be seen using this potent tool for getting simpler tasks done in less time. Latest innovations in the field of AI are the reason behind the rising demand for online courses in artificial intelligence in India.  </p>
                            <h1 className='text-3xl font-serif'>State of Adoption in India</h1>
                            <p className='text-xl'>IT and ITeS services in India account for 7.7% of India’s GDP (2016). To further increase this, the National Institution for Transforming India (NITI) Aayog announced an exhaustive plan along with a roadmap to focus on research in the AI field. This programme, under the slogan of “AI-for-All in India”, shows how seriously the Government is trying to integrate AI with every aspect of the country and its citizens.It is estimated that the Indian economy will grow at an annual rate of 1.3 percent with the help of this sector.</p>



                        </div>
                    </a>
                    <a href="https://101blockchains.com/top-web3-advantages/" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-bold sm:text-4xl font-serif border-solid border-b-2 pb-4 border-blue-800">Strengths and Opportunities for India in Artificial Intelligence</h3>

                            <img src={require("./images/aihealth.jpeg")} alt="" className="object-cover w-full rounded sm:h-[95vh] lg:col-span-7 dark:bg-gray-500 pt-5" />
                            <p className=' text-xl'>India is the third-largest startup ecosystem in the world today with Bangalore being at the top of its list. Most of these startups have stepped into the field of AI and are developing products in numerous domains including healthcare, agriculture, manufacturing, finance, water management, Ayurveda, marine resources, safety, retail industry and even women empowerment.  </p>

                            <p className=' text-xl'>In the health and wellness industry, the pilot project of India is to augment the productivity of pathologists and radiologists and reach the rural areas of the country. Under the projects like ‘The Digital Pathology’ and ‘Imaging Biobank’, AI models are being designed to diagnose and detect Diabetic Retinopathy and Cardiac risk at an early stage.
                                An Indian start-up ‘Forus Health’ has developed a device ‘3Nethra’ for screening common eye problems as well as complicated ones like diabetic retinopathy with the adoption of AI.   </p>
                            <p className=' text-xl'>As AI in healthcare is evolving, the Indian government is addressing the nation’s healthcare challenges and plans to help district hospitals to effectively cater to non-communicable long term diseases. It has also been working to transform more than a lakh ‘Heath and Wellness Centers’ and equip them with the best machinery using advanced technologies such as AI.
                                Another Indian start-up Automaton AI has been working on Custom AI applications in Banking, Healthcare and Gaming Industry to support and elevate Indian companies in those industries along with creating employment in the Data Labeling industry.</p>
                            <p className=' text-xl'>Such initiatives would help the doctors diagnose the diseases in early stages and provide medications accordingly to prevent the further advancement of the disease. This will not only bring down healthcare costs but also increase the chances of recovery.</p>
                            <p className=' text-xl'>Agriculture accounts for 16% of the Indian GDP and employs 50% of the total population of India. Thus, advancements in this field have been of pivotal importance to the government. To increase the farm yields and production levels, farmers are being given real-time advisory based on the weather conditions, satellite imagery and other factors that are being diagnosed using artificial intelligence.</p>
                            <p className=' text-xl'>Numerous AI-based Indian start-ups such as AgTechs, Intello Labs, Aibono etc are contributing to the agricultural sector. Intello labs monitor crops and predict farm yields with the help of image-recognition software. Aibono uses agri-data science to stabilize crop yields. The real-time monitoring of crops is also made possible to the farmers with the help of drones provided by the startup Trithi Robotics.
                                Thus, the adoption of AI in the agricultural sector has resulted in better yields, prevented crop damage with the help of regular monitoring and provided farmers with advanced solutions to their problems</p>
                            <h1 className='text-3xl font-serif'>Education</h1>
                            <p className='text-xl font-sans'>The education sector is one of the most important sectors responsible for the growth of the nation. The central and state governments have adopted effective learning tools designed for customized learning and interactive tutoring systems using AI.AI-based systems are also being developed to generate customized professional courses for the fulfillment of the gaps in the field of education.Sentiligent Academy is one of those notions to create an effective AI workforce in India with Hands-on training and industry-led Bootcamps.</p>
                            <p className='text-xl font-sans'>Many opportunities in the field of AI still lie ahead of India. Various startups and established industries are working on various projects such as smart cities, smart homes, AI-driven service delivery, crowd management, prevention of cyberattacks, intelligent safety systems and many more to provide ample opportunities for the growth of the country and its citizens.</p>
                            <p className='text-xl font-sans'>‘National AI Marketplace (NAIM)’ and ‘Data Marketplace’ are the two most pivotal areas that will take India to the forefront in the race of AI. Although initial efforts are already made, yet the full pathway is to be planned. As soon as these initiatives take good shape, India will enter the list of AI superpowers!</p>

                        </div>
                    </a>
                    <a href="https://inc42.com/resources/the-influence-of-web3-on-indian-internet-the-future-it-holds/z" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-bold sm:text-4xl font-serif border-solid border-b-2 pb-4 border-blue-800">AI is enabling 24/7 customer service</h3>

                            <img src={require("./images/aisupport.png")} alt="" className="w-full rounded sm:h-[70vh] lg:col-span-7 dark:bg-gray-500 pt-5" />
                            <p className=' text-xl'>In a diverse nation like India, integrating chatbots into the digital framework or making them accessible through the IVRS system in the educational domain could be transformative.</p>
                           <p className=' text-xl'>Thousands of chatbots are currently in use to speed up tasks to be performed by humans and save time. Chatbots are now connecting with customers and serving business purposes. Chatbots respond to customer questions and handle their problems without any human intervention. This is a ground-breaking invention of artificial intelligence that is currently dominating software applications.</p>
                        </div>
                    </a>
                    <a href="https://gadgetstouse.com/blog/2022/12/07/what-is-e-rupi-how-it-works-banks-benefits/" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-bold sm:text-4xl font-serif border-solid border-b-2 pb-4 border-blue-800">AI at our homes</h3>

                            <img src={require("./images/smarthome.jpg")} alt="" className="object-cover w-full rounded sm:h-fit pb-5 lg:col-span-7 dark:bg-gray-500 pt-5" />
                            <p className='text-xl'>We utilize artificial intelligence-based technology every day without even realizing it. For instance, we frequently utilize OkGoogle, ALEXA, or Cortana to complete various tasks with our voice commands.For voice recognition, these intelligent assistants employ machine learning and artificial intelligence that helps in identifying which voice belongs to whom. They increase their efficiency by learning from the commands of the users.</p>
                          
                            <p className='text-xl'>Additionally, you can utilize this intelligent help to carry out several tasks, like playing a song, asking a question, and making an online purchase.</p>
                           


                        </div>
                    </a>
                    <a href="https://inc42.com/resources/the-influence-of-web3-on-indian-internet-the-future-it-holds/z" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-bold sm:text-5xl font-serif border-solid border-b-2 pb-4 border-blue-800">Top 10 artificial intelligence research centres in India</h3>

                           <ol className='list-decimal pl-10'>

                            <li className='text-2xl pt-10 pb-16'>Robert Bosch Centre for Data Science and AI at IIT Madras</li>
                            <p className='text-xl'>Robert Bosch Centre for Data Science and AI at IIT Madras is set to work on multiple projects by leveraging data science and artificial intelligence with the largest network analytics, NLP, deep learning, and many more. This artificial intelligence research centre has the vision to become a globally known centre for AI research as well as data science research with cutting across disciplines to create a significant impact on India.  </p>

                            <li className='text-2xl pt-16  pb-16 underline'>NV AI Centre at IIT Hyderabad</li>
                            <p className='text-xl'>NVIDIA has established the first-ever NV AI Centre at IIT Hyderabad to boost AI research on artificial intelligence and commercial applications. This is one of the top artificial intelligence research centres in India where IIT Hyderabad has procured three NVIDIA DGX-1TM systems and two NVIDIA DGX-2TM systems. This AI research is focused on accelerating work on multiple areas of AI.    </p>

                            <li className='text-2xl pt-16 pb-16 underline'>Intel AI Research Centre at IIT Hyderabad</li>
                            <p className='text-xl'>Intel AI Research Centre is collaborating between Intel India and IIT Hyderabad to apply artificial intelligence to scale problems in India and solve multiple challenges in the healthcare and smart mobility sectors. Intel has recognized the potential of AI in India and built an artificial intelligence research centre to train students on essential AI skills. It is a key milestone in the digitalization journey with advanced AI research.</p>

                            <li className='text-2xl  pt-16 pb-16 underline'>AI Innovation Hub at Accenture</li>
                            <p className='text-xl'>Accenture is well-known for providing one of the top artificial intelligence research centres in India in three cities— Bengaluru, Hyderabad, and Pune. This AI Innovation Hub provides access to AI research, labs, studios, and many more to innovation centres and delivery centres with real-life innovation. It also consists of advanced technology centres to deliver innovation through the power of the cloud, automation, artificial intelligence, blockchain, and many more. The AI lab helps to operate at the intersection of business and technology to meet customer satisfaction efficiently and effectively.</p>

                            <li className='text-2xl  pt-16 pb-16 underline'>AI Research Lab at Wipro with IISc</li>
                            <p className='text-xl'>AI Research Lab at Wipro is one of the top artificial intelligence research centres in India focused on healthcare diagnostics, machine learning, artificial intelligence, and deep learning technology. This AI lab is also set to work on digital interfaces to generate sophisticated diagnostic, ophthalmology imaging, and medical image reconstruction techniques efficiently and effectively. The researchers want to help the healthcare sector and doctors enhance patient outcomes with artificial intelligence. IISc is also a well-known educational institution for advanced scientific as well as a technology research lab in India.</p>

                            <li className='text-2xl  pt-16 pb-16 underline'>SCAI by Microsoft Research India</li>
                            <p className='text-xl'>The Centre for Societal impact through Cloud and Artificial Intelligence (SCAI) is launched by Microsoft Research India for creating and validating technologies to have a large-scale impact on India. The AI research centre is dedicated to providing access to researchers and expertise from Microsoft Research and other groups in the company. It is focused on providing financial grants and complete access to top-notch Microsoft researchers. It is known for working with Navana Tech to build text-free and voice-assisted technology.</p>

                            <li className='text-2xl  pt-16 pb-16 underline'>Philips Innovation Centre in Bengaluru</li>
                            <p className='text-xl'>Philips Innovation Centre in Bengaluru is focused on taking India’s AI products to the global tech market. This AI research centre helps to transform ideas on artificial intelligence and machine learning into viable and tangible products to improve the economy of India efficiently and effectively. There are more than 2,500 researchers, doctors, engineers, data scientists, and software developers who are focused on healthcare transformation services. This AI lab has created a global innovation hub and a health tech platform to boost productivity and yield more revenue.  </p>


                            <li className='text-2xl  pt-16 pb-16 underline'>DAIR at IIT Delhi</li>
                            <p className='text-xl'>Data Analytics and Intelligence Research at IIT Delhi is a well-known AI research group focused on combining as well as integrating multiple fields of data science and artificial intelligence to build intelligent software systems.  The AI research centre helps to build applications of different national and international importance with solutions to fundamental scientific questions. IIT Delhi has started offering specialized courses on artificial intelligence at different levels. </p>

                            <li className='text-2xl  pt-16 pb-16 underline'>CFILT Lab at IIT, Bombay</li>
                            <p className='text-xl'>The Center for Indian Language Technology (CFILT) is one of the top AI labs in India that was set up with a generous grant from the Department of IT, Government of India in 2000 at IIT Bombay. There are around 30 research members in CFILT for PhD, Master’s, Bachelors and many more with multiple stresses on semantics to research in lexical resources, shallow parsing, machine translation, cognitive NLP, and many more with the integration of artificial intelligence and NLP.</p>

                            <li className='text-2xl  pt-16 pb-16 underline'>CAIR at DRDO, Ministry of Defence, Government of India</li>
                            <p className='text-xl'>The Centre for Artificial Intelligence and Robotics (CAIR) is one of the top artificial intelligence research centres in India focused on R&D in cutting-edge technologies like artificial intelligence, robotics, and information and communication security. The AI research leads to the development of mission-critical products for battlefield secure communication and information management systems. The AI lab is focused on leveraging the developments in cognitive and AI systems for achieving increased autonomy in unmanned systems.</p>

                           </ol>

                        </div>
                    </a>

                </div>
            </section>
        </div>

    )
}
