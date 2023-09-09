import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../store';
import { producttemprestype } from "./mockproduct";



let  initialState : producttemprestype[] = [];

const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {             
        loadProduct : (state) => state,
        selectAllProduct : (state,action) => action.payload,
        createProduct : (state,action) => { state.push(action.payload)},
        errorProduct : (error) => error,
    }
});
  
  export const { loadProduct, selectAllProduct, createProduct, errorProduct} = productSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectProducts = (state: RootState) => state.products;
  
  export default productSlice.reducer;