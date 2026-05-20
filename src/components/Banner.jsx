import React from 'react'

const Banner = () => {
  return (
    <section className='h-125 bg-linear-to-r from-[#2563EB] to-[#1E40AF]'>
        <div className="container">
          <div className="banner-container flex justify-between items-center pt-22.5">
            <div className="banner-text">
              <h1 className='text-[#FFFFFF] leading-15 text-[60px] font-bold font-inter mb-3'>Summer Sale</h1>
              <p className='font-inter font-light mb-8 leading-7 text-[20px] text-[#DBEAFE]'>Up to 70% off on selected items. Limited time offer!</p>
              <button className='banner-btn'>Shop Now</button>
            </div>

            <div className="banner-image">
              <img src="./image/banner.png" alt="" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Banner