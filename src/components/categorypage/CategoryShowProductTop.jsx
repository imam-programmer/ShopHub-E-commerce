import React from 'react'
import { IoSearchSharp, IoFilter } from "react-icons/io5";
const CategoryShowProductTop = () => {
  return (
    <div>
          <div className='flex justify-between '>
        <h3 className='border-3 border-[#bebebe] py-1 text-teal-600 font-medium rounded-2xl w-25 px-2 text-center'><span>247</span> items</h3>
        <div className='border-3 flex items-center gap-3 w-[65%] border-[#bebebe] px-3 py-1 rounded-full' >
          <IoSearchSharp size={20} className='text-teal-600 ' />
          <input className='w-full placeholder:text-teal-600 text-teal-600  outline-none' type="text" placeholder='Search for products' />
        </div>

        <div>
          <div className='cursor-pointer text-teal-600  border-3 w-25 flex items-center gap-2 border-[#bebebe] px-5 py-1 rounded-full'>
            <h3 >Filter </h3>
            <IoFilter />
          </div>
        </div>

        <select className="modern-select border-3 text-teal-600 border-[#bebebe] outline-none rounded-full px-3 py-1">
          <option value="sort">Sort by</option>
          <option value="low">Low to high</option>
          <option value="High">High to low</option>
        </select>

      </div>
    </div>
  )
}

export default CategoryShowProductTop