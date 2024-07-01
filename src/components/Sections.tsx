import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import marrakech from '@/assets/marrakech.png'
import second from '@/assets/second.png'
import third from '@/assets/third.png' 

export default function Sections() {
  return (
    <div className='h-full w-[90%] bg-fadDarkBlue flex flex-col px-5 justify-between xl:pb-0 pb-10 xl:overflow-scroll'>
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between items-center mt-2'>
                <h2 className='text-white xl:text-[15px] text-[20px]'>Sections</h2>
                <div className='xl:hidden block'>
                    <Image src={logo} alt='logo'height={90} width={90}/>
                </div>
                <div className='xl:block hidden'>
                    <Image src={logo} alt='logo'height={80} width={80}/>
                </div>
            </div>
            <div className='w-full h-1 bg-white rounded-full opacity-30 mt-2'></div>
        </div>
        <div className='flex flex-col'>
            <div className='text-orange mt-3 xl:text-[15px] text-[20px] font-semibold'>Discover Morocco</div>
            <div className='mt-3 text-white xl:text-[15px] text-[17px]'>Explore the hidden gems of Morocco, from the buslting souks of Marrakech to the serene sands of Sahara</div>
            <div className='w-full h-1 bg-white rounded-full opacity-30 mt-2'></div>
        </div>
        <div className='mt-3 w-full flex flex-col items-center '>
            <Image src={marrakech} alt='marrakech' height={100} className='rounded-md' />
            <div className='mt-3 text-white xl:w-full w-[70%] text-[13px] '>Marrakech : The vibrant heart of Morocco, famous for its lively markets and historic sites.</div>
        </div>
        <div className='mt-3 w-full flex flex-col items-center '>
            <Image src={second} alt='second' height={100} className='rounded-md ' />
            <div className='mt-3 text-white xl:w-full w-[70%] text-[13px] '>Marrakech : The vibrant heart of Morocco, famous for its lively markets and historic sites.</div>
        </div>
        <div className='mt-3 w-full flex flex-col items-center '>
            <Image src={third} alt='third' height={100} className='rounded-md' />
            <div className='mt-3 text-white xl:w-full w-[70%] text-[13px] '>Marrakech : The vibrant heart of Morocco, famous for its lively markets and historic sites.</div>
        </div>
    </div>
  )
}
