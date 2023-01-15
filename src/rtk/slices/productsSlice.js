import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

 export const fetchData=createAsyncThunk('productsSlice/fetchData',async()=>{
       const res=await fetch('https://fakestoreapi.com/products/');
       const data=await res.json();
       return data;
})

export const productsSlice=createSlice({
    initialState:[],
    name:'productsSlice',
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
})
export default productsSlice.reducer;
