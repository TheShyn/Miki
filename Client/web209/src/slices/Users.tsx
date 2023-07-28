import { getAllUsers, getUser, updateUser } from "@/instance/User"
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    users: [],
    loading: true,
    error: '',
    user: {}
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state:any, action:any)=>{
            state.users = action.payload
            state.loading = false
        })
        builder.addCase(getAllUsers.rejected, (state:any, action:any)=>{
            state.error = action.error.message
            state.loading = false
        })

        builder.addCase(getUser.fulfilled, (state:any, action:any)=>{
            state.user = action.payload
        })


        builder.addCase(updateUser.fulfilled, (state:any, action:any)=>{
            alert("Update user success")
            state.loading = false
        })
        builder.addCase(updateUser.rejected, (state:any, action:any)=>{
            state.error = action.error.message
            state.loading = false
        })
    }
})

export default UserSlice.reducer