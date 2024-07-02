import { create } from "zustand";

type useCitiesProps = {
    city : number,
    setMain : ()=>void,
    setMarra : ()=>void,
    setChef : ()=>void,
    setOua : ()=>void,
    setRes : ()=>void,
    setAbout: ()=>void,
    setPricing: ()=>void,
}

export const useCities = create<useCitiesProps>((set)=>({
    city : 0,
    setMain :()=>set({city : 0}),
    setMarra:()=>set({city : 1}),
    setChef:()=>set({city:2}),
    setOua:()=>set({city:3}),
    setRes:()=>set({city:4}),
    setAbout:()=>set({city:5}),
    setPricing:()=>set({city:6})
}))