import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
   const response = await axios.get("https://dummyjson.com/products")
   sessionStorage.setItem("products",JSON.stringify(response))
    return response.data
})
const productSlice = createSlice({
    name: "products",
    initialState: {
        pending:false,
        products: [],
        error: "",
        productCopy:[],
        currentPage:1
    },
    reducers: {
        searchProduct:(state,action)=>{
            const searchKey=action.payload
            state.products=state.productCopy.filter(item=>item.title.toLowerCase().includes(searchKey.toLowerCase()))
        },
    
    nextPage:(state,action)=>{
        state.currentPage+=1
    },
    prevPage:(state,action)=>{
        state.currentPage-=1
    }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.pending = false
            state.products = action.payload.products
            state.productCopy = action.payload.products
        }),
            builder.addCase(fetchProducts.rejected, (state, action) => {
                state.panding = false
                state.error = "Api Calling Failed !!"
            }),
            builder.addCase(fetchProducts.pending, (state, action) => {
                state.pending = true;
            })
    }
})

export default productSlice.reducer
export const {searchProduct,nextPage,prevPage}=productSlice.actions