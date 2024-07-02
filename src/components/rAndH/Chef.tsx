import React from 'react'
import Map from '../Map'
import Image from 'next/image'
import restauts from '@/assets/restauts.png'
import MapChef from '../MapChef'

export default function Chef() {
  return (
    <div className='w-[90%] h-[70%] flex flex-row justify-between items-start space-x-3'>
        <div className=''>
            <Image src={restauts} alt='restauts' height={350} className='rounded-xl'/>
        </div>
        <div className=''>
            <MapChef/>
        </div>
    </div>
  )
}