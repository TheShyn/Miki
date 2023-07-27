import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from "@/slices/Products"
import categoriesReducer from "@/slices/Categories"
import authReducer from "@/slices/Auth"
const store = configureStore({
    reducer:{
        products: productsReducer,
        categories: categoriesReducer,
        auth: authReducer
    }
})



export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export default store