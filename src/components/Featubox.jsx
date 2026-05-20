import React from 'react'

const Featubox = (props) => {
  return (
    <div className='h-86 w-71.5  p-4 box-border rounded-lg  shadow-box bg-[#FFFFFF]'>
<img src={props.img} alt="" className='block  mx-auto'/>
<h4 className='font-inter text-[16px] font-semibold text-[#111827] mt-4.5 mb-1.5'>{props.title}</h4>
<p className='font-inter font-normal text-[14px] text-[#4B5563] mb-2.75'>{props.p}</p>
<div className='flex justify-between'>
    <h3 className='font-inter font-bold text-[20px] leading-7 text-[#111827]'>{props.price}</h3>
    <i class="fa-solid fa-cart-arrow-down  bg-[#3B82F6] text-[#FFFFFF] pr-9 pl-4 pt-2.5 pb-2.5 rounded-lg" ></i>
</div>
    </div>
  )
}

export default Featubox