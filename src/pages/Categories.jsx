import React, { useState } from 'react'
import CategoryBanner from "../components/categorypage/CategoryBanner"
import CategorySideBar from '../components/categorypage/CategorySideBar'
import CategoryShowProduct from '../components/categorypage/CategoryShowProduct'
const Categories = () => {
   const [currentPage, setCurrentPage] = useState(1);
  return (
    <main >
<CategoryBanner/>
<div className='bg-[#F8F3E7] pt-10 pb-10'>

<div className='flex justify-between container '>
  <CategorySideBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
  <CategoryShowProduct currentPage={currentPage} setCurrentPage={setCurrentPage}/>
</div>
</div>
    </main>
  )
}

export default Categories