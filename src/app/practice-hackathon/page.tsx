


import React, { useEffect } from 'react'
import {client} from '@/sanity/lib/client';
import ListPage from '@/components/practice-hackathon/ListPage';



async function PracticeHackathon() {
const getProducts = async () => {
  const products = await client.fetch(
    `*[_type=="product"][0..4]{
    "id": _id,
    "title": name,
    description,
    rating,
    "srcUrl": image.asset->url,
    price,
   "category": tags[0],
  "percentage": {
    "discountPercentage": discountPercentage,
    "amount": 0
  }
      }`
  )
    
    return products;
  }
  
  

    const products = await  getProducts();
    console.log("products<<>>", products);
  

  return (
    <>
    <ListPage products={products}/>  
    </>
  )
}

export default PracticeHackathon