'use client'
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import React, { useState } from 'react'

function ListPage({products}:any) {

  const [form, setForm ] = useState({
    name: "",
    email: "",
    selectedProduct: null,
  });

  
  

const [formOpen, setFormOpen] = useState(false);

const handleSubmit = async  (e:any)=>{


  e.preventDefault(); // Prevent page refresh
  console.log()
  console.log(form); // Log the form data




try {

  
  const customerInfo = { 
    _type : "customer",
    name: form.name,
    email: form.email,
    product: form.selectedProduct
  }

  
  const res = await client.create(customerInfo);
  if(res){
    console.log("User Created in Sanity ", res);
  }
  
} catch (error) {
  console.log("Error Creating Customer", error);
  
}
  

     



}

  return (
    <div>{
      products.map((product:any)=>(
       <div className='' key={product.id}>

             <div> {
                product.title
              }
            </div>
            <Image  src={`${product.srcUrl}`} // Replace with your image URL
        alt="Description of image"
        width={500} // Set the desired width
        height={300} // Set the desired height
        />
        <div>{product.category}</div>
        <div>{product.price}</div>
        <div>{product.rating}</div>
        <div>{product.description}</div>
        <div>{product.discount}</div>

            
            <div className="bg-blue-600 text-white rounded-xl px-1 py-2 ml-2" onClick={()=>{setFormOpen(!formOpen), setForm((prev)=>({...prev, selectedCart: product.name}))}}>Checkout</div>
   </div>          
        )

      )}


{ formOpen && 
              
              <form onSubmit={handleSubmit}>
                  <label htmlFor="Name">Name</label>
                  <input type="name"  onChange={(e)=>setForm((prev)=>({...prev, name:e.target.value}))} value={form.name} />

                <label htmlFor="email">Email</label>
                <input type="email" onChange={(e)=> setForm((prev)=> ({...prev, email: e.target.value}))} value={form.email} />
                <button type="submit">Placed An Order</button>
              </form>
          }
      </div>
  )
}

export default ListPage