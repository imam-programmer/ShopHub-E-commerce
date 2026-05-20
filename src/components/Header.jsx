import React from "react";

const Header = () => {
  return (
    <>
      <header >
        <div className="container">
          <nav className="flex justify-between items-center h-16.25">
            <div className="flex items-center gap-[31.52px]">
            <img src="./image/logo.png" alt="" />
            <ul className="flex items-center gap-[31.19px]">
              <li className="nav-li">Home</li>
              <li className="nav-li">Categories</li>
              <li className="nav-li">About</li>
              <li className="nav-li">Deals</li>
            </ul>
            </div>
            <div className=" w-lg relative">
              <i class="fa-solid fa-magnifying-glass absolute left-3 top-4/8 text-[#9CA3AF]  translate-y-[-50%] text-base"></i>
              <input type="text" placeholder="Search products..." className="search-input"  />
            </div>
            <div className="flex items-center gap-4">

            <i class="fa-solid fa-cart-shopping text-[24px]" ></i>
            <i class="fa-solid fa-circle-user text-[24px]"></i>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
