import { addToCart } from "@/instance/CartUser"
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: [],
    isLogin:false
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        getUser: (state,action) => {
            state.user = action.payload
            state.isLogin = true
        }
    }
})
export const {getUser} = userSlice.actions
export default userSlice.reducer