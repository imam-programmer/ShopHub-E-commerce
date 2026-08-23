import React from 'react'

const CategorySideBar = () => {
  return (
    <div className='w-75 mr-2'>

        <h2 className='text-2xl mb-3 font-medium text-teal-700'>Product Categories</h2>
        <ul className='px-2 py-2 border-3 text-teal-700 font-medium border-[#bebebe] rounded-2xl'>
            <li className='border-3 text-teal-700 font-medium border-[#bebebe] rounded-2xl mb-2 cursor-pointer pl-3 pb-.75'>All Products</li>
            <li className='border-3 text-teal-700 font-medium border-[#bebebe] rounded-2xl mb-2 cursor-pointer pl-3 pb-.75'>Shirt</li>
            <li className='border-3 text-teal-700 font-medium border-[#bebebe] rounded-2xl mb-2 cursor-pointer pl-3 pb-.75'>Shirt</li>
            <li className='border-3 text-teal-700 font-medium border-[#bebebe] rounded-2xl mb-2 cursor-pointer pl-3 pb-.75'>Shirt</li>
            <li className='border-3 text-teal-700 font-medium border-[#bebebe] rounded-2xl mb-2 cursor-pointer pl-3 pb-.75'>Shirt</li>
        </ul>
    </div>
  )
}

export default CategorySideBar