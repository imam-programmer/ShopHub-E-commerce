import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryfilterProduct, StoreAllProduct } from '../../features/product/productSlice'

const CategorySideBar = ({currentPage,setCurrentPage}) => {
  const [ActiveCategory, setActiveCategory] = useState("")
let ReduxProductData=useSelector((state)=>state.product.products)
const dispatch = useDispatch()
// console.log(ReduxProductData)

// Category get from Redux data==============================================
let allCategory=ReduxProductData.map((item)=>item.category)
const Categories=[...new Set(allCategory)]
// console.log(Categories)
// Category get from Redux data=========================================

// =Filtering category by data for showing filter data on the ui=============



// =Filtering category by data for showing filter data on the ui=============

function handleCategories(item){
  let FilterData=ReduxProductData.filter(pitem=>pitem.category==item)
 dispatch(CategoryfilterProduct(FilterData))  /* Filtering data push on the Redux to show category base product on  CategoryShowProduct */
setCurrentPage(1)
  setActiveCategory(item)
}
  return (
    <div className='w-75 mr-5'>

        <h2 className='text-2xl mb-5 font-medium text-teal-700'>Product Categories</h2>
        <ul className='px-2 py-2 border-3 text-teal-700 font-medium border-[#bebebe] rounded-2xl'>
          <li onClick={()=>setActiveCategory("All")} className={`border-3 ${ActiveCategory=="All"? "bg-amber-600 text-white":'bg-white'} text-teal-700 font-medium border-[#bebebe] rounded-2xl mb-2 cursor-pointer pl-3 py-1`}>All</li>
          {Categories.map((item,idx)=>(
             <li key={idx} onClick={()=>handleCategories(item)} className={`border-3 ${ActiveCategory==item? "bg-amber-600 text-white":'bg-white'} capitalize text-teal-700 font-medium border-[#bebebe] rounded-2xl mb-2 cursor-pointer pl-3 py-1`}>{item}</li>
          ))}
           
        </ul>
    </div>
  )
}

export default CategorySideBar