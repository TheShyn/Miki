import instance from "./index"
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = (page?:string | number, limit?: string | number , category?: string)=>{
    return instance.get(`/products?limit=${limit || 2}&page=${page}&category=${category || ''}`)
}

export const getProduct = (slug?:string)=>{
    return instance.get(`/products/${slug}`)
}

type IQuery = {
    page?:string | number,
    limit?:string | number,
    category?:string
}

export const getAllProducts = createAsyncThunk("product/getAll",async ({page, limit, category}:IQuery)=>{
    const link = !category ? `/products?limit=${limit || 0}&page=${page || null}` : `/products?limit=${limit || 0}&page=${page || null}&category=${category}`
    const data = await instance.get(link)
    const products = data.data
    return products
})

export const getProduct1 = createAsyncThunk("product/getProduct",async (slug?:string)=>{
    const data = await instance.get(`/products/${slug}`)
    const products = data.data.data
    return products
})


export const addProduct = createAsyncThunk("product/addProduct",async (dataAdd?:any)=>{
   try {
       const {data} = await instance.post(`/products`,dataAdd)
       console.log(data);
       
       return data.data
    
   } catch (error:any) {

    throw new Error(error?.response?.data.message)
   } 
})

export const deleteProduct = createAsyncThunk("product/delete", async(id:string)=>{
    try {
        const {data} = await instance.delete(`/products/${id}`)
        return id
    } catch (error:any) {
        throw new Error(error?.response?.data.message)
    }
})
export const updateProduct = createAsyncThunk("product/update", async({id,data}:any)=>{
    try {
        const update = await instance.patch(`/products/${id}`,data)
        console.log(update);
        
    } catch (error:any) {
        throw new Error(error?.response?.data.message)
    }
})
