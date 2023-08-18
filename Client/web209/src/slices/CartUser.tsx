import { addToCart } from "@/instance/CartUser"
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    carts: []
}

const cartUserSlice = createSlice({
    name:"cartUser",
    initialState,
    reducers:{
        getCartUser: (state,action) => {
            state.carts = action.payload
        },
        addCartUser: (state:any,action:any) => {
            // state.cart = []
            const newProduct = action.payload;
            const existProductIndex = state.carts.findIndex((item: any) => item.product == newProduct.product);
            if (existProductIndex === -1) {
                state.carts.push(newProduct);
            } else {
                state.carts[existProductIndex].quantity++;
            }
        },
        removeCart: (state:any, action:any)=>{
            state.carts = state.carts.filter((item:any)=> item.product !== action.payload)
        },
        increase: (state:any, action: any) => {
            state.carts.find((item: any) => item.product === action.payload).quantity++;
        },
        decrease: (state:any, action:any) => {
            const productFound = state.carts.find((item: any) => item.product === action.payload);
            productFound.quantity--;
            if (productFound.quantity < 1) {
                const confirm = window.confirm('Are you fucking sure??');
                if (confirm) state.carts = state.carts.filter((item: any) => item.product !== action.payload);
                productFound.quantity = 1
            }
        }
    }
})
export const {getCartUser,addCartUser, removeCart,increase, decrease} = cartUserSlice.actions
export default cartUserSlice.reducer