import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'

export default function Navbar() {
  return (
    <nav className='h-[60px] w-[99%] flex flex-row justify-between items-center '>
        <Image alt='logo' src={logo} height={80} width={80} /> 
        <ul className='flex flex-row text-white xl:text-[14px]  text-[17px] lg:space-x-5 space-x-10'>
            <li>
                <a className='hover:text-orange cursor-pointer '>Home</a>
            </li>
            <li>
                <a className='hover:text-orange cursor-pointer '>Features</a>
            </li>
            <li>
                <a className='hover:text-orange cursor-pointer '>Community</a>
            </li>
            <li>
                <a className='hover:text-orange cursor-pointer '>about</a>
            </li>
            <li>
                <a className='hover:text-orange cursor-pointer '>Support</a>
            </li>
        </ul>
    </nav>
  )
}
