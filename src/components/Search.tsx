import React from 'react'
import Image from 'next/image'
import search from '@/assets/search.png'

export default function Search() {
  return (
    <div className='h-full bg-orange w-[10%] flex justify-center items-start pt-4'>
        <div className='cursor-pointer'>
          <Image src={search} alt='logo' height={20} width={20}/>
        </div>
    </div>
  )
}
