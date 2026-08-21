import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slice/ProductSlice'
import cartReducer from './slice/cartSlice'
import wishReducer from './slice/wishslice'
const store = configureStore({
    reducer: {
         productReducer,
         cartReducer,
         wishReducer
    }
})
export default store