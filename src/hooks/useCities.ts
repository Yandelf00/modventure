import { create } from "zustand";

type useCitiesProps = {
    city : number,
    setMain : ()=>void,
    setMarra : ()=>void,
    setChef : ()=>void,
    setOua : ()=>void,
}

export const useCities = create<useCitiesProps>((set)=>({
    city : 0,
    setMain :()=>set({city : 0}),
    setMarra:()=>set({city : 1}),
    setChef:()=>set({city:2}),
    setOua:()=>set({city:3})
}))