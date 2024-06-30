import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'


export default function Sections() {
  return (
    <div className='h-full w-[90%] bg-fadDarkBlue flex flex-col px-5'>
        <div className='flex flex-row justify-between items-center mt-2'>
            <h2 className='text-white xl:text-[15px] text-[20px]'>Sections</h2>
            <div className='xl:hidden block'>
                <Image src={logo} alt='logo'height={100} width={100}/>
            </div>
            <div className='xl:block hidden'>
                <Image src={logo} alt='logo'height={80} width={80}/>
            </div>
        </div>
        <div className='w-full h-1 bg-white rounded-full opacity-30 mt-2'></div>
    </div>
  )
}
