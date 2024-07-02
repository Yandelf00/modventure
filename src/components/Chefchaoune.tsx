import React from 'react'
import Image from 'next/image'
import squiggle from '@/assets/squiggle.png'
import chefchaoune from '@/assets/chefchaoune.png'
import fourthbg from '@/assets/fourthbg.png'

export default function Chefchaoune() {
  return (
    <div className='w-full h-full flex flex-col relative  mt-[50px] justify-center '>
        <div className='absolute inset-x-0 bottom-0 w-full h-[70%]'
            style={{
                backgroundImage : `url(${fourthbg.src})`,
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
            }} 
        ></div>
        <div className='absolute inset-x-0 bottom-0 w-full flex justify-center items-end h-[50%]'
            style={{
                backgroundImage : `url(${squiggle.src})`,
            }} 
        >
            <div className='w-[90%] h-[70%] flex flex-row justify-between items-start scrollbar-none overflow-y-scroll space-x-5'>
                <div className='flex flex-col'>
                    <h2 className='text-orange'>Kasbah Museum</h2>
                    <p className='text-white xl:text-[13px] text-[16px] mt-3'>
                        Located in the heart of the Medina, 
                        the Kasbah Museum provides a fascinating glimpse 
                        into the regions history. The museum features traditional 
                        artifacts, local art, and beautiful Andalusian gardens.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-orange'>Spanish Mosque</h2>
                    <p className='text-white xl:text-[13px] text-[16px] mt-3'>
                        Perched on a hill overlooking Chefchaouen, 
                        the Spanish Mosque offers breathtaking panoramic views 
                        of the town and surrounding mountains. The hike to the 
                        mosque is a rewarding experience, especially at sunset.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-orange'>Ras El Maa Waterfall</h2>
                    <p className='text-white xl:text-[13px] text-[16px] mt-3'>
                        A short walk from the Medina, this 
                        small yet refreshing waterfall is a popular 
                        spot for both locals and tourists. It is the 
                        perfect place to cool off, relax, and enjoy the natural surroundings.
                    </p>
                </div>
            </div>
        </div>
        <div className='absolute top-0 flex flex-row inset-x-0 space-x-10 h-[350px]'>
            <Image src={chefchaoune} alt='chefchaoune' height={310} className='ml-5 rounded-3xl'/>
            <div className='h-full w-1/2 flex flex-col items-start mt-5 space-y-5'>
                <h1 className=' text-orange font-bold text-[20px]'>Chefchaoune</h1>
                <p className='text-white xl:text-[15px] text-[20px] scrollbar-none overflow-y-scroll '>
                    Welcome to Chefchaouen
                    Nestled in the Rif Mountains, Chefchaouen 
                    is renowned for its striking blue-washed buildings 
                    and tranquil ambiance. This charming town offers a unique
                    blend of Spanish and Moroccan influences, making it a picturesque 
                    destination for travelers seeking beauty and serenity.
                </p>
            </div>
        </div>
    </div>
  )
}