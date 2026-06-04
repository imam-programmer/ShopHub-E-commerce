import React from "react";

const Header = () => {
  return (
    <>
      <header className="mb-1 mt-2 md:mt-0 lg:pt-2 relative">
        <div className="container">
          <nav className="flex justify-between items-center h-16.25 flex-wrap md:flex-nowrap">
            <div className="flex items-center lg:gap-[31.52px] md:gap-6">
            <img src="./image/logo.png" alt="" className="w-[80%] md:w-22.5 lg:w-full"/>
            <ul className="md:flex hidden items-center lg:gap-[31.19px] md:gap-5">
              <li className="nav-li">Home</li>
              <li className="nav-li">Categories</li>
              <li className="nav-li">About</li>
              <li className="nav-li">Deals</li>
            </ul>
            </div>
            <div className=" lg:w-lg relative w-[60%] xs:w-[70%] md:w-[40%]">
              <i class="fa-solid fa-magnifying-glass absolute lg:left-3 top-4/8 text-[#9CA3AF]  translate-y-[-50%] lg:text-base text-[12px] left-1"></i>
              <input type="text" placeholder="Search products..." className="search-input"  />
            </div>



            <div className="md:hidden flex items-center  justify-between w-full mt-3 ">
              <label htmlFor="baricon">
              <i class="fa-solid fa-bars text-xl"></i>
              </label>
              <input type="checkbox" id="baricon" className="hidden"/>
                <ul className=" bg-[#0379c1] left-[-120%] w-full h-screen p-4 absolute top-19.5 ul">
              <li className=" text-[14px] font-inter text-[white] mb-1">Home</li>
              <li className=" text-[14px] font-inter text-[white] mb-1">Categories</li>
              <li className=" text-[14px] font-inter text-[white] mb-1">About</li>
              <li className=" text-[14px] font-inter text-[white]">Deals</li>
            </ul>
            <div className="flex items-center gap-4 ">

            <i class="fa-solid fa-cart-shopping text-[19px] relative" ><span className="absolute -top-3 text-[10px] text-white bg-[#EF4444] -right-2.5 py-1 px-1.5 rounded-full" >0</span></i>
            <i class="fa-solid fa-circle-user text-[19px] "></i>
            </div>
            </div>


            <div className="md:flex items-center gap-4 hidden">

            <i class="fa-solid fa-cart-shopping lg:text-[24px] relative" ><span className="cart-span" >0</span></i>
            <i class="fa-solid fa-circle-user lg:text-[24px]  "></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
