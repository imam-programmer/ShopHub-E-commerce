import React from 'react'
import Dealbox from './Dealbox'

const Deal = () => {
  return (
    <section className='pt-16  h-91'>
      <div className="container">
      <h2 className='text-[30px] leading-9 font-inter font-bold text-[#111827] text-center mb-8'>Today's Deals</h2>
      <div className='flex justify-between'>
      <Dealbox bg="bg-gradient-to-r from-[#EF4444] to-[#EC4899]" color="#EF4444"/>
      <Dealbox bg="bg-gradient-to-r from-[#22C55E] to-[#14B8A6]" color="#22C55E"/>
      <Dealbox bg="bg-gradient-to-r from-[#A855F7] to-[#6366F1]" color="#A855F7"/>
     
      </div>
      </div>

    </section>
  )
}

export default Deal