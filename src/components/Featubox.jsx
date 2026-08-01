import React, { useState } from 'react'

const Featubox = (props) => {
  const [showDescription, setShowDescription] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  return (
    <div className='  xs:p-4 md:p-4 px-2 py-3  box-border rounded-lg  shadow-box bg-[#FFFFFF]'>
<img src={props.img} alt="" className='block  mx-auto'/>
<h4 className={showTitle?"title":"title titleshow"} onClick={()=>setShowTitle(!showTitle)}>{props.title}</h4>
<p className={showDescription?"desc":"desc clamp"} onClick={()=>setShowDescription(!showDescription)}>{props.p}</p>
<div className='flex justify-between'>
    <h3 className='font-inter font-bold text-[14px] md:text-[18px] lg:text-[20px] leading-7 text-[#111827]'>${props.price}</h3>

    <button onClick={()=>console.log(props.id)}>

    <i className="fa-solid fa-cart-arrow-down  bg-[#3B82F6] text-[#FFFFFF] pr-6 lg:text-base text-[12px] pl-2 pb-2 pt-2 lg:pr-9 lg:pl-4 lg:pt-2.5 lg:pb-2.5 rounded-lg" ></i>
    </button>
</div>
    </div>
  )
}

export default Featubox