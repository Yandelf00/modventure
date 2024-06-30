import Image from "next/image";
import theBackground from "@/assets/background.png"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import Sections from "@/components/Sections";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="h-full w-full fixed">
        <Image src={theBackground} alt="idk" fill={true}/>
      </div>
      <div className="absolute top-0 h-full w-full flex flex-row">
        <div className="h-full w-[75%] pl-20 flex flex-col">
          <Navbar/>
          <Hero/>
        </div> 
        <div className="h-full w-[25%] flex flex-row">
          <Search/>
          <Sections/>
        </div> 
      </div>
    </main>
  );
}
