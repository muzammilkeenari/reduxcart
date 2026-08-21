import { createSlice} from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState:{
        wish:[]
    },
    reducers:{
        addtoWishlist:(state,action)=>{
            if(state.wish.find(item=>item.id===action.payload.id)) {
                // alert("item already exists")
                Swal.fire({
                                    title: 'item exists',
                                    text: 'item already exists',
                                    icon: 'info'
                                    
                                    })
            }
            else{
                state.wish.push(action.payload)
                // alert("item added to wishlist")
                Swal.fire({
                                    title: 'success',
                                    text: 'item added to wishlist',
                                    icon: 'success'
                                    
                                    })
            }
        },
        removeFromWishlist:(state,action)=>{
            state.wish=state.wish.filter(item=>item.id!=action.payload)
            // alert("item removed")
             Swal.fire({
                                    title: 'removed',
                                    text: 'item removed',
                                    icon: 'error'
                                    
                                    })
            
        }
    }
})

export default wishlistSlice.reducer
export const {addtoWishlist,removeFromWishlist}=wishlistSlice.actions