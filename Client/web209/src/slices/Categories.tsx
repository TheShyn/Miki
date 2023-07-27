import { addCate, deleteCate, getAllCategories, getOneCate, updateCate } from "@/instance/Categories"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories: [],
    loading: false,
    error:'',
    category:{},
    success: false
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getAllCategories.fulfilled, (state,action)=>{
            state.categories = action.payload
            state.loading = true
        })
        //delete cate

        builder.addCase(deleteCate.fulfilled, (state:any,action:any)=>{
            const newData = state.categories.filter((item:any)=> item._id !== action.payload)
            state.categories = newData
            state.loading= false
            alert("Xóa thành công")
        }),
        /// add cate
        builder.addCase(addCate.fulfilled, (state:any,action:any)=>{
            state.categories.push(action.payload)
            state.loading= false
            state.error = ''
            state.success = true
        })
        builder.addCase(addCate.rejected, (state:any,action:any)=>{
            state.success = false
            state.error = action?.error?.message
        }),
        //get one 
        builder.addCase(getOneCate.fulfilled, (state:any,action:any)=>{
            state.category = action.payload
            state.success = true
        })

        //update
        builder.addCase(updateCate.fulfilled, (state:any,action:any)=>{
            console.log(action);
            state.success = true
        })

        builder.addCase(updateCate.rejected, (state:any,action:any)=>{
            state.success = false
            state.error = action?.error?.message
        })
    }
})

export default categorySlice.reducer