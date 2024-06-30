import React from 'react'

export default function Hero() {
  return (
    <div className='xl:max-w-[700px] max-w-[900px] h-[400px] flex flex-col  mt-[150px] justify-center'>
        <h1 className='text-white font-bold xl:text-[50px] text-[70px]'>Discover Morocco During</h1>
        <h1 className='text-white font-bold xl:text-[50px] text-[70px]'>The 2030 Word Cup</h1>
        <h2 className='text-white xl:text-[20px] text-[30px] mt-5'>The ultimate guide for an</h2>
        <h2 className='text-white xl:text-[20px] text-[30px]'>unforgettable adventure </h2>
        <div className='flex flex-row mt-10 space-x-2'>
            <button className='
                border
                border-1
                border-white 
                bg-orange
                text-white
                xl:h-[50px]
                xl:w-[150px]
                h-[70px]
                w-[200px]
                rounded-md
            '>Explore</button>
            <button className='
                border
                border-1 
                border-white
                bg-darkBlue
                text-white
                xl:h-[50px]
                xl:w-[150px]
                h-[70px]
                w-[200px]
                rounded-md
            '>Learn More</button>
        </div>
    </div>
  )
}
