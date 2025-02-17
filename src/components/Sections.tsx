import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import marrakech from '@/assets/marrakech.png'
import second from '@/assets/second.png'
import third from '@/assets/third.png' 
import { useCities } from '@/hooks/useCities'

export default function Sections() {
    const city = useCities((state)=>state.city)
    const setMarra = useCities((state)=>state.setMarra)
    const setChef = useCities((state)=>state.setChef)
    const setOua = useCities((state)=>state.setOua)
  return (
    <div className='h-full w-[90%] bg-fadDarkBlue flex flex-col px-5 xl:pb-0 pb-10 overflow-x-hidden scrollbar-thin scrollbar-none  overflow-scroll '>
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
        <div className='mt-16 w-full flex flex-col items-center '>
            <Image src={marrakech} onClick={setMarra} alt='marrakech' height={170} className={`rounded-md cursor-pointer ${city == 1 ? 'shadow-orange shadow-xl':''}`} />
            <div className='mt-3 text-white w-full text-center text-[13px] '>Marrakech : The vibrant heart of Morocco</div>
        </div>
        <div className='mt-3 w-full flex flex-col items-center '>
            <Image src={second} onClick={setChef} alt='second' height={170} className={`rounded-md cursor-pointer ${city == 2 ? 'shadow-orange shadow-xl' : ''} `} />
            <div className='mt-3 text-white w-full text-center text-[13px] '>Chefchaoune : The blue city of Morocco</div>
        </div>
        <div className='mt-3 w-full flex flex-col items-center '>
            <Image src={third} onClick={setOua} alt='third' height={170} className={`rounded-md cursor-pointer ${city == 3 ? 'shadow-orange shadow-xl' : ''}`} />
            <div className='mt-3 text-white w-full text-center text-[13px] '>Ouarzazate : The Hollywood of Africa</div>
        </div>
    </div>
  )
}
