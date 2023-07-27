import instance from "./index"
import { createAsyncThunk } from '@reduxjs/toolkit';



type ICate = {

}


export const getDetailCate = (id:any)=>{
    return instance.get(`/categories/${id}`)
}


export const getAllCategories = createAsyncThunk("category/getAll", async()=>{
    const data = await instance.get("/categories")
    const categories = data.data.data
    return categories
    
})

export const deleteCate = createAsyncThunk("category/delete", async(id:string)=>{
    try {
        const data = await instance.delete(`/categories/${id}`)
        return id
    } catch (error:any) {
        throw new Error(error?.response?.data.message)
    }
    
    
})
export const addCate = createAsyncThunk("category/add", async(data:any)=>{
    try {
        const cateAdd = await instance.post(`/categories`,data)
        return cateAdd.data.data
        
    } catch (error:any) {
        throw new Error(error?.response?.data.message)
    }
    
    
})
export const getOneCate = createAsyncThunk("category/getOne", async(id:string)=>{
    try {
        const data = await instance.get(`/categories/${id}`)
        return data.data.data
    } catch (error:any) {
        throw new Error(error?.response?.data.message)
    }
    
    
})

export const updateCate = createAsyncThunk("category/update", async({id, data}:any)=>{
    try {
        const cate = await instance.patch(`/categories/${id}`, data)
        console.log(cate);
        
    } catch (error:any) {
        throw new Error(error?.response?.data.message)
    }
    
    
})