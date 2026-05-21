import React from "react";
import Footer2 from "./Footer2";

const Footer = () => {
  const footer1li = ["Home", "Categories", "Deals", "About Us"];
  const footer2li = ["Contact Us", "Shipping Info", "Returns", "FAQ"];
  return (
    <section className="bg-[#111827] h-86.25 pt-12">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <h2 className="font-inter font-bold text-[20px] leading-7 text-[#FFFFFF] mb-4">
              ShopHub
            </h2>
            <p className="text-[16px] font-inter font-normal leading-6 text-[#9CA3AF] w-67.25 mb-4">
              Your one-stop shop for everything you need.
            </p>
            <i class="fa-brands fa-facebook text-[#E5E7EB] mr-4"></i>
            <i class="fa-brands fa-twitter text-[#E5E7EB] mr-4"></i>
            <i class="fa-brands fa-instagram text-[#E5E7EB]"></i>
          </div>

          <div>
            <h3 className="font-inter font-semibold text-[16px] leading-6 text-[#FFFFFF] mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {footer1li.map((items) => (
                <li className="font-inter text-[16px] font-light leading-6 text-[#9CA3AF]">
                  {items}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-inter font-semibold text-[16px] leading-6 text-[#FFFFFF] mb-4">
              Customer Service
            </h3>
            <ul className="flex flex-col gap-2">
              {footer2li.map((items) => (
                <li className="font-inter text-[16px] font-light leading-6 text-[#9CA3AF]">
                  {items}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-inter font-semibold text-[16px] leading-6 text-[#FFFFFF] mb-4">
              Newsletter
            </h3>
            <p className="font-inter text-[16px] font-light leading-6 text-[#9CA3AF] mb-4">
              Subscribe for updates and deals
            </p>
            <div className="w-93.75 bg-[#E5E7EB] relative rounded-lg overflow-hidden">
              <label htmlFor="email" className="text-[16px] font-inter font-normal text-[#FFFFFF] absolute right-0 leading-10 w-[109.34px] pl-5 bg-[#3B82F6] h-10">Subscribe</label>
              <input type="email" placeholder="Your email" className="outline w-full font-inter pl-4 pb-2 pt-2 text-[16px] font-light leading-6  placeholder:text-[#ADAEBC]" />
            </div>
          </div>
         
        </div>
          <hr className="text-[#1f2937] mt-8"/>
          <p className="text-center text-[16px] font-inter font-light
 text-[#9CA3AF] pt-8 ">© 2024 ShopHub. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
