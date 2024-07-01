import React from 'react'
import Image from 'next/image'
import secMarr from '@/assets/secondmara.png'
import noshadwo from '@/assets/noshadow.png'
import squiggle from '@/assets/squiggle.png'


export default function Marrakech() {
  return (
    <div className='w-full h-full flex flex-col relative  mt-[50px] justify-center '>
        <div className='absolute inset-x-0 bottom-0 w-full h-[70%]'
            style={{
                backgroundImage : `url(${noshadwo.src})`,
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
            }} 
        ></div>
        <div className='absolute inset-x-0 bottom-0 w-full flex justify-center items-end h-[50%]'
            style={{
                backgroundImage : `url(${squiggle.src})`,
            }} 
        >
            <div className='w-[90%] h-[70%] flex flex-row justify-between items-start space-x-5'>
                <div className='flex flex-col'>
                    <h2 className='text-orange'>Jemaa el-Fnaa</h2>
                    <p className='text-white xl:text-[13px] text-[16px] mt-3'>
                        The bustling main square of Marrakech is a UNESCO World Heritage site and 
                        the heart of the citys cultural life. By day, its a lively marketplace filled 
                        with vendors selling fresh produce, spices, and traditional crafts. As night falls, 
                        it transforms into an open-air theater with storytellers, musicians, and food stalls 
                        offering Moroccan delicacies.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-orange'>Koutoubia Mosque</h2>
                    <p className='text-white xl:text-[13px] text-[16px] mt-3'>
                        The largest mosque in Marrakech, Koutoubia is 
                        an architectural masterpiece and a symbol of the city. 
                        Its stunning minaret, which stands at 77 meters, is visible
                        from miles around. While non-Muslims cannot enter, the exterior and 
                        the surrounding gardens are a must-see.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-orange'>Majorelle Garden</h2>
                    <p className='text-white xl:text-[13px] text-[16px] mt-3'>
                        A botanical haven designed by the French artist 
                        Jacques Majorelle and later owned by Yves Saint Laurent. 
                        The garden is a serene escape from the citys hustle and bustle, 
                        featuring exotic plants, vibrant blue buildings, and a museum dedicated 
                        to Berber culture.
                    </p>
                </div>
            </div>
        </div>
        <div className='absolute top-0 flex flex-row inset-x-0 space-x-10 h-[400px]'>
            <Image src={secMarr} alt='secmar' height={350} className='ml-5 rounded-3xl'/>
            <div className='h-full w-1/2 flex flex-col items-start mt-5 space-y-5'>
                <h1 className=' text-orange font-bold text-[20px]'>Marrakech</h1>
                <p className='text-white xl:text-[15px] text-[20px]'>
                    The Vibrant Heart of Morocco
                    Welcome to Marrakech Dive into the 
                    enchanting world of Marrakech, a city 
                    that perfectly blends ancient traditions with modern allure. 
                    Known as the Red City for its distinct terracotta-colored buildings, 
                    Marrakech is a sensory delight with its vibrant souks, historical landmarks, 
                    and lush gardens.
                </p>
            </div>
        </div>
    </div>
  )
}
