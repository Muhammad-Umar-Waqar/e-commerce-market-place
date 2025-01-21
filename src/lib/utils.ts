import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {client} from '@/sanity/lib/client';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const compareArrays = (a: any[], b: any[]) => {
  return a.toString() === b.toString();
};




export const getProducts = async () => {
    const products = await client.fetch(
      `*[_type=="product"][0..4]{
    "id": _id,
    "title": name,
    description,
    rating,
    "srcUrl": image.asset->url,
    price,
   "category": tags[0],
  "discount": {
    "percentage": discountPercentage,
    "amount": 0
  }
      }`
    )
    
    return products;
  }