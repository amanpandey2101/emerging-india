import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";


export default function Web3() {
  useEffect(()=>{
    AOS.init({duration:1000});
 },[])
  return (
    <div className='web3'>
      {/* <h1 className='text2 absolute z-10 text-white top-[10vh] text-8xl left-[36vw] font-sans'> WEB 3.0 </h1> */}
      <img className=' h-[80vh] w-screen' src={require("./images/web33.jpg")} alt="" />
      <h1 className='text1 absolute z-10 top-[15vh] text-white text-7xl left-8 font-serif' data-aos="fade-right">Leading India Next Generation  </h1>
      <h1 className='text1 absolute z-10 top-[34vh] text-white text-6xl left-[10vw] font-serif' data-aos="fade-left">Internet</h1>
      <h1 data-aos="fade-right" className='text1 absolute z-10 top-[50vh] text-white text-5xl left-[12vw] font-serif'>is Here</h1>
      <div className='bg-white w-screen' >
        <h1 className=' pt-12 text-5xl font-sans font-bold'>The Influence Of Web3 On Indian Internet & The Future It Holds</h1>
        <ul className='pl-10 text-xl font-medium pt-10 list-disc'>
          <li >Web3 intends to democratise the way creators create content, operations go decentralised and dependency on intermediaries reduces, yet, the tech still looks too good to be true</li>
          <li >Like any other use case of blockchain, there is no first movers’ advantage and its potential is only revealed when multiple parties join the chain</li>
          <li >While Web3 may become the next best thing in 2022, stakeholders, especially regulators will have to enable the adoption to help with wide-scale uptake.</li>
        </ul>

        <section className="dark:bg-gray-800 dark:text-gray-100 ">
          <div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12" >
            <a href="https://www.britannica.com/place/Ajanta-Caves" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl font-serif">What is WEB 3.0</h3>

                <img src="https://blog.liquid.com/hubfs/WEB-3.0-2_220120.png" alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <p className='text-xl'>Web 3.0 mainly focuses on connecting data in a decentralised way, instead of having it stored in centralised repositories. Besides, in the Web3 world, computers will be able to interpret information as intelligently as humans. Machines and humans will be able to connect more seamlessly with data amongst themselves. </p>
                <p className='text-xl'>Compared to web 2, Web3 is far more powerful in terms of its ability to process information. Ultimately, Web3 will enable a significantly smarter and better user experience. For example, the financial services industry, including banking, will be significantly impacted by Web3. Banks will be able to serve their customers better, with much less human intervention and in a much more personalised manner. </p>
                <p className='text-xl'>Web3 promises to give equal power to all content creators. It promises that anyone can create and post content, without having to pay large corporations or be guided by the Government or regulators. </p>
              </div>
            </a>
            <a href="https://www.britannica.com/place/Ajanta-Caves" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl font-serif ">How can web3 change the internet in India?</h3>

                <img src={require("./images/e-rupee.jpg")} alt="" className="object-cover w-full h-68 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <p className=' text-xl'>The most striking highlight in answers to “What are the advantages of Web 3.0 application?” would refer to the impact of web3 on the internet itself. A detailed understanding of how web3 would change user experiences can give you a basic impression of its advantages. Here are some of the notable elements in the web 3.0 architecture which prove its potential for changing the internet.  </p>
                <ul className='list-disc text-xl pl-8'>
                  <li className='absolute left-28 font-bold'> BlockChain</li>
                  <p className='pt-10'>Most of the developments in web3 right now utilize blockchain technology for addressing many notable issues associated with web 2.0. Blockchain plays a central role as the reason for top web 3.0 advantages such as decentralization. Blockchain technology is vital in the world of web3 as it facilitates the development of an open and trustless ecosystem. In addition, the decentralized consensus mechanism with blockchain can help in enabling flexible interaction among users without the need for central authorities.</p>
                  <li className='absolute left-28 font-bold'>Semantic Web</li>
                    <p className='pt-10'>The outline of notable advantages of web3 would also reflect on the feature of semantic web. As a matter of fact, the operational model of web3 must have the capability of processing a varying assortment of digital content. Web3 can rely on semantic web for making use of information in digital content through development of complex associations and inferences regarding contextual data.
                    </p>
                  <li className='absolute left-28 font-bold'>Security and Ubiquity</li>
                    <p className='pt-10'>The most distinctive trait of web3 points to the creation of a new era of interconnected devices along with multiplatform interoperability. The decentralized network infrastructure would enable users to have ownership of their data. In addition, web3 would help applications in becoming more independent from devices, with support for working on different hardware and software platforms. 

 
                    </p>
                  <li className='absolute left-28 font-bold'>Immersive 3D Experiences</li>
                    <p className='pt-10'>The web3 ecosystem would also feature more 3D graphics, particularly with the use of advanced VR technologies. Any discussion on “What are the advantages of web 3.0 application?” would showcase how web3 can embrace immersive experiences for dissolving the barriers between physical and virtual worlds. The immersive technology components such as VR, AR or XR technologies could help in introducing new approaches for interaction with products and services. 
                    </p>

                </ul>
              </div>
            </a>
            <a href="https://101blockchains.com/top-web3-advantages/" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-bold sm:text-4xl font-serif">Advantages of Web3.0</h3>

                <img src="https://101blockchains.com/wp-content/uploads/2022/09/Advantages-of-Web3.webp" alt="" className="object-cover w-full rounded sm:h-[95vh] lg:col-span-7 dark:bg-gray-500" />
                <p className=' text-xl'>The most striking highlight in answers to “What are the advantages of Web 3.0 application?” would refer to the impact of web3 on the internet itself. A detailed understanding of how web3 would change user experiences can give you a basic impression of its advantages. Here are some of the notable elements in the web 3.0 architecture which prove its potential for changing the internet.  </p>
                <ul className='list-decimal text-lg pl-8'>
                  <li className='absolute left-28 font-bold text-2xl pt-5'>Control over Data Ownership</li>
                  <p className='pt-16'>Take a look around at all the online services and platforms you use on a daily basis. You enter your personal information on different platforms to obtain access to different services. You create content such as pictures or videos and share them online on Facebook and Instagram. Amidst all this, you must have assumed that your personal information in an Amazon account or the photos in your Facebook profile are secure and in your control.However, that is not the case, as centralized authorities like Facebook, Google, and Amazon monetize user data in different ways. The web3 advantages by design would ensure that end-users would have complete control over the data they own. Users could share information according to their preferences. Therefore, web3 might provide the benefits of overcoming monopoly over user data by the tech giants</p>
                  <li className='absolute left-28 font-bold text-2xl pt-5'>Ubiquitous Access to Data</li>
                    <p className='pt-16'>The interconnectivity aspect of web3 also serves as a vital foundation for a notable web 3.0 advantage. Web3 would largely involve the creation of an interconnected ecosystem that allows interoperability and seamless access to information. However, IoT connectivity would drive one of the top web3 benefits, i.e., ubiquitous access to data. Users can access any type of information from any location with any device. Web3 could ensure that you can connect to the internet even without using your computer or smartphone. 
                    </p>
                  <li className='absolute left-28 font-bold text-2xl pt-5'>Freedom for Interactions</li>
                    <p className='pt-16'>The biggest entry in a list of top web 3.0 advantages would focus on how it helps in ensuring seamless interactions among users. Web3 does not have any centralized authority controlling access of users as it builds up on the permissionless trait of blockchain. Public blockchain networks serving as the foundations of web3 applications could help in ensuring that anyone can access web3. Users would not have to encounter the barriers of income, gender, sexual orientation, social status or geographical location to access digital services. The basic design of web3 can help users transfer digital assets, wealth or information efficiently at faster speeds worldwide. Without any centralized authority over the transactions, web3 can offer freedom to internet users to capitalize on the true potential of the web.

 
                    </p>
                  <li className='absolute left-28 font-bold text-2xl pt-5'>Advantages for Creators</li>
                    <p className='pt-16'>The arrival of web3 has signaled a promising opportunity for all content creators. Most content creators struggle to get the actual value for their work, owing to the intermediaries in different channels for reaching their audience. The key web 3.0 advantages from the features of tokenization and creator economy could serve notable benefits for creators. First of all, web3 would ensure decentralized control over security of digital assets such as tokens and data. On the other hand, creators would have complete control over the ownership of their work. At the same time, the creator economy could also help creators find new tools and marketplaces for expanding their reach. 
                    </p>
                  <li className='absolute left-28 font-bold text-2xl pt-5'> Better Security</li>
                    <p className='pt-16'>The final and the most important entry among web3 advantages would refer to the assurance of better security. Blockchain could provide the assurance of decentralization and cryptography for ensuring safeguards for user data. The consensus mechanisms and basic design of blockchain make it impervious to common security breaches. While 51% of attacks are still one of the possibilities for hacking web3 applications and systems, the evolution of new security measures and best practices can solve the challenges.
                    </p>

                </ul>
              </div>
            </a>
            <a href="https://inc42.com/resources/the-influence-of-web3-on-indian-internet-the-future-it-holds/z" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-bold sm:text-4xl font-serif">Challanges of Implementation</h3>

                <img src={require("./images/challenges.webp")} alt="" className="object-cover w-full rounded sm:h-fit lg:col-span-7 dark:bg-gray-500" />
                <p className=' text-xl'>Blockchain is a very powerful technology and many have been talking about its potential for almost a decade now. However, it still remains in its infancy and has its challenges. Thus, for Web3 to succeed, some of the problems the industry need to be overcome are: </p>
                <ul className='list-decimal text-lg pl-8'>
                  <li className='absolute left-28 font-bold text-2xl pt-5'>Slow transactions processing</li>
                  <p className='pt-16'>For Bitcoin-based blockchain, the processing speed is generally around 4.6 transactions per second, which falls short of the requirement that something as potentially huge as Web3 would require. </p>
                  <li className='absolute left-28 font-bold text-2xl pt-5'>Extremely energy-intensive and complex</li>
                    <p className='pt-16'>It is said that the Bitcoin blockchain consumes about the same amount of energy as the whole of Finland. Plus, interacting with Web3 applications will require extra steps, software and education. This can be a hurdle to adoption. It’s much more complex compared to Web2, whose simplicity was the main reason behind its extreme popularity.  
                    </p>
                  <li className='absolute left-28 font-bold text-2xl pt-5'>Legal irregularities</li>
                    <p className='pt-16'> One of the primary challenges of any use case of blockchain is the delay in government or regulatory bodies deciding the basic guidance and giving the high-level guidelines. While Bitcoin is a decade long use case, many countries, including India, are yet to have proper guidance around it. And till the time that happens, we won’t find Web3. 

 
                    </p>
                  <li className='absolute left-28 font-bold text-2xl pt-5'>Advantages for Creators</li>
                    <p className='pt-16'>The arrival of web3 has signaled a promising opportunity for all content creators. Most content creators struggle to get the actual value for their work, owing to the intermediaries in different channels for reaching their audience. The key web 3.0 advantages from the features of tokenization and creator economy could serve notable benefits for creators. First of all, web3 would ensure decentralized control over security of digital assets such as tokens and data. On the other hand, creators would have complete control over the ownership of their work. At the same time, the creator economy could also help creators find new tools and marketplaces for expanding their reach. 
                    </p>
                  <li className='absolute left-28 font-bold text-2xl pt-5'> Better Security</li>
                    <p className='pt-16'>The final and the most important entry among web3 advantages would refer to the assurance of better security. Blockchain could provide the assurance of decentralization and cryptography for ensuring safeguards for user data. The consensus mechanisms and basic design of blockchain make it impervious to common security breaches. While 51% of attacks are still one of the possibilities for hacking web3 applications and systems, the evolution of new security measures and best practices can solve the challenges.
                    </p>

                </ul>
              </div>
            </a>
            <a href="https://gadgetstouse.com/blog/2022/12/07/what-is-e-rupi-how-it-works-banks-benefits/" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-bold sm:text-4xl font-serif">India's own Digital Currency</h3>

                <img src={require("./images/e-rupee2.webp")} alt="" className="object-cover w-full rounded sm:h-fit pb-5 lg:col-span-7 dark:bg-gray-500" />
                <h1 className='text-3xl font-bold'>What is retail e-rupee/e-RUPI?</h1>
                <p className='text-xl'>e-Rupee is a prepaid e-voucher that can be redeemed without any card, app, or net banking. It is launched by the National Payments Corporation of India (NPCI) in partnership with the Department of Financial Services, the National Health Authority, the Ministry of Health and Family Welfare (MoHFW), and the leading banks in India. e-RUPI is built on the existing UPI platform, to facilitate an improved transaction experience to its users.</p>
                <h1 className='text-3xl font-bold'>What is the need for e-rupee?</h1>
                <p className='text-xl'>e-rupee will have better success rates than any other form of transaction and is also secure. The current UPI system has a failure rate of 1.2% or 1.3% which is a big problem considering the number of daily transactions number. The digital rupee will reduce settlement risks and incidences of failed transactions.</p>
                <h1 className='text-3xl font-bold'>Which banks can issue e-rupee?</h1>
                <p className='text-xl'>e-rupee will have better success rates than any other form of transaction and is also secure. The current UPI system has a failure rate of 1.2% or 1.3% which is a big problem considering the number of daily transactions number. The digital rupee will reduce settlement risks and incidences of failed transactions.</p>
                <h1 className='text-3xl font-bold'>How will e-rupee work?</h1>
                <p className='text-xl'>e-rupee is basically a banknote in digital form, you can call them NFTs in other words. This works just like an NFT where you buy digital art with real money and then save it in your wallet. In the same way, you can buy these digital currency notes of a particular value and then redeem them for the same amount of money you paid for them.</p>
                <h1 className='text-3xl font-bold'>Do I need a Bank Account to use the e-Rupee?</h1>
                <p className='text-xl'>Yes, a bank account is required to get an e-rupee or to do transactions with anyone. The central bank will keep a track of these issued tokens in their balance sheet. Every token or e-rupee has a serial number just like physical banknotes. It will be issued in similar denominations as the physical fiat money.</p>
                <h1 className='text-3xl font-bold'>What are the benefits of e-rupee?</h1>
                <p className='text-xl'>Primarily meant to deliver welfare scheme money to the needy without any physical contact. The following are some benefits of this digital voucher:</p>
                <ul className='list-disc text-xl font-sans'>
                  <li>The beneficiaries will be able to redeem the voucher without a card, mobile app, or net banking access.</li>
                <li>Moreover, since it is pre-paid voucher, it will ensure timely payment to the beneficiary without involving any intermediary.</li>
                <li>The service provider will be paid only after the coupon is successfully redeemed by the beneficiary.</li>
                <li>It cannot be misused to buy something else.</li>
                </ul>

            
              </div>
            </a>
            <a href="https://inc42.com/resources/the-influence-of-web3-on-indian-internet-the-future-it-holds/z" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-bold sm:text-5xl font-serif">Conclusion</h3>

                <img src={require("./images/crypto.jpg")} alt="" className="object-cover w-full rounded sm:h-[95vh] lg:col-span-7 dark:bg-gray-500" />
                <p className=' text-xl'>In the context of India, blockchain technology, if adopted well, can improve public services and identity-based social development solutions. While the central government has recognized the value of developing blockchain technology, the next step is to pay closer attention to crypto's potential use cases besides digital assets which is just one of the use cases. Crypto is a powerful trend that is shaping economies around the world. The industry is confident that the policymakers will work together to formulate regulations enabling our economy to reap the full benefits the global crypto industry has to offer. </p>
               <p className='text-xl'>India has featured amongst the top five countries for embracing new digital assets. It can further benefit immensely if the industry and government work together to map out a regulatory framework that will enable crypto to gain legitimacy and protect users' interests. A recent report, 'The India Web3 Startup Landscape’ by NASSCOM, rightly mentions that Web3 holds greater promise in various areas, but the challenges with regulations are a critical impeding factor that will require decisive ecosystem action.</p>
               <p className='text-xl'>To summarize, crypto is core to the blockchain and Web3 ecosystem; therefore, in an effort to deploy and advance blockchain infrastructure to improve public services, the government must take a pragmatic approach. The journey has started. Nonetheless, the direction in which it will move will depend on how soon we create an ecosystem that embraces crypto. A more holistic approach is imperative for the growth of the industry.</p>
            
              </div>
            </a>

          </div>
        </section>
      </div>
      <ScrollToTop width="40px" smooth top="1000" />
    </div>
  )
}
