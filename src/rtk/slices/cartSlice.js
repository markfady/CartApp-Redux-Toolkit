import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

   export const cartSlice=createSlice({
        initialState:[],
        name:'cartSlice',
        reducers:{
            addToCart:(state,action)=>{
                state.push(action.payload)
            }
        }
    })

export default cartSlice.reducer;
export const{addToCart}=cartSlice.actions;

