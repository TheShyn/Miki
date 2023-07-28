import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from ".";




export const addToCart = createAsyncThunk("auth/addToCart", async({id,data}:any)=>{
    try {
        const item = await instance.post(`/users/cart/${id}`, data)
        return item.data.data.cart
    } catch (error:any) {
        console.log(error);
        
        throw new Error(error?.response?.data.message)
    }
});