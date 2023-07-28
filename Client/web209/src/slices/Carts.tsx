import { getAllOrder, updateOrder } from "@/instance/Cart";
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: [],
    loading:true,
    error:''
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getAllOrder.fulfilled, (state, action)=>{
            console.log(action);
            state.carts = action.payload
            state.loading = false
        })


        builder.addCase(updateOrder.fulfilled, (state:any, action:any)=>{
            console.log(action);
            const index = state.carts.findIndex((item:any)=>item._id === action.payload.id)
            state.carts[index].status = action.payload.status
            state.loading = false
        })
    },
})

export default cartSlice.reducer