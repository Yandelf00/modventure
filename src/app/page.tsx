"use client"
import Image from "next/image";
import theBackground from "@/assets/background.png"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Sections from "@/components/Sections";
import Marrakech from "@/components/Marrakech";
import Chefchaoune from "@/components/Chefchaoune";
import Ouarzazate from "@/components/Ouarzazate";
import { useCities } from "@/hooks/useCities";


export default function Home() {
  const city = useCities((state)=>state.city)
  return (
    <main className="h-full w-full">
      <div className="h-full w-full fixed">
        <Image src={theBackground} alt="idk" fill={true}/>
      </div>
      <div className="absolute top-0 h-full w-full flex flex-row">
        <div className="h-full w-[75%] flex flex-col">
          <div className=" w-full pl-20 flex flex-col">
            <Navbar/>
            {city === 0 ? (<Hero/>) : (<></>)}
          </div>
          {city === 1 ? (<Marrakech/>):(<></>)}
          {city === 2 ? (<Chefchaoune/>):(<></>)}
          {city === 3 ? (<Ouarzazate/>):(<></>)} 
        </div> 
        <div className="h-full w-[25%] flex flex-row">
          <Search/>
          <Sections/>
        </div> 
      </div>
    </main>
  );
}
