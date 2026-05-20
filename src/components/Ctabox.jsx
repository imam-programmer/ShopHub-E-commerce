import React from 'react'

const Ctabox = (props) => {
  
  return (
   <div className='h-30 w-[182.66px] flex flex-col items-center justify-between'>
    <img src={props.img} alt=""  />
    <p className='font-inter leading-6 text-[16px] font-medium text-[#111827]'>{props.p}</p>
   </div>
  )
}

export default Ctabox