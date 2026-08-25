import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryfilterProduct, StoreAllProduct } from '../../features/product/productSlice'

const CategorySideBar = ({ currentPage, setCurrentPage }) => {
  const [ActiveCategory, setActiveCategory] = useState("")
  let ReduxProductData = useSelector((state) => state.product.products)

  const dispatch = useDispatch()
  // console.log(ReduxProductData)

  // Category get from Redux data==============================================
  let allCategory = ReduxProductData.map((item) => item.category)
  const Categories = [...new Set(allCategory)]
  // console.log(Categories)
  // Category get from Redux data=========================================

  // =Filtering category by data for showing filter data on the ui=============

  const Beauty = ReduxProductData.filter((item) => item.category == "beauty")
  const fragrances = ReduxProductData.filter((item) => item.category == "fragrances")
  const furniture = ReduxProductData.filter((item) => item.category == "furniture")
  const groceries = ReduxProductData.filter((item) => item.category == "groceries")
  const Homedecoration = ReduxProductData.filter((item) => item.category == "home-decoration")
  const kitchenAccessories = ReduxProductData.filter((item) => item.category == "kitchen-accessories")
  const laptops = ReduxProductData.filter((item) => item.category == "laptops")
  console.log(Beauty, fragrances, furniture, groceries, Homedecoration, kitchenAccessories, laptops)
  // =Filtering category by data for showing filter data on the ui=============

  function handleCategories(item) {
    let FilterData = ReduxProductData.filter(pitem => pitem.category == item)
    dispatch(CategoryfilterProduct(FilterData))  /* Filtering data push on the Redux to show category base product on  CategoryShowProduct */
    setCurrentPage(1)
    setActiveCategory(item)

  }
  return (
    <div className='w-75 mr-5'>

      <h2 className='text-2xl mb-5 font-medium text-teal-700'>Product Categories</h2>
      <ul className='px-2  py-2 border-3 text-teal-700 font-medium border-[#bebebe] rounded-2xl'>
        <div  onClick={() => setActiveCategory("All")} className={`border-3 flex justify-between pr-3 ${ActiveCategory == "All" ? "bg-amber-600 text-white" : 'bg-white'} text-teal-700 font-medium border-[#bebebe] rounded-2xl mb-2 cursor-pointer pl-3 py-1`}>
        <li>All</li>
  <span>{ReduxProductData.length}</span>
        </div>
        {Categories.map((item, idx) => (
          <div key={idx} onClick={() => handleCategories(item)} className={`border-3 ${ActiveCategory == item ? "bg-amber-600 text-white" : 'bg-white'} flex items-center justify-between pr-3 capitalize text-teal-700 font-medium border-[#bebebe] rounded-2xl mb-2 cursor-pointer pl-3 py-1`}>
            <li >{item} </li>
            <span className=''>{item == "beauty" ? Beauty.length : item == "fragrances" ? fragrances.length : item == "furniture" ? furniture.length : item == "groceries" ? groceries.length : item == "home-decoration" ? Homedecoration.length : item == "kitchen-accessories" ? kitchenAccessories.length : item == "laptops" && laptops.length}</span>
          </div>
        ))}

      </ul>
    </div>
  )
}

export default CategorySideBar