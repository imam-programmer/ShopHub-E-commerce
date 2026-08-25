import React, { useState } from "react";
import { Link } from "react-router";
import headerData from "../api/headerData.json"
const Header = () => {
  const [navSlide, setnavSlide] = useState(false)
  return (
    <>
      <header className="mb-1 mt-2 md:mt-0 lg:pt-2 relative">
        <div className="container">
          <nav className="flex justify-between items-center h-16.25 flex-wrap md:flex-nowrap">
            <div className="flex items-center lg:gap-[31.52px] md:gap-6">
              <Link to="/">

                <img src="./image/logo.png" alt="" className="w-[80%] md:w-22.5 lg:w-full" />
              </Link>
              <ul className="md:flex hidden items-center lg:gap-[31.19px] md:gap-5">
                {
                  headerData.map((item) => (
                    <Link key={item.id} to={item.path}>
                      <li className="nav-li">{item.name}</li>

                    </Link>
                  ))
                }

              </ul>
            </div>
            <div className=" xl:w-lg relative w-[60%] xs:w-[70%] md:w-[40%]">
              <i className="fa-solid fa-magnifying-glass absolute lg:left-3 top-4/8 text-[#9CA3AF]  translate-y-[-50%] lg:text-base text-[12px] left-1"></i>
              <input type="text" placeholder="Search products..." className="search-input" />
            </div>



            <div className="md:hidden flex items-center  justify-between w-full mt-3 ">
              <button onClick={()=>setnavSlide(!navSlide)}>
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
              <ul className={` bg-[#0379c1] ${navSlide?"navitemhidd":"navitemshow"}  z-50 w-full h-screen p-4 absolute top-17.5 ul text-center`}>
                   {
                  headerData.map((item) => (
                    <Link key={item.id} to={item.path}>
                      <li onClick={()=>setnavSlide(false)} className="font-inter text-[white] mb-4">{item.name}</li>

                    </Link>
                  ))
                }
              </ul>
              <div className="flex items-center gap-4 ">

                <i className="fa-solid fa-cart-shopping text-[19px] relative" ><span className="absolute -top-3 text-[10px] text-white bg-[#EF4444] -right-2.5 py-1 px-1.5 rounded-full" >0</span></i>
                <i className="fa-solid fa-circle-user text-[19px] "></i>
              </div>
            </div>


            <div className="md:flex items-center gap-4 hidden">

              <i className="fa-solid fa-cart-shopping lg:text-[24px] relative" ><span className="cart-span" >0</span></i>
              <i className="fa-solid fa-circle-user lg:text-[24px]  "></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
