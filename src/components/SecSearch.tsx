import React from 'react'
import Image from 'next/image'
import search from '@/assets/search.png'

export default function SecSearch() {
  return (
    <div className="relative w-[80%] text-gray-600 mr-1">
            <button type="submit" className="absolute flex justify-center items-center right-0 top-0 mt-2 mr-2">
                <Image src={search} alt='seach' height={10} />
            </button>
            <input
                type="search"
                name="search"
                placeholder='search'
                className="bg-fadDarkBlue h-8 px-5 pr-10 w-full text-white rounded-md text-sm focus:outline-none"  
            />
    </div>
  )
}