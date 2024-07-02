import React from 'react'
import Image from 'next/image'
import secMarr from '@/assets/secondmara.png'
import noshadwo from '@/assets/noshadow.png'
import squiggle from '@/assets/squiggle.png'
import ouarzazate from '@/assets/ouarzazate.png'


export default function Ouarzazate() {
  return (
    <div className='w-full h-full flex flex-col relative  mt-[50px] justify-center '>
        <div className='absolute inset-x-0 bottom-0 w-full h-[70%]'
            style={{
                backgroundImage : `url(${noshadwo.src})`,
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
            }} 
        ></div>
        <div className='absolute inset-x-0 bottom-0 w-full flex justify-center items-end h-[50%]'
            style={{
                backgroundImage : `url(${squiggle.src})`,
            }} 
        >
            <div className='w-[90%] h-[70%] flex flex-row justify-between items-start space-x-5 scrollbar-none overflow-scroll'>
                <div className='flex flex-col'>
                    <h2 className='text-orange'>Atlas Film Studios</h2>
                    <p className='text-white xl:text-[13px] text-[16px] mt-3'>
                        Known as the Hollywood of Africa, the Atlas Film Studios 
                        have produced numerous blockbuster films. Take a 
                        guided tour to see the sets and learn about the movie-making
                        process in Ouarzazate.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-orange'>Taourirt Kasbah</h2>
                    <p className='text-white xl:text-[13px] text-[16px] mt-3'>
                        One of the most impressive kasbahs in Morocco, Taourirt Kasbah 
                        offers a glimpse into the opulent lifestyle of the Glaoui dynasty.
                        The kasbahs intricate architecture and stunning interiors are a must-see.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-orange'>Ait Ben Haddou</h2>
                    <p className='text-white xl:text-[13px] text-[16px] mt-3'>
                        A UNESCO World Heritage site, Ait Ben Haddou is a fortified 
                        village that has served as the backdrop for many famous films. 
                        Explore the ancient kasbahs and enjoy panoramic views of the surrounding desert.
                    </p>
                </div>
            </div>
        </div>
        <div className='absolute top-0 flex flex-row inset-x-0 space-x-10 h-[350px]'>
            <Image src={ouarzazate} alt='secmar' height={350} className='ml-5 rounded-3xl'/>
            <div className='h-full w-1/2 flex flex-col items-start mt-5 space-y-5 scrollbar-none overflow-y-scroll'>
                <h1 className=' text-orange font-bold text-[20px]'>Ouarzazate</h1>
                <p className='text-white xl:text-[15px] text-[20px]'>
                    Often referred to as the Door of the Desert,
                    Ouarzazate is a captivating city known for its 
                    stunning landscapes, ancient kasbahs, and thriving film industry. 
                    This desert gem offers a unique blend of history, culture, and adventure.
                </p>
            </div>
        </div>
    </div>
  )
}