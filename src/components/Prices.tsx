import React from 'react'
import AnSearch from './anSearch'
import SecSearch from './SecSearch'

export default function Prices() {
  return (
    <div className='h-full w-full mt-10 flex justify-center items-center'>
        <div className='h-[90%] pt-5 w-[90%] items-center xl:max-h-[600px] backdrop-blur-md rounded-2xl flex flex-col overflow-y-scroll scrollbar-none'>
            <SecSearch/>
            <div className='w-[80%] h-full mt-3 border border-1 border-white rounded-lg '>

            </div>
        </div>
    </div>
  )
}
