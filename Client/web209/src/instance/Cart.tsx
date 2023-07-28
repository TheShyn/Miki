import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./index";

export const getAllOrder = createAsyncThunk("cart/getAllOrder", async ()=>{
    try {
        
        const data = await instance.get("/carts")
        return data.data.carts
    } catch (error:any) {
        throw new Error(error?.response.message)
    }
    
})

export const updateOrder = createAsyncThunk("cart/updateOrder", async ({id, data}:any)=>{
    try {
        
        const order = await instance.patch(`/carts/${id}`,data)
        return {
            id,
            status: data.status
        }
    } catch (error:any) {
        throw new Error(error?.response.message)
    }
    
})