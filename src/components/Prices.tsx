"use client"
import React, { useEffect, useState } from 'react'
import SecSearch from './SecSearch'
import Image from 'next/image'
import restaut from '@/assets/restaut.png'
import hotel from '@/assets/hotel.png'
import restautMar from '@/data/Marrakech/restauts.json'
import search from '@/assets/search.png'
import { useMarRest } from '@/hooks/useMarRest'
import { useOuaRest } from '@/hooks/useOuaRest'
import { useChefRest } from '@/hooks/useChefRest'
import hotelMardata from '@/data/Marrakech/hautels.json'
import hotelChefdata from '@/data/Chefchaouen/hotels.json'
import hotelOuadata from '@/data/Ouarzazate/houtels.json'
import { Location } from '@/hooks/useMarRest'
import { DataTypeRM } from '@/hooks/useMarRest'




export default function Prices() {
    const [hotelMar, setHotelMar] = useState(hotelMardata)
    const [hotelChef, setHotelChef] = useState(hotelChefdata)
    const [hotelOua, setHotelOua] = useState(hotelOuadata)
    const [price, setPrice]= useState('')
    const [hr, setHr] = useState(1)
    const [city, setCity] = useState(1)
    const [dataRestaut, setDataRestaut] = useState<DataTypeRM[]>([])
    const restoMR = useMarRest((state)=>state.restoMR)
    const restoChef = useChefRest((state)=>state.restoChef)
    const restoOua = useOuaRest((state)=>state.restoOua)
    useEffect(()=>{
        setHotelMar([])
        setHotelChef([])
        setHotelOua([])
    },[])
    function bigFunction(){
        const numericPrice = parseFloat(price);
        if (!isNaN(numericPrice)) {
            if (hr === 1){
                if (city === 1){
                   const available = hotelMardata.filter((hotel)=>hotel.price < numericPrice) 
                   const firstThree = available.slice(0,3)
                   setHotelMar(firstThree)
                }
                if (city === 2){
                   const available = hotelOuadata.filter((hotel)=> hotel.price < numericPrice) 
                   const firstThree = available.slice(0,3)
                   setHotelOua(firstThree)
                }
                if (city == 3){
                   const available = hotelChefdata.filter((hotel)=>hotel.price<numericPrice) 
                   const firstThree = available.slice(0,3)
                   setHotelChef(firstThree)
                }
                
            }
            if (hr === 2){
                if (city === 1){
                   const available = restoMR.filter((resto:DataTypeRM)=>resto.price<numericPrice) 
                   const firstThree = available.slice(0,4)
                   setDataRestaut(firstThree)
                }
                if (city === 2){
                   const available = restoOua.filter((resto:DataTypeRM)=>resto.price<numericPrice) 
                   const firstThree = available.slice(0,4)
                   setDataRestaut(firstThree)
                }
                if (city == 3){
                   const available = restoChef.filter((resto:DataTypeRM)=>resto.price<numericPrice) 
                   const firstThree = available.slice(0,4)
                   setDataRestaut(firstThree)
                }
            }
        }else{
            setDataRestaut([])
            setHotelChef([])
            setHotelOua([])
            setHotelMar([])
        }
        setPrice('')
         
    }
    function setHrOne(){
        setDataRestaut([])
        setHr(1)
    }
    function setHrtwo(){
        setHotelChef([])
        setHotelMar([])
        setHotelOua([])
        setHr(2)
    }

    return (
        <div className='h-full w-full mt-10 flex justify-center items-center'>
            <div className = 'h-[90%] pt-5 w-[90%] items-start pl-10 space-y-5 xl:max-h-[600px] backdrop-blur-md rounded-2xl flex flex-col overflow-y-scroll scrollbar-none'>
                <div className='flex flex-row space-x-2'>
                    <button onClick={setHrOne} className={`border border-1 border-white rounded-xl ${hr===1 ? 'bg-orange text-white':'bg-darkBlue text-white'}  w-[130px] h-[45px] text-[11px] `}>Hotels</button>
                    <Image src={hotel} alt='hotel' height={40}/>
                    <button onClick={setHrtwo} className={`border border-1 border-white rounded-xl  ${hr===2 ? 'bg-orange text-white':'bg-darkBlue text-white'} w-[130px] h-[45px] text-[11px] `}>Restaurants</button>
                    <Image src={restaut} alt='restaut' height={40}/>
                </div>
                <div className='flex flex-row space-x-2'>
                    <button onClick={()=>setCity(1)} className={`border border-1 border-white rounded-xl ${city===1 ? 'bg-white text-darkBlue':'bg-darkBlue text-white'} w-[130px] h-[45px] text-[11px] `}>Marrakech</button>
                    <button onClick={()=>setCity(2)} className={`border border-1 border-white rounded-xl ${city===2 ? 'bg-white text-darkBlue':'bg-darkBlue text-white'} w-[130px] h-[45px] text-[11px] `}>Ouarzazate</button>
                    <button onClick={()=>setCity(3)} className={`border border-1 border-white rounded-xl ${city===3 ? 'bg-white text-darkBlue':'bg-darkBlue text-white'} w-[130px] h-[45px] text-[11px] `}>Chefchaoune</button>
                </div>
                <div className="relative w-[80%] text-gray-600 mr-1">
                        <button onClick={bigFunction} type="submit" className="absolute flex justify-center items-center right-2 top-3">
                            <Image src={search} alt='seach' height={10} />
                        </button>
                        <input
                            type="search"
                            name="search"
                            placeholder='search'
                            className="bg-fadDarkBlue h-8 px-5 pr-10 w-full text-white rounded-md text-sm focus:outline-none"
                            value={price}  
                            onChange={(e)=>setPrice(e.target.value)}
                        />
                </div>
                <div className='w-[80%] h-full border border-1 border-white rounded-lg '>
                    <div className='flex flex-col space-y-5 pl-5 justify-center h-full  overflow-y-scroll scrollbar-none'>
                        {hr === 2 ? dataRestaut.map((resto : DataTypeRM, num : number)=>(
                            <div key={num} className='w-full'>
                                <div className='w-[90%] flex flex-row space-x-5'>
                                    <Image src={resto.imageUrls[0]} alt='idk' height={130} width={130} className='rounded-md'/>
                                    <div className='flex flex-col justify-center'>
                                        <h1 className='text-orange'>
                                            {resto.title}
                                        </h1>
                                        <p className='text-white'>
                                            {resto.phone}
                                        </p>
                                        <p className='text-white'>
                                            {resto.price}dh
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        )) : (<></>)}
                        {hr === 1 && city === 1 ? hotelMar.map((resto, num:number)=>(
                            <div key={num} className='w-full'>
                                <div className='w-[90%] flex flex-row space-x-5'>
                                    <Image src={resto.imageUrls[0] ? resto.imageUrls[0] : "https://lh5.googleusercontent.com/p/AF1QipNo1kd0eBj6NzKiHLxNE_pPHOG3AI2cp_YFrC3I=w1920-h1080-k-no"} alt='idk' height={130} width={130} className='rounded-md'/>
                                    <div className='flex flex-col justify-center'>
                                        <h1 className='text-orange'>
                                            {resto.title}
                                        </h1>
                                        <p className='text-white'>
                                            {resto.phone}
                                        </p>
                                        <p className='text-white'>
                                            {resto.price}dh
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        )) :(<></>)}
                        {hr === 1 && city === 2 ? hotelOua.map((resto, num:number)=>(
                            <div key={num} className='w-full'>
                                <div className='w-[90%] flex flex-row space-x-5'>
                                    <Image src={resto.imageUrls[0] ? resto.imageUrls[0] : "https://lh5.googleusercontent.com/p/AF1QipNo1kd0eBj6NzKiHLxNE_pPHOG3AI2cp_YFrC3I=w1920-h1080-k-no"} alt='idk' height={130} width={130} className='rounded-md'/>
                                    <div className='flex flex-col justify-center'>
                                        <h1 className='text-orange'>
                                            {resto.title}
                                        </h1>
                                        <p className='text-white'>
                                            {resto.phone}
                                        </p>
                                        <p className='text-white'>
                                            {resto.price}dh
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        )) :(<></>)}
                        {hr === 1 && city === 3 ? hotelChef.map((resto, num:number)=>(
                            <div key={num} className='w-full'>
                                <div className='w-[90%] flex flex-row space-x-5'>
                                    <Image src={resto.imageUrls[0] ? resto.imageUrls[0] : "https://lh5.googleusercontent.com/p/AF1QipNo1kd0eBj6NzKiHLxNE_pPHOG3AI2cp_YFrC3I=w1920-h1080-k-no"} alt='idk' height={130} width={130} className='rounded-md'/>
                                    <div className='flex flex-col justify-center'>
                                        <h1 className='text-orange'>
                                            {resto.title}
                                        </h1>
                                        <p className='text-white'>
                                            {resto.phone}
                                        </p>
                                        <p className='text-white'>
                                            {resto.price}dh
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        )) :(<></>)}
                    </div>
                </div>
            </div>
        </div>
  )
}
