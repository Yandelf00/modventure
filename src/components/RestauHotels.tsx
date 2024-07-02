"use client"
import React from 'react'
import Image from 'next/image'
import secMarr from '@/assets/secondmara.png'
import noshadwo from '@/assets/noshadow.png'
import squiggle from '@/assets/squiggle.png'
import fifthbg from '@/assets/fifthbg.png'
import restauts from '@/assets/restauts.png'
import map from '@/assets/map.png'
import Map from './Map' 
import Mar from './rAndH/Mar' 
import Oua from './rAndH/Oua'
import Chef from './rAndH/Chef'
import { useFilters } from '@/hooks/useFilters'


export default function RestauHotels() {
    const filter = useFilters((state)=>state.filter)
    const setOne = useFilters((state)=>state.setFilOne)
    const setTwo = useFilters((state)=>state.setFilTwo)
    const setThree = useFilters((state)=>state.setFilThree)
    return (
    <div className='w-full h-full flex flex-col relative  mt-[50px] justify-center '>
        <div className='absolute inset-x-0 bottom-0 w-full h-[80%]'
            style={{
                backgroundImage : `url(${fifthbg.src})`,
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
            }} 
        ></div>
        <div className='absolute inset-x-0 bottom-0 w-full flex justify-center items-end h-[60%] scrollbar-none overflow-y-scroll'
            style={{
                backgroundImage : `url(${squiggle.src})`,
            }} 
        >
            {filter === 1 ? (<Mar/>) : (<></>)}
            {filter === 2 ? (<Chef/>) : (<></>)}
            {filter === 3 ? (<Oua/>) : (<></>)}
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
                    <button onClick={setOne} className={`border border-1 ${filter === 1 ? 'bg-white text-darkBlue':'text-white'} border-white rounded-xl bg-fadDarkBlue w-[130px] h-[45px] text-[11px] `}>Marrakech</button>
                    <button onClick={setTwo} className={`border border-1 ${filter === 2 ? 'bg-white text-darkBlue' : 'text-white'} border-white rounded-xl bg-fadDarkBlue w-[130px] h-[45px] text-[11px] `}>Ouarzazate</button>
                    <button onClick={setThree} className={`border border-1 ${filter === 3 ? 'bg-white text-darkBlue' : 'text-white'} border-white rounded-xl bg-fadDarkBlue w-[130px] h-[45px] text-[11px] `}>Chefchaoune</button>
                </div>
            </div>
        </div>
    </div>
  )
}
