import React from "react";

const Header = () => {
  return (
    <>
      <header className="mb-6.5 pt-2">
        <div className="container">
          <nav className="flex justify-between items-center h-16.25 flex-wrap ">
            <div className="flex items-center gap-[31.52px]">
            <img src="./image/logo.png" alt="" className="w-[80%]"/>
            <ul className="md:flex hidden items-center gap-[31.19px] ">
              <li className="nav-li">Home</li>
              <li className="nav-li">Categories</li>
              <li className="nav-li">About</li>
              <li className="nav-li">Deals</li>
            </ul>
            </div>
            <div className=" md:w-lg relative w-[60%]">
              <i class="fa-solid fa-magnifying-glass absolute md:left-3 top-4/8 text-[#9CA3AF]  translate-y-[-50%] md:text-base text-[12px] left-1"></i>
              <input type="text" placeholder="Search products..." className="search-input"  />
            </div>



            <div className="md:hidden flex items-center relative justify-between w-full mt-3 ">
              <label htmlFor="baricon">
              <i class="fa-solid fa-bars text-xl"></i>
              </label>
              <input type="checkbox" id="baricon" className="hidden"/>
                <ul className=" bg-blue-400 left-[-120%] w-full p-3 absolute top-6 ul">
              <li className=" text-[14px] font-inter text-[#374151] mb-1">Home</li>
              <li className=" text-[14px] font-inter text-[#374151] mb-1">Categories</li>
              <li className=" text-[14px] font-inter text-[#374151] mb-1">About</li>
              <li className=" text-[14px] font-inter text-[#374151]">Deals</li>
            </ul>
            <div className="flex items-center gap-4 ">

            <i class="fa-solid fa-cart-shopping text-[19px] relative" ><span className="absolute -top-3 text-[10px] text-white bg-[#EF4444] -right-2.5 py-1 px-1.5 rounded-full" >0</span></i>
            <i class="fa-solid fa-circle-user text-[19px] "></i>
            </div>
            </div>


            <div className="md:flex items-center gap-4 hidden">

            <i class="fa-solid fa-cart-shopping text-[24px] relative" ><span className="cart-span" >0</span></i>
            <i class="fa-solid fa-circle-user text-[24px] "></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
