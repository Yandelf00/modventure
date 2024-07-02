import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { useCities } from '@/hooks/useCities'

export default function Navbar() {
    const city = useCities((state)=>state.city)
    const setMain = useCities((state)=>state.setMain)
    const setRes = useCities((state)=>state.setRes)
    const setAbout = useCities((state)=>state.setAbout)
  return (
    <nav className='h-[60px] w-[99%] flex flex-row justify-between items-center '>
        <Image alt='logo' src={logo} height={80} width={80} /> 
        <ul className='flex flex-row text-white xl:text-[14px]  text-[17px] lg:space-x-5 space-x-10'>
            <li>
                <a onClick={setMain} className={`hover:text-orange cursor-pointer ${city === 0 ? 'text-orange':''} `}>Home</a>
            </li>
            <li>
                <a onClick={setRes} className={`hover:text-orange cursor-pointer ${city === 4 ? 'text-orange':''} `}>R&H</a>
            </li>
            <li>
                <a className='hover:text-orange cursor-pointer '>Prices</a>
            </li>
            <li>
                <a onClick={setAbout} className={`hover:text-orange cursor-pointer ${city === 5 ? 'text-orange':''} `}>About</a>
            </li>
            <li>
                <a className='hover:text-orange cursor-pointer '>Support</a>
            </li>
        </ul>
    </nav>
  )
}
