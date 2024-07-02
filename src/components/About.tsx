import React from 'react'
import Image from 'next/image'
import comp from '@/assets/comp.png'

export default function About() {
  return (
    <div className='h-full w-full mt-10 lg:mt-0 flex justify-center items-center'>
        <div className='h-[90%] w-[90%] backdrop-blur-md rounded-2xl flex flex-row overflow-y-scroll scrollbar-none'>
            <div className='w-1/2 max-h-full flex flex-col pt-2 pl-2 overflow-scroll scrollbar-none'>
                    <h1 className='text-white font-bold text-[30px]'>About Us</h1>
                    <h2 className='text-orange mt-5 text-[20px] font-semibold'>Welcome to Morocco</h2>
                    <p className='text-white text-[17px] xl:text-[15px]  mt-3'>
                         Your guide to exploring the rich culture 
                         and beauty of Morocco. Whether you are 
                         planning a trip to vibrant cities, tranquil 
                         mountains, or serene deserts, we are here to 
                         help you make the most of your adventure.
                    </p>
                    <h2 className='text-orange mt-5 text-[20px] font-semibold'>Who We Are</h2>
                    <p className='text-white text-[17px] xl:text-[15px] mt-3'>
                        We are a team of travel enthusiasts and local experts 
                        passionate about showcasing Moroccos best. Our 
                        firsthand experience and deep knowledge ensure 
                        accurate and up-to-date information.
                    </p>
                    <h2 className='text-orange mt-5 text-[20px] font-semibold'>What We Offer</h2>
                    <ul className='text-white text-[17px] xl:text-[15px] mt-3 space-y-2'>
                        <li>Destination Guides: In-depth 
                            guides to cities and regions like 
                            Marrakech, Chefchaouen, Ouarzazate, and more.
                        </li>
                        <li>
                            Cultural Insights: Information on Moroccos history, 
                            architecture, traditions, and festivals.
                        </li>
                        <li>
                            Travel Tips: Essential tips for planning your trip, 
                            including the best times to visit and how to get around.
                        </li>
                        <li>
                            Personalized Recommendations: Accommodations, dining, and 
                            activities for all budgets.
                        </li>
                        <li>
                            Interactive Features: Maps, photo galleries, and videos to 
                            immerse yourself in Moroccos beauty.
                        </li>
                    </ul>
            </div>
            <div className='w-1/2 flex justify-center items-end'>
                <Image src={comp} height={500} alt='comp' className='xl:hidden block'/>
                <Image src={comp} height={400} alt='comp' className='xl:block hidden'/>
            </div>
        </div>
    </div>
  )
}

