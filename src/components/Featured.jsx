import React, { useEffect, useState } from 'react'
import Featubox from './Featubox'

const Featured = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
let data=fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
  setProducts(data.products)
});
  }, [])


  
  return (
    <section className='md:pt-16 pt-5  mt-5 md:mt-0  pb-10  bg-[rgba(229,231,235,.3)]'>
        <div className="container">
            <div className='flex justify-between mb-8'>
           <h2 className='md:text-[30px] text-xl font-inter font-bold leading-9 text-[#111827]'>Featured Products</h2>
           <button className='text-[#3B82F6] md:text-[16px] text-[12px] font-medium font-inter leading-6' >View All</button>
            </div>
            <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-4 xl:gap-4 md:gap-2 justify-between'>
           {
            products.map((item)=>{
              return <Featubox key={item.id} id={item.id} title={item.title} img={item.thumbnail} p={item.description} price={item.price}/>
            })
           }   
            </div>
        </div>
    </section>
  )
}
// flex justify-between flex-wrap gap-2
export default Featured