import React from 'react'
import { Link, useLocation } from 'react-router'
import { FaAngleRight } from "react-icons/fa6";
const CategoryBanner = () => {
  let { pathname } = useLocation()
  let hup = pathname.split("/")
  let path = hup[hup.length - 1]

  return (
    <div className='h-100 bg-teal-900'>
      <div className='container flex flex-col h-full justify-center'>

        <h2 className='text-[60px] text-white w-150 leading-20 font-medium mb-2'>Browse Fashion Categories</h2>

        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>

            <h3><Link to="/" className='text-white'>Home</Link></h3>
            <h4><FaAngleRight className='mt-1 text-gray-400' size={16} /></h4>
            <h3 className=' text-gray-400'>{path}</h3>
          </div>
          <p className='text-gray-300 w-90 '>Explore carefully curated fashion categories designed for every mood and moment.</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryBanner