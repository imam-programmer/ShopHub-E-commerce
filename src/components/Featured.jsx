import React, { useEffect, useState } from 'react'
import Featubox from './Featubox'
import { useSelector } from 'react-redux'

const Featured = () => {
  const [ViewAll, setViewAll] = useState(false)
  const [products, setProducts] = useState([])
  let Products=useSelector((state)=>state.product.products)
  useEffect(() => {
    console.log(Products)
    setProducts(Products)

  }, [])

function handleViewAll(){
setViewAll(!ViewAll)
}
  
  return (
    <section className='md:pt-16 pt-5  mt-5 md:mt-0  pb-10  bg-[rgba(229,231,235,.3)]'>
        <div className="container">
            <div className='flex justify-between mb-8'>
           <h2 className='md:text-[30px] text-xl font-inter font-bold leading-9 text-[#111827]'>Featured Products</h2>
           <button onClick={handleViewAll} className='text-[#3B82F6] cursor-pointer md:text-[16px] text-[12px] font-medium font-inter leading-6' >{ViewAll?'View Less':'View All'}</button>
            </div>
            <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-4 xl:gap-4 md:gap-2 justify-between'>
           {!ViewAll?
            products.slice(20,28).map((item)=>{
              return <Featubox key={item.id} id={item.id} title={item.title} img={item.thumbnail} p={item.description} price={item.price}/>
            }):
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