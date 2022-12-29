import React from 'react';
import { Parallax} from 'react-parallax';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Cloud() {
    useEffect(() => {
        Aos.init({ duration: 500 })
    })
    return (
        <div>
            {/* <img className='bg-top h-[80vh] w-screen' src={require("./images/cloud3.jpg")} alt="" /> */}
            <Parallax className='h-[70vh] top-16 '
                blur={{ min: -15, max: 15 }}
                bgImage={require('./images/cloud3.jpg')}
                bgImageAlt=" "
                strength={-200}
            >


            </Parallax>
            <div className=' '>
                <section className="dark:bg-gray-800 dark:text-gray-100 ">
                    <div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12 mt-2" >
                        <a href="https://www.britannica.com/place/Ajanta-Caves" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl">
                            <div className="p-6 space-y-2 lg:col-span-5">

                                <p className='text-xl font-roboto mt-10 font-bold'>Cloud computing is an unstoppable trend in the IT industry and the new technological dawn in India. </p>
                                <p>The extreme agility and accessibility of a cloud becomes the main reason that the future of cloud computing will be powerful. With serverless architecture, digital infrastructure, artificial intelligence and big data management, the cloud will shape our lives in the future.</p>
                                <h1 className='font-bold '>Why cloud computing?</h1>
                                <p className='font-kanit'>The reasons why cloud computing is the future is how the cloud boosts speed, perpetuates innovation, reduces cost, increases employability, and empowers people to become the digital talent of our nation.Cloud Computing fulfilled the promise of providing access to data and services anytime, anywhere, coupled with scalability and high availability, unparalleled security.All this backed up by pay-per-use model that eliminated any initial investments, there by facilitating millions of startups to come up with quick digital solutions. Cloud computing made the vision of Digital India possible and laid the foundation of a new and better interconnected nation.</p>

                            </div>
                        </a>
                        <a href="https://www.britannica.com/place/Ajanta-Caves" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
                            <div className="p-6 space-y-2 lg:col-span-5">


                                <img src="https://newsonair.com/wp-content/uploads/2022/12/Fjb3FY8VsAAcGDm.png" alt="" className="object-cover w-full h-68 rounded sm:h-[70vh] lg:col-span-7 dark:bg-gray-500 pt-5" />
                                <h1 className=' font-bold text-3xl font-serif'>India set to become world’s global cloud computing and data centre hub</h1>
                                <p className=' font-courgette text-xl'>"Data Centres are an important element of our digital ecosystem that is soon going to be the best in the world” – MoS for Electronics & IT Rajeev Chandrasekhar"</p>
                                <p className='text-xl font-mono'>India is all set to become the world’s Cloud computing & Data Centre Hub! On Thursday, December 8, the Ministry of Electronics and IT shared that the size of India’s digital economy is estimated to grow from $200 billion in 2017-18 to a staggering $1 trillion by 2025.The Indian economy has taken over the UK’s, making it the 5th largest in the world. It is witnessing a transition from an emerging to a developed market economy. Digital India has a key role and is slated to play a key role in this journey.</p>
                                <p className='text-xl font-mono'>Most recently, with over a billion mobile phones and more than 700 million internet subscribers, India has also witnessed exponential growth in digital commerce, digital entertainment and the use of social media. Furthermore, India’s mobile data consumption is already the highest in the world and is constantly increasing.</p>
                                <h1 className=' font-extrabold text-2xl font-roboto'>Evolution in cloud investments and improved cloud maturity</h1>
                                <p className='text-xl font-kanit'>The following statistics are as per the NASSCOMInsight report that states an exponential growth in cloud investments across the globe and in India:</p>
                                <ol className='list-decimal text-xl font-kanit'>
                                    <li >Global Public Cloud spend, currently valued at $332 bn as of 2021, is projected to grow by 20% YoY till 2022</li>
                                    <li>SaaS remains the largest global market segment at 39% share; PaaS, IaaS are expected to grow exponentially</li>
                                    <li>Investments in Cloud Management, Storage Networks, Security & Back-up services are expected to grow by 31% YoY till 2022; reflecting demand for Cloud-enabled infrastructural upgradations</li>
                                    <li>Hybrid Cloud adoption in Indian organizations is set to grow by 49% in the next 3 years</li>
                                </ol>
                                <h1 className=' font-extrabold text-2xl font-roboto'>Rise of new age cloud skills</h1>
                                <p className='text-xl font-kanit'> ‘Digital-First’ is the latest buzz word for every business that also increases the demand for cloud computing experts across the globe. Cloud Developer, Cloud Security Engineer, Front-end developer, Back-end Developer, Solutions Architect, Cloud Security Specialist, Cloud Migration Specialist and many more profiles are in demand that needs skilled cloud experts.  As per the report, India alone recorded nearly 379,000 job openings for cloud roles in the past year, and this demand is only set to grow with time.</p>
                                <p className='text-xl font-kanit'> “The demand for digital skills today (including cloud) is around 8-10X higher than the supply that exists in India. To make India the first cloud-nation, NASSCOMInsights has worked on the report to understand the existing cloud talent landscape in India and the demand-supply analysis by 2025. We could then realize the full potential of cloud and in the process, make India the talent nation for the digital world,” says Debjani Ghosh, NASSCOM President.</p>



                            </div>
                        </a>
                        <a href=" " target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
                            <div className="p-6 space-y-2 lg:col-span-5">


                                <img src={require("./images/Startup.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-[80vh] lg:col-span-7 dark:bg-gray-500 pt-5" />
                                <h1 className=' font-bold text-3xl font-serif'>Cloud computing: Empowering small businesses in India by securing and storing data</h1>
                                <p className='text-xl font-roboto font-medium'>Until about a decade ago, the biggest challenge for small businesses was the humungous costs associated with acquiring the technology. Large enterprises with deep pockets were more than a match for bootstrapped enterprises that simply could not invest in CAPEX. Cloud computing, however, challenged this status quo.Small businesses with limited infrastructure and manpower have turned to on-demand pay-per-use cloud solutions. They are using cloud to either augment their business capabilities using SaaS or just using cloud for storage. Either way, cloud has become indispensable for MSMEs.MSMEs embraced cloud computing, and accessed scalable, secure, and enterprise-grade technology to extend their capabilities putting them in the league of large enterprises. </p>
                                <h2 className='text-2xl font-bold font-roboto'>An ecosystem for building stronger MSMEs</h2>
                                <p className='text-xl font-roboto font-medium'>In India, the digital shift during the pandemic greatly expanded the number of MSMEs which currently stands at about 90 lakh units. (IBEF). Digital tools in the form of services and platforms are helping MSMEs embrace disruption, fostering healthy competition, and leading to better results and overall economic growth.</p>
                                <p className='text-xl font-roboto font-medium'>Pay-as-you-go cloud computing, on-demand services and exemption from upfront commitment are helping small businesses move from CAPEX to OPEX costs. And government policies are creating the perfect ecosystem for their adoption. In India, the Ministry of Micro, Small & Medium Enterprises introduced the ‘Digital MSME’ scheme to disburse a subsidy of up to Rs 1 lakh for micro and small enterprises to encourage them to use cloud computing for information and communications technology applications. Cloud technologies help MSMEs use cutting edge applications and infrastructure economically, while cutting down on CAPEX infrastructure or heavy reliance on IT specialists. </p>
                                <p className='text-xl font-roboto font-medium'>
                                When using cloud as SaaS, MSMEs are benefitted with best-in-class software coupled with standardized business processes. Cloud eliminates overheads on data backups and data privacy and helps MSMEs avoid costs incurred on infrastructure. It powers automatic updates, assures application availability, and helps small business with much-needed business continuity and resilience.
                                </p>
                                
                                



                            </div>
                        </a>

                    </div>
                </section>
            </div>
        </div>
    )
}
