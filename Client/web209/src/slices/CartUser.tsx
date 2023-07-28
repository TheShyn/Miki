import { addToCart } from "@/instance/CartUser"
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    carts: [],
    loading: false,
    error:''
}

const cartUserSlice = createSlice({
    name:"cartUser",
    initialState,
    reducers:{

    },
    extraReducers(builder) {
        builder.addCase(addToCart.fulfilled, (state:any,action:any)=>{
            console.log(action.payload)
            state.carts = action.payload
        })

        builder.addCase(addToCart.rejected, (state:any, action:any)=>{
            state.error = action.error.message
            state.loading = false
        })
    },
})

export default cartUserSlice.reducer