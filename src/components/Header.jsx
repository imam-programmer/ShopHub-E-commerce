import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="flex items-center gap-[31.52px]">
            <img src="./image/logo.png" alt="" />
            <ul className="flex items-center gap-[31.19px]">
              <li className="nav-li">Home</li>
              <li className="nav-li">Categories</li>
              <li className="nav-li">About</li>
              <li className="nav-li">Deals</li>
            </ul>
            </div>
            
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
