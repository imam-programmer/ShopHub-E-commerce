import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    StoreAllProduct: (state,action) => {
      state.products = action.payload
    },
  
  },
})

export const {StoreAllProduct} = productSlice.actions

export default productSlice.reducer