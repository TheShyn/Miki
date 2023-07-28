import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./index";

export const getAllUsers = createAsyncThunk("user/getAllUser", async ()=>{
    try {
        const {data} = await instance.get("/users")
        return data.data 
    } catch (error:any) {
        throw new Error(error?.response.message)
    }
})


export const getUser = createAsyncThunk("user/getUser", async (id:string)=>{
    try {
        const {data} = await instance.get(`/users/detail/${id}`)
        return data.data
    } catch (error:any) {
        throw new Error(error?.response.message)
    }
})
export const updateUser = createAsyncThunk("user/updateUser", async ({id, data}:any)=>{
    try {
        const res = await instance.patch(`/users/${id}`,data)
        return res.data.data
    } catch (error:any) {
        throw new Error(error?.response.message)
    }
})