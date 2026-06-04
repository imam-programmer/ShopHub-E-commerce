import React from 'react'

const Banner = () => {
  return (
    <section className='xs:py-22.5 py-15 bg-linear-to-r from-[#2563EB] to-[#1E40AF]' >
        <div className="container">
          <div className="banner-container flex justify-between items-center gap-10 md:gap-0  flex-col md:flex-row">
            <div className="banner-text text-center md:text-start">
              <h1 className='text-[#FFFFFF] leading-15 text-4xl xs:text-[40px] md:text-[60px] font-bold font-inter mb-3 '>Summer Sale</h1>
              <p className='font-inter font-light mb-2 xs:mb-5 mb:mb-8 leading-7 md:text-[20px] text-[#DBEAFE]'>Up to 70% off on selected items. Limited time offer!</p>
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