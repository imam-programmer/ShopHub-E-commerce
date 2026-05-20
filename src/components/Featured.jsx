import React from 'react'
import Featubox from './Featubox'

const Featured = () => {
  return (
    <section className='pt-16 h-135 bg-[rgba(229,231,235,.3)]'>
        <div className="container">
            <div className='flex justify-between mb-8'>
           <h2 className='text-[30px] font-inter font-bold leading-9 text-[#111827]'>Featured Products</h2>
           <button className='text-[#3B82F6] text-[16px] font-medium font-inter leading-6' >View All</button>
            </div>
            <div className='flex justify-between '>
            <Featubox img="./image/feature-img-1.png" title="Wireless Headphones" p="Premium quality sound" price="$99.99"/>
            <Featubox img="./image/feature-img-2.png" title="Smartphone Pro" p="Latest technology" price="$799.99"/>
            <Featubox img="./image/feature-img-3.png" title="Designer Sneakers" p="Comfortable & stylish" price="$129.99"/>
            <Featubox img="./image/feature-img-4.png" title="Gaming Laptop" p="High performance" price="$1,299.99"/>
            </div>
        </div>
    </section>
  )
}

export default Featured