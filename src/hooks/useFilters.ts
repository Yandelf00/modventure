import { create } from "zustand";

type useFiltersProps = {
    filter : number;
    setFilOne : ()=>void;
    setFilTwo : ()=>void;
    setFilThree: ()=>void;
}

export const useFilters = create<useFiltersProps>((set)=>({
    filter : 1,
    setFilOne : ()=>set({filter: 1}),
    setFilTwo : ()=>set({filter: 2}),
    setFilThree : ()=>set({filter: 3})
}))