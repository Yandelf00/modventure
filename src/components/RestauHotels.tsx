import React from 'react'
import Image from 'next/image'
import secMarr from '@/assets/secondmara.png'
import noshadwo from '@/assets/noshadow.png'
import squiggle from '@/assets/squiggle.png'
import fifthbg from '@/assets/fifthbg.png'
import restauts from '@/assets/restauts.png'
import map from '@/assets/map.png'


export default function RestauHotels() {
    return (
    <div className='w-full h-full flex flex-col relative  mt-[50px] justify-center '>
        <div className='absolute inset-x-0 bottom-0 w-full h-[80%]'
            style={{
                backgroundImage : `url(${fifthbg.src})`,
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
            }} 
        ></div>
        <div className='absolute inset-x-0 bottom-0 w-full flex justify-center items-end h-[60%]'
            style={{
                backgroundImage : `url(${squiggle.src})`,
            }} 
        >
            <div className='w-[90%] h-[70%] flex flex-row justify-between items-start space-x-3'>
                <div className=''>
                    <Image src={restauts} alt='restauts' height={350} className='rounded-xl'/>
                </div>
                <div className=''>
                    <Image src={map} alt='map' height={350} className='rounded-xl'/>
                </div>
                
            </div>
        </div>
        <div className='absolute top-0 flex flex-row inset-x-0 space-x-10 h-[400px]'>
            <div className=' ml-10 h-full w-[600px] flex flex-col space-y-3'>
                <h1 className='text-white text-[40px]'>Hotels and Restaurants</h1>
                <div className='flex flex-row space-x-5'>
                    <button className='border border-1 border-white rounded-xl bg-orange w-[200px] h-[50px] text-white'>Hotels</button>
                    <button className='border border-1 border-white rounded-xl bg-darkBlue w-[200px] h-[50px] text-white'>Restaurants</button>
                </div>
                <h1 className='text-white text-[25px]'>Filters</h1>
                <div className='flex flex-row space-x-2'>
                    <button className='border border-1 border-white rounded-xl bg-lightBlue w-[100px] h-[50px] text-[11px] text-white'>Marrakech</button>
                    <button className='border border-1 border-white rounded-xl bg-lightBlue w-[100px] h-[50px] text-[11px] text-white'>Chefchaoune</button>
                    <button className='border border-1 border-white rounded-xl bg-lightBlue w-[100px] h-[50px] text-[11px] text-white'>Ouarzazate</button>
                </div>
            </div>
        </div>
    </div>
  )
}
