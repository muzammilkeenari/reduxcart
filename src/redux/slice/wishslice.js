import { createSlice} from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState:{
        wish:[]
    },
    reducers:{
        addtoWishlist:(state,action)=>{
            if(state.wish.find(item=>item.id===action.payload.id)) {
                alert("item already exists")
            }
            else{
                state.wish.push(action.payload)
                alert("item added to wishlist")
            }
        },
        removeFromWishlist:(state,action)=>{
            state.wish=state.wish.filter(item=>item.id!=action.payload)
            alert("item removed")
        }
    }
})

export default wishlistSlice.reducer
export const {addtoWishlist,removeFromWishlist}=wishlistSlice.actions