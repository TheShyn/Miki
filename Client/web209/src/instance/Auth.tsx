import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "./index";
type PropsLogin = {
    email:string,
    password:string
}
type PropsRegister = {
    email:string,
    password:string,
    confirmPassword: string,
    firstName:string,
    lastName:string,
    dateOfBirth:string,
    check?:boolean
}
export const login = (data: PropsLogin)=>{
    return instance.post("/auth/login",data)
}
export const register = (data: PropsRegister)=>{
    return instance.post("/auth/register",data)
}


export const authLogin = createAsyncThunk("auth/login", async(data: PropsLogin)=>{
    try {
        const item = await instance.post("/auth/login", data)
        return item.data
    } catch (error:any) {
        throw new Error(error?.response?.data.message)
    }
   
})





