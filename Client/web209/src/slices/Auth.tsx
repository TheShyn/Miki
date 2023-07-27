import { authLogin } from "@/instance/Auth";
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: {},
    loading: true,
    isLogin: false,
    error: ''
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(authLogin.fulfilled, (state, action:any)=>{
            console.log(action);
            console.log("here2" );
            state.loading = false
            state.data = {
                accessToken : action.payload.accessToken,
                ...action.payload.user
            }
            state.error = ''
            state.isLogin = true
        })
        builder.addCase(authLogin.rejected, (state, action:any)=>{
            state.error = action?.error?.message || "Error something"
            state.isLogin = false
            state.loading = false
        })
    },
})

export default authSlice.reducer