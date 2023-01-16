import { createSlice } from '@reduxjs/toolkit'

   export const cartSlice=createSlice({
        initialState:[],
        name:'cartSlice',
        reducers:{
            addToCart:(state,action)=>{
                state.push(action.payload)
            },
            deleteFromCart:(state,action)=>{
                state.pop(action.payload)
            }
        }
    })

export default cartSlice.reducer;
export const{addToCart,deleteFromCart}=cartSlice.actions;

