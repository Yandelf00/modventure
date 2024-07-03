import { create } from "zustand";
import dataRestaut from '@/data/Chefchaouen/restos.json'

export type Location = {
    lat : number;
    lng: number;
}

export type DataTypeRM= {
    title : string;
    totalScore : number|null;
    reviewsCount : number;
    street : string|null;
    city : string;
    website : string|null;
    phone : string|null;
    imageUrls : string[];
    location : Location;
    price : number;
    rank : number
}

type useMarRestProps = {
    restoChef : DataTypeRM[]
}

export const useChefRest = create<useMarRestProps>((set)=>({
    restoChef : dataRestaut 
}))