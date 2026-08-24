import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoSearchSharp, IoFilter } from "react-icons/io5";
import CategoryShowProductTop from './CategoryShowProductTop';
import Featubox from '../Featubox';

const CategoryShowProduct = () => {
  const [Products, setProducts] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
axios.get("https://dummyjson.com/products?limit=200").then((res=>{
  setProducts(res.data.products)
  setloading(false)
}
)).catch((err)=>{
  console.log(err)
setloading(false)})
  }, [])
  console.log(Products)
  if(loading){
    return(
      <div className='w-full grid grid-cols-3 gap-5 mb-10'>

       { Array.from({length:9},()=>(
          <div className="mx-auto w-full h-70 max-w-sm rounded-md border-3 border-[#bebebe56] p-4">
    <div className=" animate-pulse ">
      <div className="h-40 rounded-2xl bg-gray-300 mb-4" />
      <div className="flex-1 space-y-6 ">
        <div className="h-2 mb-3 rounded bg-gray-300" />
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-gray-300" />
            {/* <div className="col-span-1 h-2 rounded bg-gray-300" /> */}
             {/* <div className="col-span-2 h-2 rounded bg-gray-300" /> */}
            <div className="col-span-1 h-2 rounded bg-gray-300" />
            
          </div>
          <div className="h-2 rounded bg-gray-300" />
          <div className="h-2 rounded bg-gray-300" />
      
        </div>
      </div>
    </div>
  </div>
  
        ))}
      </div>
    )
  }
  return (
    <div className=' w-full'>
      {/*this is product top where search the product */}
    <CategoryShowProductTop/>

<div className='grid grid-cols-3 gap-5 mt-5'>
    {
      Products.map((item)=>(
        <Featubox key={item.id} id={item.id} title={item.title} img={item.thumbnail} p={item.description} price={item.price}/>
      ))
    }

</div>


      {/* =========product show part start====== */}
    </div>
  )
}

export default CategoryShowProduct