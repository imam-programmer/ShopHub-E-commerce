import React from 'react'

const Dealbox = ({bg,color}) => {

  return (
    <div className={`h-42 w-[389.33px] p-6  rounded-lg  ${bg}`}>
        <h3 className='text-[24px] font-bold font-inter leading-8 text-[#FFFFFF] mb-2'>Flash Sale</h3>
        <p className='text-[16px] font-normal font-inter leading-6 text-[#FFFFFF] mb-4'>Up to 50% off electronics</p>
        <button style={{color:color}} className=' text-btnColor  text-[16px] font-inter font-semibold pt-2.5 pb-2.5 pr-6 pl-6 bg-[#FFFFFF] rounded-lg'>Shop Now</button>
      </div>
  )
}

export default Dealbox