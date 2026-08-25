import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  FilTerProduct:[]
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    StoreAllProduct: (state,action) => {
      state.products = action.payload
    },
    CategoryfilterProduct: (state,action) => {
      state.FilTerProduct = action.payload
    },
  
  },
})

export const {StoreAllProduct,CategoryfilterProduct} = productSlice.actions

export default productSlice.reducer