import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: 'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state,action) =>{
            if(state.cart.find(item =>item.id==action.payload.id)){
               const product=state.cart.find(item =>item. id==action.payload.id)
                product.quantity+=1
                alert('item quantity updated')
            }
            else{
                state.cart.push({ ...action.payload, quantity:1})
                
                alert('item added to cart')
            }
            
        },
        removeFromCart:(state,action)=>{
            state.cart=state.cart.filter(item=>item.id!=action.payload)
            alert('item removed from cart')
        },
        increaseQuantity:(state,action)=>{
            const product=state.cart.find(item =>item. id==action.payload)
            product.quantity+=1
            
        },
        decreaseQuantity:(state,action)=>{
            const product=state.cart.find(item =>item. id==action.payload)
            if(product.quantity==1){
                state.cart=state.cart.filter(item =>item. id!=action.payload)
            }
            else{
                product.quantity-=1
            }
        }
    }
})

export default cartSlice.reducer
export const {addtoCart,removeFromCart,increaseQuantity,decreaseQuantity}=cartSlice.actions