import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import bannerImageData from "../api/bannerImageData.json"
import { Link } from 'react-router';
const Banner = () => {
  return (
    <section className='xs:py-22.5 py-15 bg-linear-to-r from-[#2563EB] to-[#1E40AF]' >
      <div className="container">
        <div className="banner-container flex justify-between items-center gap-10 md:gap-0  flex-col md:flex-row">
          <div className="banner-text text-center md:text-start">
            <h1 className='text-[#FFFFFF] leading-15 text-4xl xs:text-[40px] md:text-[45px] lg:text-[60px] font-bold font-inter mb-3 '>Summer Sale</h1>
            <p className='font-inter font-light mb-2 xs:mb-5 mb:mb-8 leading-7 md:text-[20px] text-[#DBEAFE]'>Up to 70% off on selected items. Limited time offer!</p>
            <Link to="/categories">
            <button className='banner-btn '>Shop Now</button>
            </Link>
          </div>

          <div className="banner-image">


            <Swiper navigation={true} modules={[Autoplay]} pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true} className="mySwiper w-70 xs:w-100 rounded-2xl">
              {
                bannerImageData.map((item) => (

                  <SwiperSlide>
                    <img className='w-full h-70 xs:h-80 ' src={item.image} alt="" loading='lazy' />
                  </SwiperSlide>
                ))
              }


            </Swiper>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Banner